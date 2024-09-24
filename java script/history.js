function makeHistory(amount, where){
    let title = amount + " Taka is Donated for " + where;
    let date = "Date : " + new Date();

    let historyParent = document.getElementById("history");
    let newHistory = document.createElement("div");
    let newTitle = document.createElement("h4");
    newTitle.textContent = title;
    let newDatetime = document.createElement("p");
    newDatetime.textContent = date;
    newHistory.appendChild(newTitle);
    newHistory.appendChild(newDatetime);
    historyParent.appendChild(newHistory);
    newHistory.classList.add("history-body");
    newTitle.classList.add("history-title");
    newDatetime.classList.add("history-datetime");
}
