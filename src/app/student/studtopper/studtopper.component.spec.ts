import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudtopperComponent } from './studtopper.component';

describe('StudtopperComponent', () => {
  let component: StudtopperComponent;
  let fixture: ComponentFixture<StudtopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudtopperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudtopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
