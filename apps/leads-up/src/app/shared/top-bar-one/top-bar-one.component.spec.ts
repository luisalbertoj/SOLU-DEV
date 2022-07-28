import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarOneComponent } from './top-bar-one.component';

describe('TopBarOneComponent', () => {
  let component: TopBarOneComponent;
  let fixture: ComponentFixture<TopBarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
