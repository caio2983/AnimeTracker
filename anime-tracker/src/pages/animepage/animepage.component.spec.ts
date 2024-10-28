import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimepageComponent } from './animepage.component';

describe('AnimepageComponent', () => {
  let component: AnimepageComponent;
  let fixture: ComponentFixture<AnimepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
