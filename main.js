const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame : false,
    hasShadow:true,
    minHeight: 500,
    minWidth: 500,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL("http://localhost:3000/")
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})