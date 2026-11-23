// Electron wrapper: runs the game as a native Windows desktop app
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('force_high_performance_gpu');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 960,
    minHeight: 540,
    backgroundColor: '#000000',
    title: 'NightLine POV',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: { backgroundThrottling: false, contextIsolation: true, sandbox: true },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    }
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
