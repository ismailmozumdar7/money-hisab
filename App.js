document.getElementById('Calculate-btn').addEventListener('click', function(){
    const incomeInfut = document.getElementById('income-Infut');
    const incomeInfutSrting = incomeInfut.value;
    const incomeInfutNumber = parseFloat(incomeInfutSrting);
    const FoodBuy = document.getElementById('Food-buy');
    const FoodBuySrting = FoodBuy.value;
    const FoodBuyNumber = parseFloat(FoodBuySrting);
    const RentBuy = document.getElementById('Rent-buy');
    const RentBuySrting = RentBuy.value;
    const RentBuyNumber = parseFloat(RentBuySrting);
    const ClothesBuy = document.getElementById('Clothes-buy');
    const ClothesBuySrting = ClothesBuy.value;
    const ClothesBuyNumber = parseFloat(ClothesBuySrting);
    const TotalExpenses = document.getElementById('Total-Expenses');
    const Balance = document.getElementById('Balance');
    const calculatePlus = FoodBuyNumber + RentBuyNumber + ClothesBuyNumber;
    TotalExpenses.innerText = calculatePlus;
    const calculatemuines = incomeInfutNumber - calculatePlus;
    Balance.innerText = calculatemuines;
})
document.getElementById('Saving-btn').addEventListener('click', function(){
    const SavingInput = document.getElementById('Saving-input');
    const SavingInputSrting = SavingInput.value;
    const SavingInputNumber = parseFloat(SavingInputSrting);
    const incomeInfut = document.getElementById('income-Infut');
    const incomeInfutSrting = incomeInfut.value;
    const incomeInfutNumber = parseFloat(incomeInfutSrting);
    const SavingMoney = (incomeInfutNumber / 100 )*SavingInputNumber;
    const TotalExpenses = document.getElementById('Total-Expenses');
    const TotalExpensesString = TotalExpenses.innerText;
    const TotalExpensesNumbus = parseFloat(TotalExpensesString)
    const RemainingBalanceAdd = incomeInfutNumber - SavingMoney - TotalExpensesNumbus;
    const SavingAmount = document.getElementById('Saving-Amount');
    const RemainingBalance = document.getElementById('Remaining-Balance');
    SavingAmount.innerText = SavingMoney;
    RemainingBalance.innerText = RemainingBalanceAdd;
})