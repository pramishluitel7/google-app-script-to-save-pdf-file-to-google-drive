function saveAllPayslipsIntoDrive() {
    try {
        const driveFolder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
        const threads = GmailApp.search(`from:${CONFIG.RECIPIENT} has:attachment`);

        if (!threads.length) {
            GmailApp.sendEmail(CONFIG.FINANCE_EMAIL, "Error No such email found", "Nothing to do :)");
            return;
        }

        console.time('Start');

        for (const thread of threads) {
            const messages = thread.getMessages();
            for (const message of messages) {
                const dateOfPayslips = message.getDate();
                const parsedDate = `${dateOfPayslips.getDate()}-${dateOfPayslips.getMonth() + 1}-${dateOfPayslips.getFullYear()}`
                const [attachment] = message.getAttachments();
                const attachmentBlob = attachment.copyBlob();

                const fileName = `Payslip from ${CONFIG.COMPANY_NAME} for ${parsedDate}`;
                if (checkIfFileNameAlreadyExists(fileName)) {
                    console.log('Payslips already attached', fileName)
                } else {
                    driveFolder.createFile(attachmentBlob).setName(fileName);
                }
            }
        }

        console.timeEnd('Start');

    } catch (error) {
        console.log('Error ->', error);
        GmailApp.sendEmail(CONFIG.FINANCE_EMAIL, "Error Error Error", `Something went wrong. ${error}`);
    }

}
