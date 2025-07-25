const workouts = {
  program1: `Program 1\nPull-Ups: 2-4 x 5-10\nPush-Ups: 2-4 x 12-15+\nSplit Squats: 2-4 x 10-15`,
  program2: `Program 2 (Option 1)\nSupport Hold: 3-4 sets, 10-30s\nPull-Up & Dip: 3-4 x 5-12\nBicep/Tricep: 3-4 x 10-15\nHang: 1-2 mins total`,
  program2b: `Program 2 (Option 2)\nSupport Hold: 3-4 x 10-30s\nPush-Up & Row: 3-4 x 8-15\nChest Fly & RDF: 3-4 x 8-15\nHang: 1-2 mins total`,
  program3a: `Program 3 - Session A\nFeet Support Hold: 2-3 x 15-30s\nRing Row: 3 x 10-15\nFeet Tricep Dip: 8-12 reps\nHanging: 2-3 x 15-30s`,
  program3b: `Program 3 - Session B\nIncline Plank Hold: 2-3 x 15-30s\nChin-Up: 3 x 5-10\nIncline Push-Up: 3 x 8-15\nHanging: 2-3 x 15-30s`
};

document.getElementById("program").addEventListener("change", function () {
  const key = this.value;
  document.getElementById("displayWorkout").innerText = workouts[key] || "";
  document.getElementById("logDisplay").innerText = localStorage.getItem("log_" + key) || "";
});

function saveLog() {
  const program = document.getElementById("program").value;
  const notes = document.getElementById("notes").value;
  const logKey = "log_" + program;
  const prev = localStorage.getItem(logKey) || "";
  localStorage.setItem(logKey, prev + "\n" + notes);
  document.getElementById("logDisplay").innerText = localStorage.getItem(logKey);
}
