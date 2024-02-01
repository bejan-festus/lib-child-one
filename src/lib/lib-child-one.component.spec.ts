import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibChildOneComponent } from './lib-child-one.component';

describe('LibChildOneComponent', () => {
  let component: LibChildOneComponent;
  let fixture: ComponentFixture<LibChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibChildOneComponent]
    });
    fixture = TestBed.createComponent(LibChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
