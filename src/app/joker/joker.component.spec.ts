import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule } from 'igniteui-angular';
import { JokerComponent } from './joker.component';

describe('JokerComponent', () => {
  let component: JokerComponent;
  let fixture: ComponentFixture<JokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokerComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
