import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingnowPageComponent } from './playingnow-page.component';

describe('PlayingnowPageComponent', () => {
  let component: PlayingnowPageComponent;
  let fixture: ComponentFixture<PlayingnowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingnowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingnowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
