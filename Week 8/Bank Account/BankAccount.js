class BankAccount {
	constructor(intRate = 0.01, balance = 0) {
		this.intRate = intRate;
		this.balance = balance;
	}

	deposit(amount) {
		this.balance += amount;
		return this;
	}

	withdraw(amount) {
		this.balance -= amount;
		return this;
	}

	displayAcountInfo() {
		console.log(`Balance: $${this.balance}`);
		return this;
	}

	yieldIntrest() {
		if (this.balance > 0) {
			this.balance += this.balance * this.intRate;
		}
		return this;
	}
}

const acct1 = new BankAccount();
const acct2 = new BankAccount(0.02, 2500);

acct1
	.deposit(450)
	.deposit(725)
	.deposit(612)
	.withdraw(295)
	.yieldIntrest()
	.displayAcountInfo();
acct2
	.deposit(423)
	.deposit(145)
	.withdraw(456)
	.withdraw(123)
	.withdraw(456)
	.withdraw(789)
	.yieldIntrest()
	.displayAcountInfo();
