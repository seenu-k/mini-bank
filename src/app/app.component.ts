import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Mini Bank - Coding Design Assessment';
  balance = 0;
  operation = new FormControl('deposit');
  amount = new FormControl('');

  balanceStringToBalance(balanceString: string) {
    balanceString = balanceString.trim();
    let [D, C] = [0, 0]
    if(balanceString.indexOf(" ") >= 0) {
      [D, C] = balanceString.split(" ").map(val => parseInt(val.slice(0, -1)));
    }
    else {
      let val = parseInt(balanceString.slice(0, -1))
      if(balanceString.substr(-1) === 'D') {
        D = val;
      }
      else {
        C = val;
      }
    }
    console.log(D, C);
    return D+(C/100); // Think about negative D
  }

  balanceToBalanceString(balance: number) {
    let D = Math.floor(balance);
    let C = (balance*100)%100; // Think
    if(D===0) {
      return C+"C";
    }
    if(C==0) {
      return D+"D";
    }
    return D+"D "+C+"C";
  }

  performOperation() {
    if(this.operation.value=='deposit') {
      this.balance += this.balanceStringToBalance(this.amount.value);
    }
    if(this.operation.value=='withdraw') {
      this.balance -= this.balanceStringToBalance(this.amount.value);
    }
    console.log(this.balance);
  }

}
