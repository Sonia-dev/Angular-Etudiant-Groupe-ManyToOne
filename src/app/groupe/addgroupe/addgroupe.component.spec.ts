import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupeComponent } from './addgroupe.component';

describe('AddgroupeComponent', () => {
  let component: AddgroupeComponent;
  let fixture: ComponentFixture<AddgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
