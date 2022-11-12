const { fork } = require("child_process");
const controller = new AbortController();
const { signal } = controller;
console.log("Running main.js");
console.log("Forking a new subprocess....");

const child =  fork("child.js", [99, "Nathan"],{signal});

// fork("file.js", ["argument"], { cwd: process.cwd() });
child.send(29);

// controller.abort();


console.log("main process is still running")

child.on("message", function (message) {
    console.log(`Message from child.js: ${message}`);
  });
child.on("close", function (code) {
  console.log("child process exited with code " + code);
});

