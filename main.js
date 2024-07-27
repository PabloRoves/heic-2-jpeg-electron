const { app, BrowserWindow } = require('electron')
//const path = require('node:path')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 700,
    height: 300,
    //resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  window.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

})

/*app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})*/