import { Component, signal } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Navbar, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello my first Angular app with standalone components');

  protected readonly imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  protected isDisabled = false;
  protected isActive = false;
  protected fruit = 'apple';
  protected userName = 'Hieu'

  buttonxClicked() {
    console.log('Button clicked');
  }

  keyEnter(event: Object) {
    console.log('Key enter: ', event);
  }

  updateUserName(username:HTMLInputElement) {
    this.userName = username.value;
    console.log('Username updated: ', this.userName);
  }
}
