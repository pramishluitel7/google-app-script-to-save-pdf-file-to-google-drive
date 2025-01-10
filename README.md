# google-app-script-to-save-pdf-file-to-google-drive

## What is this repository about?

This is a simple Google App Script that searches for PDF files from a specific owner and saves them to Google Drive. At the moment, it only saves a file that has only one email attachment, and I'm starting with payslips. 

## Motivation

Every time I need to accumulate payslips from every company I have worked for so far, I had to manually search in my Gmail account, which is time-consuming. So, I made this simple script that saves my payslips into my Google Drive.

## Key files to look at

1. saveAllPDFFileIntoDrive.js -> When this function triggers, it saves all pdf file into Google Drive.
2. saveMonthlyPDFFileIntoDrive.js -> When this function triggers, it saves the pdf file for the current week into Google Drive.
3. checkIfFileNameAlreadyExists.js -> Checks if the filename already exists in Google Drive.
4. checkIfFileTypeIsPDF.js -> Checks if the file type is PDF.
5. config.js -> Stores all the configuration required for the project.

## Key things to consider for this project

1. CONFIG.DRIVE_FOLDER_ID -> This is the folder Id which you can get after creating a folder in Google Drive. You can get this from URL.

## How to run this project

Unfortunately, you cannot run this project locally on your machine. You have to create a Google App Script project. For more info, please visit this [link](https://developers.google.com/apps-script).

> If you want to use this project, please feel free to use it for your personal use. Do not use it for work. I will not be responsible for any risks associated with using it at your workplace.
