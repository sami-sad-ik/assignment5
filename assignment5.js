let counter = 0;

function addSeat() {
  if (counter >= 8) {
    return;
  }
  counter += 1;
  document.getElementById("seat-count").innerText = counter;
}
let minusCounter = 8;
function minusSeat() {
  if (minusCounter <= 0) {
    alert("All seats are booked!");
    return;
  }
  minusCounter--;
  document.getElementById("seat-minus").innerText = minusCounter;
}
const clr = document.getElementsByClassName("add-btn");
let totalCost = 0;
let grandTotalCost = 0;
for (const btn of clr) {
  btn.addEventListener("click", function (event) {
    btn.classList.add("bg-[#1DD100]", "hover:bg-[#1DD100]");
    const list = document.getElementById("seat-list");
    const seat = event.target.value;
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = seat;
    td2.innerText = "Economy";
    td3.innerText = "550";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    list.appendChild(tr);
    const total = document.getElementById("total");
    totalCost = totalCost + 550;
    total.innerText = totalCost;
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = totalCost;
    return grandTotal;
  });
}
function couponApply() {
  const couponCode = document.getElementById("input-field");
  if (couponCode.value === "NEW15") {
    grandTotalCost = totalCost - totalCost * 0.15;
    document.getElementById("grand-total").innerText = grandTotalCost;
  } else if (couponCode.value === "Couple20") {
    grandTotalCost = totalCost - totalCost * 0.2;
    document.getElementById("grand-total").innerText = grandTotalCost;
  } else {
    alert("Invalid coupon code");
  }
}
function next() {
  const hide = document.getElementById("hide");
  hide.classList.add("hidden");
  const display = document.getElementById("display");
  display.classList.remove("hidden");
}
