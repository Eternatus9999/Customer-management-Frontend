import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerPageComponent } from "./page/add-customer-page/add-customer-page.component";
import { ManageCustomerPageComponent } from "./page/manage-customer-page/manage-customer-page.component";
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCustomerPageComponent, ManageCustomerPageComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-manage-front-end';
}
