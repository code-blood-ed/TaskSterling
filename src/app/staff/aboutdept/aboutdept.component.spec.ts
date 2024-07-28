import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdeptComponent } from './aboutdept.component';

describe('AboutdeptComponent', () => {
  let component: AboutdeptComponent;
  let fixture: ComponentFixture<AboutdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdeptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
