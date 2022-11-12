console.log("child process")

setTimeout(function () {
    console.log("Hello from child.js");
  }, 2000);

  process.on("message", function (message) {
    console.log(`Message from main.js: ${message}`);
    process.send("Me");
  });

  process.send("Me1");

  console.log(process.argv[2]); // "99"
console.log(process.argv[3]); 