var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector(".btn");
var resultText = document.querySelector(".output");
function handleEvent() {
  var init = initialPrice.value;
  var quan = stockQuantity.value;
  var curr = currentPrice.value;
  checkValue(init, quan, curr);
};
function checkValue(init, quan, curr) {
  var profit = (curr * quan) - (init * quan);
  var loss = (init * quan) - (curr * quan);
  var pp = Math.floor((profit / init) * 100);
  var lp = Math.floor((loss / init) * 100);
  if (profit > loss) {
    resultText.innerText = "TOO the moon. Profit: " + profit + " Rs, profit in percentage: " + pp + "%";
  }
  else if (profit == loss) {
    resultText.innerText = "Still on earth."
  }
  else {
    resultText.innerText = "Its a crash. loss: " + loss + " Rs, loss in percentage: " + lp + "%";
  }
}

checkBtn.addEventListener("click", handleEvent);

