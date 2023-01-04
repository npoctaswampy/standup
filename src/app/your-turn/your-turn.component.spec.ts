import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTurnComponent } from './your-turn.component';

describe('YourTurnComponent', () => {
  let component: YourTurnComponent;
  let fixture: ComponentFixture<YourTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTurnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
