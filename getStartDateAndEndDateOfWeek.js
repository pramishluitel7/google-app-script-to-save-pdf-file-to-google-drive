function getStartDateAndEndDateOfWeek() {
    const now = new Date();

    // Calculate the start of the week (Monday)
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // If Sunday, go back 6 days
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() + diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0); // Set to start of the day (00:00:00)

    // Calculate the end of the week (Friday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 4); // Add 4 days to Monday
    endOfWeek.setHours(23, 59, 59, 999); // Set to end of the day (23:59:59)

    // Format the dates as YYYY/MM/DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return {
        startOfWeek: formatDate(startOfWeek),
        endOfWeek: formatDate(endOfWeek),
    };
}
