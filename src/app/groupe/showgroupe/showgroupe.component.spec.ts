import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgroupeComponent } from './showgroupe.component';

describe('ShowgroupeComponent', () => {
  let component: ShowgroupeComponent;
  let fixture: ComponentFixture<ShowgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
