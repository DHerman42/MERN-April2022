class User {
	constructor(userName, emailAddress) {
		this.name = userName;
		this.email = emailAddress;
		this.accountBalance = 0;
	}

	makeDeposit(amount) {
		this.accountBalance += amount;
		return this;
	}

	makeWithdrawl(amount) {
		this.accountBalance -= amount;
		return this;
	}

	displayBalance() {
		console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
		return this;
	}

	transferMoney(otherUser, amount) {
		this.accountBalance -= amount;
		otherUser.makeDeposit(amount);
		return this;
	}
}

const user1 = new User("user1", "email1");
const user2 = new User("user2", "email2");
const user3 = new User("user3", "email3");

user1
	.makeDeposit(500)
	.makeDeposit(250)
	.makeDeposit(1000)
	.makeWithdrawl(750)
	.displayBalance();

user2
	.makeDeposit(450)
	.makeDeposit(945)
	.makeWithdrawl(225)
	.makeWithdrawl(473)
	.displayBalance();

user3
	.makeDeposit(1500)
	.makeWithdrawl(145)
	.makeWithdrawl(321)
	.makeWithdrawl(123)
	.displayBalance();

user1.transferMoney(user3, 745).displayBalance();
user3.displayBalance();
