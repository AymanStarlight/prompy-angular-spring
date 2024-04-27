import { Component } from '@angular/core';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'pr-layout',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
