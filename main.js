const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow;
let tray;
let isQuitting = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);

  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  tray = new Tray(path.join(__dirname, 'icon-512.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'فتح لحن', click: () => mainWindow.show() },
    { label: 'خروج نهائي', click: () => { isQuitting = true; app.quit(); } }
  ]);
  tray.setToolTip('Lahn');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => mainWindow.show());
});