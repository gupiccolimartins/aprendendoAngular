import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaMundoComponent } from './ola-mundo.component';

describe('OlaMundoComponent', () => {
  let component: OlaMundoComponent;
  let fixture: ComponentFixture<OlaMundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaMundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
