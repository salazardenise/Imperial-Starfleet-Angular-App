import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurrentComponent } from './turrent.component';

describe('TurrentComponent', () => {
  let component: TurrentComponent;
  let fixture: ComponentFixture<TurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
