import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsPageComponent } from './internships-page.component';

describe('InternshipsPageComponent', () => {
  let component: InternshipsPageComponent;
  let fixture: ComponentFixture<InternshipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
