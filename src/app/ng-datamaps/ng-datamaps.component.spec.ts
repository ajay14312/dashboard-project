import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatamapsComponent } from './ng-datamaps.component';

describe('NgDatamapsComponent', () => {
  let component: NgDatamapsComponent;
  let fixture: ComponentFixture<NgDatamapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatamapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatamapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
