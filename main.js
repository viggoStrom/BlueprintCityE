const { app, BrowserWindow, ipcRenderer } = require('electron');
const path = require('node:path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 640,
        height: 360,
        fullscreen: true,
        title: 'Blueprint City',
        icon: path.join(__dirname, 'frontend/assets/icons/favicon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('frontend/index.html');


    // DEBUGGING ONLY. Remove before production
    win.webContents.openDevTools();


    // Mac stuff
    app.on('window-all-closed', () => {
        // If running on Mac this is needed since they don't know how to close applications properly :/
        if (process.platform !== 'darwin') app.quit()
    })
    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});