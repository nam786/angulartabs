import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartabs';

  navLinks = [
    {path:'home', label: 'Tab1'},
    {path: 'about', label:'Tab2'},
    {path: 'help', label:'Tab3'},
    {path: 'extra', label:'Tab4'}

  ];

}
