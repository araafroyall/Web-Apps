function renderCustomerList(customers) {
  document.getElementById("customerList").innerHTML = customers.map(c =>
    `<div class="p-2 bg-white rounded shadow cursor-pointer" onclick="loadLedger('${c.id}')">${c.name}<br><span class="text-xs text-gray-500">${c.phone}</span></div>`
  ).join("");
}

function renderLedger(id, ledger) {
  document.getElementById("customerSection").classList.add("hidden");
  document.getElementById("ledgerSection").classList.remove("hidden");

  let balance = 0;
  const items = ledger.map(e => {
    balance += e.type === "credit" ? e.amount : -e.amount;
    return `<div class="p-2 mb-1 rounded ${e.type === "credit" ? "bg-green-100" : "bg-red-100"}">
      <b>${e.type.toUpperCase()}</b>: ₹${e.amount}<br>${e.note}<br><small>${e.date}</small>
    </div>`;
  });

  document.getElementById("ledgerTitle").innerText = "Customer Ledger";
  document.getElementById("ledgerTitle").dataset.id = id;
  document.getElementById("balanceView").innerText = `Balance: ₹${balance}`;
  document.getElementById("ledgerList").innerHTML = items.reverse().join("");
}

function backToList() {
  document.getElementById("ledgerSection").classList.add("hidden");
  document.getElementById("customerSection").classList.remove("hidden");
}