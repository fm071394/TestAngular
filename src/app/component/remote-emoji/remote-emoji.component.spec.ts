import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteEmojiComponent } from './remote-emoji.component';

describe('RemoteEmojiComponent', () => {
  let component: RemoteEmojiComponent;
  let fixture: ComponentFixture<RemoteEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
