function newExpense(event) {
  event.preventDefault();

  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  // Create expense object
  const obj = {
    amount,
    description,
    category,
  };

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(obj);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("expenseForm").reset();

  showUserExpenses(obj);
}

function showUserExpenses(obj) {
  const parentEle = document.getElementById("expenseList");
  const childELe = document.createElement("li");
  childELe.textContent = `${obj.amount} - ${obj.description} - ${obj.category}`;
  parentEle.appendChild(childELe);

  const delButton = document.createElement("button");
  delButton.type = "button";
  delButton.value = "Delete";
  delButton.classList = "btn btn-danger ";
  delButton.textContent = "Delete";

  delButton.onclick = () => {
    localStorage.removeItem(obj);
    parentEle.removeChild(childELe);
  };

  childELe.appendChild(delButton);
  parentEle.appendChild(childELe);

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.value = "edit";
  editBtn.classList = "btn btn-primary";
  editBtn.textContent = "Edit";
  editBtn.onClick = () => {
    localStorage.getItem();
  };
  childELe.appendChild(editBtn);
  parentEle.appendChild(childELe);
}
