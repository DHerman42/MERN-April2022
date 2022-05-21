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

	displayAccountInfo() {
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

class User {
	constructor(userName, emailAddress) {
		this.name = userName;
		this.email = emailAddress;
		this.account = new BankAccount();
	}

	makeDeposit(amount) {
		this.account.deposit(amount);
		return this;
	}

	makeWithdrawl(amount) {
		this.account.withdraw(amount);
		return this;
	}

	displayBalance() {
		console.log(`User: ${this.name}`);
		this.account.displayAccountInfo();
		return this;
	}

	transferMoney(otherUser, amount) {
		this.account.withdraw(amount);
		otherUser.makeDeposit(amount);
		return this;
	}
}

const user1 = new User("user1", "email1");

user1.makeDeposit(200).displayBalance();
