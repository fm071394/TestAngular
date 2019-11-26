export class Emoji {
  title: string;
  href: string;

  constructor(emojiResponseble: any) {
    this.title = emojiResponseble.title;
    this.href = emojiResponseble.href;
  }
}