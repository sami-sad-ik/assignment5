let counter = 0;

function addSeat() {
  counter += 1;
  document.getElementById("seat-count").innerText = counter;
}
let minusCounter = 40;
function minusSeat() {
  minusCounter--;
  document.getElementById("seat-minus").innerText = minusCounter;
}
const clr = document.getElementsByClassName("add-btn");
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
  });
}
