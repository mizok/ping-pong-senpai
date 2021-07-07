import { playerRef } from './data';

export function initKeyControl(intervalPeriod = 300, socket) {
  let keyHoldInterval;
  document.addEventListener('keydown', (e) => {
    let windowAspectRatio = window.innerWidth / window.innerHeight;
    if (windowAspectRatio >= 1) {
      switch (e.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(() => {
            socket.emit('playerMoveMinus', playerRef);
          }, intervalPeriod)
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(() => {
            socket.emit('playerMovePlus', playerRef);
          }, intervalPeriod)
          break;
      }
    }
    else {
      switch (e.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(() => {
            socket.emit('playerMoveMinus', playerRef);
          }, intervalPeriod)
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(() => {
            socket.emit('playerMovePlus', playerRef);
          }, intervalPeriod)
          break;
      }
    }

    switch (e.key) {
      case "Space":
        // Do something for "enter" or "return" key press.
        socket.emit('playerLunchBall', playerRef);
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        // Do something for "esc" key press.
        socket.emit('playerEscape', playerRef);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  })
}


