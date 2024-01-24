let startTime;
let running = false;
let laps = [];
let lapListElement;

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    updateStopwatch();
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
  }
}

function resetStopwatch() {
  running = false;
  laps = [];
  document.getElementById('stopwatch').innerText = '00:00:00';
  // Remove laps list
  lapListElement.innerHTML = '';
}

function recordLap() {
  if (running) {
    const elapsedTime = new Date().getTime() - startTime;
    laps.push(formatTime(elapsedTime));
    updateLaps();
  }
}

function updateStopwatch() {
  if (running) {
    const elapsedTime = new Date().getTime() - startTime;
    document.getElementById('stopwatch').innerText = formatTime(elapsedTime);
    setTimeout(updateStopwatch, 10);
  }
}

function updateLaps() {
  if (!lapListElement) {
    lapListElement = document.getElementById('lapList');
  }

  const lapItem = document.createElement('li');
  lapItem.innerText = `Lap ${laps.length}: ${laps[laps.length - 1]}`;
  lapListElement.appendChild(lapItem);
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}:${pad(millisecondsFormatted)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

function changeStyle(style) {
  document.getElementById('stopwatch').className = style;
}