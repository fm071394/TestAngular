import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteEmojiComponent } from './favorite-emoji.component';

describe('FavoriteEmojiComponent', () => {
  let component: FavoriteEmojiComponent;
  let fixture: ComponentFixture<FavoriteEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
