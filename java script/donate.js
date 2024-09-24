function calculate(a, x, y, z, where){
    document.getElementById(a).addEventListener("click", function(event){
        event.preventDefault();
        let amount = getAmount(x);
        if(amount <= 0 || isNaN(amount)){
            alert("Invalid Donation Amount!");
        }
        else{
            let newAmount = getText(z) + parseFloat(amount);
            let totalBalance = getText(y);
            let result = totalBalance - amount;
            document.getElementById(y).textContent = result;
            document.getElementById(z).textContent = newAmount;
            document.getElementById(x).value = "";
            makeHistory(amount, getFundName(where));
        }
    })
}

calculate("donate-btn1", "amount1", "total-balance", "donated-money1", "topic1");
calculate("donate-btn2", "amount2", "total-balance", "donated-money2", "topic2");
calculate("donate-btn3", "amount3", "total-balance", "donated-money3", "topic3");
