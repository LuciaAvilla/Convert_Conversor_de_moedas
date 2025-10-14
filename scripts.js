// Cotação das moedas
const USD = 5.47
const EUR = 6.35
const GBP = 7.29

// obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

//manipulando o input "amount" para receber somente números.
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Captando o evento de submit(enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":

            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":

            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {

    try {

        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não possível converter. Tente novamente mais tarde.")
    }
}