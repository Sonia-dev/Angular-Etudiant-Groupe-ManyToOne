import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgroupeComponent } from './listgroupe.component';

describe('ListgroupeComponent', () => {
  let component: ListgroupeComponent;
  let fixture: ComponentFixture<ListgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
