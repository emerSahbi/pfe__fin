import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolInfoComponent } from './tool-info.component';

describe('ToolInfoComponent', () => {
  let component: ToolInfoComponent;
  let fixture: ComponentFixture<ToolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
