const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow 


app.on('ready', function() {
    // create new window
    mainWindow = new BrowserWindow({
        widht: 900, 
        height: 720,
    })

    mainWindow.setResizable(false)
    mainWindow.setMenuBarVisibility(false)

    // load html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file',
        slashes: true
    }))


})
