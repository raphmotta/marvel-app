import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmarvelFooterComponent } from './appmarvel-footer.component';

describe('AppmarvelFooterComponent', () => {
  let component: AppmarvelFooterComponent;
  let fixture: ComponentFixture<AppmarvelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppmarvelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmarvelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
