import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingConfigurationComponent } from './shipping-configuration.component';

describe('ShippingConfigurationComponent', () => {
  let component: ShippingConfigurationComponent;
  let fixture: ComponentFixture<ShippingConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
