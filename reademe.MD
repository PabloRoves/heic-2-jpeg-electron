# HEIC to JPEG Electron App

This Electron application converts HEIC image files to JPEG format. It provides a simple GUI for selecting a HEIC file and converting it to JPEG.

## Disclaimer

This application has been created solely for educational purposes to practice creating desktop applications using JavaScript.

### Limitations

- **Performance:** Not optimized for production use.
- **Security:** Does not include comprehensive security measures.
- **Compatibility:** May have issues on some operating systems.

It is recommended to use this application only for testing and learning.
The developer is not responsible for any issues arising from use in real-world environments.

## Features

- **Select HEIC Files:** Choose a HEIC image file from your local system.
- **Convert and Download JPEG:** Convert the selected HEIC file to JPEG format and downloads the converted JPEG image to your system.

## Installation and setup

### Prerequisites

**Node.js:** Ensure that you have Node.js installed. You can download it from Node.js official website.  
**Electron:** This project uses Electron to create a cross-platform desktop application.

### Clone the Repository

```bash
git clone https://github.com/pabloroves/heic-2-jpeg-electron.git
cd heic-2-jpeg-electron
```

### Install dependencies using npm

```bash
npm install
```

### To start the application in development mode

```bash
npm run dev
```

### To start the application using Electron Forge

```bash
npm start
```

## Building the Application

To package and create an installer for the application, use

```bash
npm run package
```

To create the installer

```bash
npm run make
```

## Usage

1. **Open the Application:** Launch the application via the command line or by running the built executable.
2. **Select a HEIC File:** Click on the file input to choose a HEIC image file from your system.
3. **Convert to JPEG:** Click the "Create JPEG" button to start the conversion process.
4. **Download the JPEG:** The converted JPEG file will automatically be downloaded to your system.

## File Descriptions

- **main.js:** The main entry point for the Electron application. Sets up the main application window.
- **index.html:** The HTML layout for the application, including a file input and button for converting HEIC files.
- **index.css:** Styles for the application, including layout and appearance.
- **convert.js:** JavaScript for handling file selection, conversion, and download.
  Development
- **File Selection and Conversion:** Handled in convert.js, where heic2any library is used for conversion.
- **Styling:** Managed in index.css to provide a clean, user-friendly interface.
  License

## Author

Pablo Rovés Iglesias

## Acknowledgements

**Electron:** Framework used for building cross-platform desktop apps.  
**heic2any:** Library used for converting HEIC files to other formats.

## License

This project is licensed under the MIT License.
