(function() {
  let count = 0;
  const interval = setInterval(() => {
    console.log("test line: ", count++);
  }, 1000);

  setTimeout(() => {
    // throw new Error("test error");
    clearInterval(interval);
  }, 5000);
})();
