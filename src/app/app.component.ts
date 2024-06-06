import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShippingConfigurationComponent } from "./shipping-configuration/shipping-configuration.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ShippingConfigurationComponent,
    SidebarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
