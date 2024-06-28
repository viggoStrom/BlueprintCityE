const { contextBridge } = require('electron');
const { echo } = require("./backend/main.js");

contextBridge.exposeInMainWorld("backend", {
    test: () => "Hello from the backend!",
    echo: (arg) => echo(arg)
})
