document.getElementById("deposit-btn").addEventListener("click", () => {
  const newDepositAmout = parseFloat(getInputFromInputField("deposit-field"));

  const currentDepositAmount = parseFloat(
    getInputFromTagField("deposite-amout")
  );

  const totalDeposit = currentDepositAmount + newDepositAmout;

  setNewAmout("deposite-amout", totalDeposit);

  const currentBalance = parseFloat(getInputFromTagField("balance"));

  const totalBalance = currentBalance + newDepositAmout;

  setNewAmout("balance", totalBalance);
});
