import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOneComponent } from './button-one.component';

describe('ButtonOneComponent', () => {
  let component: ButtonOneComponent;
  let fixture: ComponentFixture<ButtonOneComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('this should be equal to the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });
});
