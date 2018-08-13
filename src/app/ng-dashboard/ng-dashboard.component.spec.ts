import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashboardComponent } from './ng-dashboard.component';

describe('NgDashboardComponent', () => {
  let component: NgDashboardComponent;
  let fixture: ComponentFixture<NgDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
