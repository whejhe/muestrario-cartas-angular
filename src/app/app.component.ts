import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPortafolios';
  customStyleClass = '';

  applyCustomStyle(button: string) {
    switch(button){
      case 'button1':
        this.customStyleClass = 'button1';
        break;
      case 'button2':
        this.customStyleClass = 'button2';
        break;
      case 'button3':
        this.customStyleClass = 'button3';
        break;
      case 'button4':
        this.customStyleClass = 'button4';
        break;
      case 'button5':
        this.customStyleClass = 'button5';
        break;
      case 'button6':
        this.customStyleClass = 'button6';
        break;
      default:
        this.customStyleClass = '';
        break;
    }
  }
}
