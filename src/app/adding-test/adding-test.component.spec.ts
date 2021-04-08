import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTestComponent } from './adding-test.component';

describe('AddingTestComponent', () => {
  let component: AddingTestComponent;
  let fixture: ComponentFixture<AddingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
