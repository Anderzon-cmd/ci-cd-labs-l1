
const pixelText = [
  "H   H  OOO  L     AAAAA       M   M U   U N   N DDDD   OOO ",
  "H   H O   O L     A   A       MM MM U   U NN  N D   D O   O",
  "H   H O   O L     A   A       MM MM U   U N N N D   D O   O",
  "HHHHH O   O L     AAAAA       M M M U   U N  NN D   D O   O",
  "H   H O   O L     A   A       M   M U   U N   N D   D O   O",
  "H   H O   O L     A   A       M   M U   U N   N D   D O   O",
  "H   H  OOO  LLLLL A   A       M   M  UUU  N   N DDDD   OOO "
];

const board = document.getElementById("pixel-board");
const columns = Math.max(...pixelText.map((row) => row.length));

board.style.gridTemplateColumns = `repeat(${columns}, minmax(8px, 14px))`;

pixelText.forEach((row) => {
  row.padEnd(columns, " ").split("").forEach((cell) => {
    const pixel = document.createElement("span");
    pixel.className = cell === " " ? "pixel off" : "pixel on";
    board.appendChild(pixel);
  });
});
