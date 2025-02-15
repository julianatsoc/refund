const form = document.querySelector("form")
const amount = document.getElementById("amount");
const expense = document.getElementById("expensive");
const category = document.getElementById("category");

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
}

