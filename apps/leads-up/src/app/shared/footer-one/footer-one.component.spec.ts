import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';

import { FooterOneComponent } from './footer-one.component';

describe('FooterOneComponent', () => {
  let component: FooterOneComponent;
  let fixture: ComponentFixture<FooterOneComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOneComponent);
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
