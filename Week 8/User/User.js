class User {
	constructor(userName, emailAddress) {
		this.name = userName;
		this.email = emailAddress;
		this.accountBalance = 0;
	}

	makeDeposit(amount) {
		this.accountBalance += amount;
	}

	makeWithdrawl(amount) {
		this.accountBalance -= amount;
	}

	displayBalance() {
		console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
	}

	transferMoney(otherUser, amount) {
		this.accountBalance -= amount;
		otherUser.makeDeposit(amount);
	}
}

const user1 = new User("user1", "email1");
const user2 = new User("user2", "email2");
const user3 = new User("user3", "email3");

user1.makeDeposit(500);
user1.makeDeposit(250);
user1.makeDeposit(1000);
user1.makeWithdrawl(750);
user1.displayBalance();

user2.makeDeposit(450);
user2.makeDeposit(945);
user2.makeWithdrawl(225);
user2.makeWithdrawl(473);
user2.displayBalance();

user3.makeDeposit(1500);
user3.makeWithdrawl(145);
user3.makeWithdrawl(321);
user3.makeWithdrawl(123);
user3.displayBalance();

user1.transferMoney(user3, 745);
user1.displayBalance();
user3.displayBalance();
