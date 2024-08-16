let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyCode = document.querySelector(".copy-code");

const myValues = "123456789abcdef";
const colors = () => {
  var addNum = "#";
  for (let i = 0; i < 6; i++) {
    addNum += myValues[Math.floor(Math.random() * myValues.length)];
  }
  return addNum;
};
const handleBtn1 = () => {
  addNum1 = colors();
  document.body.style.backgroundImage = `linear-gradient(120deg ,${addNum1},${addNum2} )`;
  btn1.innerHTML = addNum1;
  copyCode.innerHTML = ` background-image: linear-gradient(120deg , ${addNum1},${addNum2} );`;
};
const handleBtn2 = () => {
  addNum2 = colors();
  document.body.style.backgroundImage = `linear-gradient(120deg ,${addNum1},${addNum2} )`;
  btn2.innerHTML = addNum2;
  copyCode.innerHTML = ` background-image: linear-gradient(120deg ,${addNum1},${addNum2} );`;
};
const copied = () => {
  navigator.clipboard.writeText(copyCode.innerHTML);
  alert("Copied the text: " + copyCode.innerHTML);
};
btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
copyCode.addEventListener("click", copied);
