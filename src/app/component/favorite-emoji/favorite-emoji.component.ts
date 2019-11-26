import { Component, OnInit } from '@angular/core';
import { Emoji } from 'src/app/schemas/emoji';

@Component({
  selector: 'app-favorite-emoji',
  templateUrl: './favorite-emoji.component.html',
  styleUrls: ['./favorite-emoji.component.css']
})
export class FavoriteEmojiComponent implements OnInit {

  emojis: Emoji[] = window.history.state.emojis ? window.history.state.emojis : [];
  searchEmoji: Emoji[];

  searchValue: string = "";

  constructor() { }

  ngOnInit() {
    this.filterEmoji();
  }

  noFavorite(emoji: Emoji) {

    emoji["favorite"] = false;

    this.filterEmoji();
  }

  delete(emoji: Emoji) {

    emoji["favorite"] = false;
    emoji["remove"] = true;

    this.filterEmoji();
  }

  filterEmoji(): any {
    if(this.searchValue === "") {
      this.searchEmoji = this.emojis.filter((emoji) => emoji["favorite"] === true);
    }
    else {
      this.searchEmoji = this.emojis.filter((emoji) => emoji.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1 && emoji["favorite"] === true);
    }
  }
}
