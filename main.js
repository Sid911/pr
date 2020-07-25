const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    frame : false,
    hasShadow:true,
    minHeight: 500,
    minWidth: 500,
    webPreferences: {
      nodeIntegration:true,
      webSecurity:false,
      allowRunningInsecureContent:true,
      nativeWindowOpen: true
    }
  })
  
  win.loadURL("http://localhost:3000/")
}

ipcMain.on('SignIn',(event,arg) => {
  let new_win = new BrowserWindow({minHeight:700,minWidth:200})
  new_win.loadURL(arg)//.then(new_win.close())
})

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

app.setAboutPanelOptions({
  applicationName : "O2",
  version : 0.1,
  authors: "Sid"
})