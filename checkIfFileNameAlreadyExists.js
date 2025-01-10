function checkIfFileNameAlreadyExists(fileName) {
    return driveFolder.getFilesByName(fileName).hasNext();
}
