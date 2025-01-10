function saveMonthlyPayslipsIntoDrive() {
    try {
        const driveFolder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
        const weekRange = getStartDateAndEndDateOfWeek();
        console.log("Start of the Week:", weekRange.startOfWeek);
        console.log("End of the Week:", weekRange.endOfWeek);

        const searchQuery = `from:${CONFIG.RECIPIENT} has:attachment after:${weekRange.startOfWeek}`;

        var threads = GmailApp.search(searchQuery);

        if (!threads.length) {
            GmailApp.sendEmail(CONFIG.FINANCE_EMAIL, "Error No such email found", "Nothing to do :)");
            return;
        }

        const [singleThread] = threads;
        const messages = singleThread.getMessages();
        const [singleMessage] = messages;
        const dateOfPayslips = singleMessage.getDate();
        const parsedDate = `${dateOfPayslips.getDate()}-${dateOfPayslips.getMonth() + 1}-${dateOfPayslips.getFullYear()}`
        const [attachment] = singleMessage.getAttachments();
        const attachmentBlob = attachment.copyBlob();

        if (!checkIfFileTypeIsPDF(attachment.getContentType())) {
            console.log('Only PDF file are supported. Nothing to do.');
            return;
        }

        const fileName = `Payslip from ${CONFIG.COMPANY_NAME} for ${parsedDate}`;

        if (checkIfFileNameAlreadyExists(fileName)) {
            console.log('Payslips already attached. Nothing to do');
        } else {
            driveFolder.createFile(attachmentBlob).setName(fileName);
        }
    } catch (error) {
        console.log('Error ->', error);
        GmailApp.sendEmail(CONFIG.FINANCE_EMAIL, "Error Error Error", `Something went wrong. ${error}`);
    }

}
