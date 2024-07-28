import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentabtComponent } from './studentabt.component';

describe('StudentabtComponent', () => {
  let component: StudentabtComponent;
  let fixture: ComponentFixture<StudentabtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentabtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentabtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
