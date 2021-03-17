import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LerQRcodeComponent } from './ler-qrcode.component';

describe('LerQRcodeComponent', () => {
  let component: LerQRcodeComponent;
  let fixture: ComponentFixture<LerQRcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerQRcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerQRcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
