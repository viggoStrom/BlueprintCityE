const { app, BrowserWindow } = require('electron');
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

    // DEBUGGING ONLY remove before production
    win.webContents.openDevTools();

    win.loadFile('frontend/index.html');
});