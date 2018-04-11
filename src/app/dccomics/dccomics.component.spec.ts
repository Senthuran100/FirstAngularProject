import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DccomicsComponent } from './dccomics.component';

describe('DccomicsComponent', () => {
  let component: DccomicsComponent;
  let fixture: ComponentFixture<DccomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DccomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DccomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
