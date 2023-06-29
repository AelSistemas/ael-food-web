import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormsComponent } from './cliente-forms.component';

describe('ClienteFormsComponent', () => {
  let component: ClienteFormsComponent;
  let fixture: ComponentFixture<ClienteFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteFormsComponent]
    });
    fixture = TestBed.createComponent(ClienteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
