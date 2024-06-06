import {
    app,
    BrowserWindow,
    BrowserWindowConstructorOptions as WindowOptions,
  } from 'electron'
  
  import { createFileRoute, createURLRoute } from 'electron-router-dom'
  import { join } from 'path'
  
  function createWindow() {
    const window = new BrowserWindow({
      width: 700,
      height: 473,
      ...options,
    })
  
    const devServerURL = createURLRoute( id)
  
    const fileRoute = createFileRoute(
      join(__dirname, './src/index.html'),
      id
    )
  
    process.env.NODE_ENV === 'development'
      ? window.loadURL(devServerURL)
      : window.loadFile(...fileRoute)
  
    return window
  }
  
  app.whenReady().then(() => {
    createWindow('main', {
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
      },
    })
  
    createWindow('about', {
      width: 450,
      height: 350,
      show: false,
    })
  })
  
try {
    require('electron-reloader')(module)
  } catch (_) {}