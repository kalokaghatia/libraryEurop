import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropcarComponent } from './europcar.component';

describe('EuropcarComponent', () => {
  let component: EuropcarComponent;
  let fixture: ComponentFixture<EuropcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropcarComponent]
    });
    fixture = TestBed.createComponent(EuropcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
