import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-shipping-configuration",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./shipping-configuration.component.html",
  styleUrl: "./shipping-configuration.component.scss",
})
export class ShippingConfigurationComponent {
  showDropdown = false;

  OnClick() {
    this.showDropdown = !this.showDropdown;
  }

  toggleDropdown() {}
}
