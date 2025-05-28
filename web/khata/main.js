async function loadCustomers() {
  const data = await getFileContent("customers.json");
  renderCustomerList(data);
}

async function addCustomer() {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  if (!name) return;
  const id = "cust" + Date.now();
  const customers = await getFileContent("customers.json");
  customers.push({ id, name, phone });
  await updateFile("customers.json", customers, "Add customer");
  renderCustomerList(customers);
}

async function loadLedger(id) {
  const ledger = await getFileContent(`${id}.json`);
  renderLedger(id, ledger);
}

async function addEntry(type) {
  const amount = parseFloat(document.getElementById("entryAmount").value);
  const note = document.getElementById("entryNote").value;
  if (!amount) return;
  const id = document.getElementById("ledgerTitle").dataset.id;
  const ledger = await getFileContent(`${id}.json`);
  ledger.push({
    date: new Date().toLocaleDateString(),
    type,
    amount,
    note
  });
  await updateFile(`${id}.json`, ledger, "Add entry");
  renderLedger(id, ledger);
}