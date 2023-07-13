const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const convert = document.getElementById("convert");

// fetch exchange rate
function calculateRate(){
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/63846e3bc1d7e131d1a276f5/latest/${currOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const currRate = data.conversion_rates[currTwo];
            
            rate.innerHTML = `1 ${currOne} = ${currRate} ${currTwo}`;

            // calculate amount
            amountTwo.value = (amountOne.value * currRate).toFixed(2);
        });
}

// event listeners
currencyOne.addEventListener("change", calculateRate);
amountOne.addEventListener("input", calculateRate);
currencyTwo.addEventListener("change", calculateRate);
amountTwo.addEventListener("input", calculateRate);
convert.addEventListener("click", () => {
    const tempVal = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = tempVal;
    calculateRate();
});

calculateRate();