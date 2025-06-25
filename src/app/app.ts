import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu.component/menu.component';
import { Routes } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
    RouterModule,
    MenuComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'solve';
}
