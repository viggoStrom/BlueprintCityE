const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld("backend", {
    cool: coolFunction,
    value: () => 42
})

console.log("preload here");