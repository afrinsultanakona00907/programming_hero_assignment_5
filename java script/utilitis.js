function getText(id){
    let value = document.getElementById(id).textContent;
    return parseFloat(value);
}
function getAmount(id){
    let value = document.getElementById(id).value;
    return parseFloat(value);
}
function getFundName(id){
    let value = document.getElementById(id).innerText;
    return value;
}
