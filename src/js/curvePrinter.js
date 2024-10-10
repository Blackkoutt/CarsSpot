const canvas = document.querySelector('#canvas_element');
const ctx = canvas.getContext('2d');
const wrapper = document.querySelector('#canvas_wrapper');

const fullScreenWidth = window.screen.availWidth;
const fullScreenHeight = 824;

AddWindowEventListeners();

const DrawCurve = (width, height) => {
  canvas.width = Math.ceil((width / 7) * 3); //659
  canvas.height = Math.floor((height / 8) * 6.5); // 669

  const baseWidth = 659;
  const baseHeight = 669;

  const scaleX = canvas.width / baseWidth;
  const scaleY = canvas.height / baseHeight;

  const newLineWeight = 40 * scaleX + 5;
  let lineWeight = newLineWeight;
  if (lineWeight > 40) {
    lineWeight = 40;
  }

  const lineColor = '#D9DCD5';

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.moveTo(417 * scaleX, -60 * scaleY);
  ctx.bezierCurveTo(
    380 * scaleX,
    260 * scaleY,
    637 * scaleX,
    130 * scaleY,
    625 * scaleX,
    335 * scaleY
  );
  ctx.bezierCurveTo(
    620 * scaleX,
    500 * scaleY,
    300 * scaleX,
    550 * scaleY,
    483 * scaleX,
    660 * scaleY
  );

  ctx.moveTo(254 * scaleX, -60 * scaleY);
  ctx.bezierCurveTo(
    280 * scaleX,
    210 * scaleY,
    380 * scaleX,
    180 * scaleY,
    415 * scaleX,
    247 * scaleY
  );
  ctx.bezierCurveTo(
    500 * scaleX,
    438 * scaleY,
    -70 * scaleX,
    354 * scaleY,
    37 * scaleX,
    680 * scaleY
  );

  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWeight;

  ctx.stroke();
};

const Resize = (width, height) => {
  wrapper.classList.remove('right-6');
  wrapper.classList.add('right-28');
  DrawCurve(width, height);
};
const ResizeAndShift = (width, height) => {
  wrapper.classList.add('right-6');
  wrapper.classList.remove('right-28');
  DrawCurve(width, height);
};

const ResizeHandler = () => {
  if (window.outerWidth >= 1250) Resize(fullScreenWidth, fullScreenHeight); // XXL
  else if (window.outerWidth >= 1050) Resize(1250, 750); // XL
  else if (window.outerWidth >= 950) Resize(1050, 700); // L
  else if (window.outerWidth >= 850) Resize(850, 600); // M
  else if (window.outerWidth >= 780) Resize(700, 620); // S
  else if (window.outerWidth >= 500) ResizeAndShift(600, 600); // XS
  else if (window.outerWidth >= 350) ResizeAndShift(350, 600); // XXS
};

function AddWindowEventListeners() {
  window.addEventListener('load', () => ResizeHandler());
  window.addEventListener('resize', () => ResizeHandler());
}
