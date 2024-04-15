class BankAccount {
    constructor(accnum, ownerName, balance = 0) {
      this.accnum = accnum;  
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successfully made. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successfully | New balance: ${this.balance}`);
      }
    }
  
    checkBalance() {
      console.log(`Current balance for account Number : ${this.accnum} | OwnerName: ${this.ownerName} | Balance: ${this.balance}`);
    }
  }
  
  
  const account1 = new BankAccount(1002,"Sabbir Khan", 3000);
  account1.checkBalance(); 
  account1.deposit(900);   
  account1.withdraw(1100);  
  account1.checkBalance(); 
  