const { contextBridge } = require('electron');
const { echo } = require("./backend/test.js");
const { config } = require("./backend/config.js");

contextBridge.exposeInMainWorld("backend", {
    test: () => "Hello from the backend!",
    echo: (arg) => echo(arg),
    config: config
})
