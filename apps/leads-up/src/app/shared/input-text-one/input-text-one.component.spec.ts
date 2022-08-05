import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextOneComponent } from './input-text-one.component';

describe('InputTextOneComponent', () => {
  let component: InputTextOneComponent;
  let fixture: ComponentFixture<InputTextOneComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextOneComponent);
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
