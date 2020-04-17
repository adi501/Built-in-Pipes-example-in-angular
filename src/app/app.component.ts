import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'Built-in Pipes example in angular';  
todaydate = new Date();  
jsonval = {name: 'Adi', age: '29', address:{a1: 'Anantapur', a2: 'AP'}};  
months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
  'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
}
