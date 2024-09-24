let donationSection = document.getElementById("donation");
let historySection = document.getElementById("history");
let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");

historyBtn.addEventListener("click", function() {
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");
    historyBtn.style.backgroundColor = "#B4F461"
    donationBtn.style.backgroundColor = "transparent";
})
donationBtn.addEventListener("click", function() {
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
    historyBtn.style.backgroundColor = "transparent"
    donationBtn.style.backgroundColor = "#B4F461";
})
