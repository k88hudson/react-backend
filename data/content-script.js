console.log("CONTENT SCRIPT HERE");

window.addEventListener("message", e => {
  console.log(e.data);
});
