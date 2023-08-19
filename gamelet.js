const dt = Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? "Good morning!" : "Welcome";
const el = document.getElementById("message");
el.innerHTML = msg;
