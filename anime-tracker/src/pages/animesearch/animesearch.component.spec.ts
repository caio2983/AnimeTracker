import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesearchComponent } from './animesearch.component';

describe('AnimesearchComponent', () => {
  let component: AnimesearchComponent;
  let fixture: ComponentFixture<AnimesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimesearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
