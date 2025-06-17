import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsdocsComponent } from './devopsdocs.component';

describe('DevopsdocsComponent', () => {
  let component: DevopsdocsComponent;
  let fixture: ComponentFixture<DevopsdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsdocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevopsdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
