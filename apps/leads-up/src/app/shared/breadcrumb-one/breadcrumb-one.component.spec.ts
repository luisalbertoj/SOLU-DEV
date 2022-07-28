import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOneComponent } from './breadcrumb-one.component';

describe('BreadcrumbOneComponent', () => {
  let component: BreadcrumbOneComponent;
  let fixture: ComponentFixture<BreadcrumbOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
