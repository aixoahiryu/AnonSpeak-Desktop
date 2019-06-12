const { app, BrowserWindow } = require('electron')
const server = require("./server")
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1024,
    height: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:80')
  // win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})