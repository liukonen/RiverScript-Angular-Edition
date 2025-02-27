import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: false
})
export class AppComponent {
  title = 'River - RiveScript based chatbot in Angular';

  public constructor(private titleService: Title){
    this.titleService.setTitle(this.title);
  }

}
