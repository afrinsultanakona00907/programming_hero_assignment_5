const donationNoakhali = getElemById('donate-noakhali');
const donationFeni = getElemById('donate-feni');
const donationQuota = getElemById('quota-movement');
const historyList = getElemById('history-list');

getElemById('donation-card').addEventListener('click', function () {
    getElemById('donation-card').classList.add('bg-[#B4F461]')
    getElemById('history').classList.remove('bg-[#B4F461]')
    getShowElement('all-donation-card');
})
getElemById('history').addEventListener('click', function () {
    getElemById('donation-card').classList.remove('bg-[#B4F461]')
    getElemById('history').classList.add('bg-[#B4F461]')
    getShowElement('history-list');
})

// noakhali donation function start 
donationNoakhali.addEventListener('click', function (e) {
    const donationNoakhaliAmount = getElemById('donation-noakhali-amount');
    const donationAmount = parseFloatTagByElem(donationNoakhaliAmount, 'input');
    if (isNaN(donationAmount) || donationAmount < 0) {
        donationNoakhaliAmount.value = '';
        return alert("Your amount is invalid. Please enter a valid amount");
    }
    const totalDonationNoakhali = getElemById('total-donation-noakhali');
    const userBalance = getElemById('user-balance');
    let userBalanceHave = parseFloatTagByElem(userBalance);

    let totalDonationNoakhaliHave = parseFloatTagByElem(totalDonationNoakhali, 'nonInput');
    if (userBalanceHave < donationAmount) {
        donationNoakhaliAmount.value = '';
        return alert("Amount is larger than Your balance");
    }
    userBalanceHave -= donationAmount;
    userBalance.innerText = userBalanceHave;
    totalDonationNoakhaliHave += donationAmount;
    totalDonationNoakhali.innerText = totalDonationNoakhaliHave;
    donationNoakhaliAmount.value = '';
    historyList.innerHTML += `
    <div class="card card-compact bg-green-400 shadow-xl w-full mb-5">
        <div class="card-body">
          <h2 class="card-title">${donationAmount} Taka Donate for Flood at Noakhali, Bangladesh</h2>
          <p>${new Date()}</p>
        </div>
    </div>
    `
    my_modal_1.showModal();

})
// noakhali donation function end

// feni donation function start 
donationFeni.addEventListener('click', function (e) {
    const donationFeniAmount = getElemById('donation-feni-amount');
    const donationAmount = parseFloatTagByElem(donationFeniAmount, 'input');
    if (isNaN(donationAmount) || donationAmount < 0) {
        donationFeniAmount.value = '';
        return alert("Your amount is invalid. Please enter a valid amount");
    }
    const totalDonationFeni = getElemById('total-donation-feni');
    const userBalance = getElemById('user-balance');
    let userBalanceHave = parseFloatTagByElem(userBalance);

    let totalDonationFeniHave = parseFloatTagByElem(totalDonationFeni, 'nonInput');
    if (userBalanceHave < donationAmount) {
        donationFeniAmount.value = '';
        return alert("Amount is larger than Your balance");
    }
    userBalanceHave -= donationAmount;
    userBalance.innerText = userBalanceHave;
    totalDonationFeniHave += donationAmount;
    totalDonationFeni.innerText = totalDonationFeniHave;
    donationFeniAmount.value = '';
    historyList.innerHTML += `
    <div class="card card-compact bg-green-400 shadow-xl w-full mb-5">
        <div class="card-body">
          <h2 class="card-title">${donationAmount} Taka Donate for Flood Relief in Feni,Bangladesh</h2>
          <p>${new Date()}</p>
        </div>
    </div>
    `
    my_modal_1.showModal();

})
// Feni _donation_function _end 

// quota_movement_donation_function starts 
donationQuota.addEventListener('click', function (e) {
    const donationQuotaAmount = getElemById('donation-quota-amount');
    const donationAmount = parseFloatTagByElem(donationQuotaAmount, 'input');
    if (isNaN(donationAmount) || donationAmount < 0) {
        donationQuotaAmount.value = '';
        return alert("Your amount is invalid. Please enter a valid amount");
    }
    const totalDonationQuota = getElemById('total-donation-quota');
    const userBalance = getElemById('user-balance');
    let userBalanceHave = parseFloatTagByElem(userBalance);

    let totalDonationQuotaHave = parseFloatTagByElem(totalDonationQuota, 'nonInput');
    if (userBalanceHave < donationAmount) {
        donationQuotaAmount.value = '';
        return alert("Amount is larger than Your balance");
    }
    userBalanceHave -= donationAmount;
    userBalance.innerText = userBalanceHave;
    totalDonationQuotaHave += donationAmount;
    totalDonationQuota.innerText = totalDonationQuotaHave;
    donationQuotaAmount.value = '';
    historyList.innerHTML += `
    <div class="card card-compact bg-green-400 shadow-xl w-full mb-5">
        <div class="card-body">
          <h2 class="card-title">${donationAmount} Taka Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
          <p>${new Date()}</p>
        </div>
    </div>
    `
    my_modal_1.showModal();

})
// quota movement donation function end 


