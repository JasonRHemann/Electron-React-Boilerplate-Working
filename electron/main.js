const { app, BrowserWindow, electron } = require("electron");
// const path = require("path");
// const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: 2000,
    height: 1200,
    resizable: false,
    show: false,
  });

  // const startUrl = isDev
  //   ? "http://localhost:3000"
  //   : `file://${path.join(__dirname, "../build/index.html")}`;
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  let childWindow = new BrowserWindow({
    parent: mainWindow,
    x: 1200,
    y: 32,
    width: 487,
    height: 1060,
    movable: false,
    resizable: false,
    frame: false,
    show: false,
  });
  childWindow.loadURL("https://google.com");
  childWindow.show();
}

app.on("ready", createWindow);
