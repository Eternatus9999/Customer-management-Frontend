import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerPageComponent } from './add-customer-page.component';

describe('AddCustomerPageComponent', () => {
  let component: AddCustomerPageComponent;
  let fixture: ComponentFixture<AddCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
