import { Component, OnInit } from '@angular/core';
import { Emoji } from 'src/app/schemas/emoji';

@Component({
  selector: 'app-remote-emoji',
  templateUrl: './remote-emoji.component.html',
  styleUrls: ['./remote-emoji.component.css']
})
export class RemoteEmojiComponent implements OnInit {

  emojis: Emoji[] = window.history.state.emojis ? window.history.state.emojis : [];
  searchEmoji: Emoji[];

  searchValue: string = "";

  constructor() { }

  ngOnInit() {
    this.filterEmoji();
  }

  restore(emoji: Emoji) {

    emoji["favorite"] = false;
    emoji["remove"] = false;

    this.filterEmoji();
  }

  filterEmoji(): any {
    if(this.searchValue === "") {
      this.searchEmoji = this.emojis.filter((emoji) => emoji["remove"] === true);
    }
    else {
      this.searchEmoji = this.emojis.filter((emoji) => emoji.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1 && emoji["remove"] === true);
    }
  }
}
