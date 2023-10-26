import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2WithOutSkipTestArgumentComponent } from './home2-with-out-skip-test-argument.component';

describe('Home2WithOutSkipTestArgumentComponent', () => {
  let component: Home2WithOutSkipTestArgumentComponent;
  let fixture: ComponentFixture<Home2WithOutSkipTestArgumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Home2WithOutSkipTestArgumentComponent]
    });
    fixture = TestBed.createComponent(Home2WithOutSkipTestArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
