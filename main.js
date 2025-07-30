const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        resizable: false,
        icon: path.join(__dirname, 'icon.png'), // если есть иконка
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
