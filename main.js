const { app, BrowserWindow } = require('electron')
const server = require("./server")
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#312450',
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL('http://localhost:7735')
  // win.webContents.openDevTools()
  
  // win.once('ready-to-show', () => {
  //   win.show()
  // })

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