import { Component, OnInit } from '@angular/core';

import { Emoji } from '../../schemas/emoji';
import { EmojiService } from '../../services/emoji.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-emoji',
  templateUrl: './all-emoji.component.html',
  styleUrls: ['./all-emoji.component.css']
})

export class AllEmojiComponent implements OnInit {

  emojis: Emoji[] = window.history.state.emojis ? window.history.state.emojis : [];
  searchEmoji: Emoji[];
  
  searchValue: string = "";

  constructor(
    private emojiService: EmojiService,
    public router: Router
    ) { }

  ngOnInit() {
    if(this.emojis.length === 0 && this.emojis) {
      this.getEmojis();
    }
    else {
      this.filterEmoji();
    }
  }

  getEmojis(): void {
    this.emojiService.getEmojis()
      .subscribe(emojis => {
        this.emojis = Object.keys(emojis)
          .map(key => ({title: key, href: emojis[key], favorite: false, remove: false}));
          this.searchEmoji = this.emojis;
    });
  }

  favorite(emoji: Emoji) {
    emoji["favorite"] = !emoji["favorite"];
  }
  
  delete(emoji: Emoji) {
    emoji["favorite"] = false;
    emoji["remove"] = true;

    this.filterEmoji();
  }
  

  filterEmoji(): any {
    if(this.searchValue === "") {
      this.searchEmoji = this.emojis.filter((emoji) => emoji["remove"] === false);
    }
    else {
      this.searchEmoji = this.emojis.filter((emoji) => emoji.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1  && emoji["remove"] === false);
    }
  }
}