const form = document.querySelector("form")
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

const expenseList = document.querySelector("ul");


amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "");
    if (value === "") value = "0";

    let numericValue = Number(value) / 100;
    amount.value = formatCurrencyBRL(numericValue);
};

function formatCurrencyBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

form.onsubmit = (e) => {
    e.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date().toLocaleDateString(),

    }
    expenseAdd(newExpense);
};
function expenseAdd(newExpense) {
    try {

        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");

        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute("alt", newExpense.category_name);

        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");

        const expenseName = document.createElement("strong");
        expenseName.textContent = newExpense.expense;

        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;


        expenseInfo.append(expenseName, expenseCategory)

        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `
        <small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}

        `;



        expenseItem.append(expenseIcon, expenseInfo, expenseAmount)

        expenseList.append(expenseItem)

    } catch (error) {
        console.log(error)
    }
}
