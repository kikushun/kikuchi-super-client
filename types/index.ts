export class Notice {
  id: number;
  title: string;
  message: string;
  postedDateDisplay: string;
  constructor(id: number, title: string, message: string, postedDateDisplay: string) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.postedDateDisplay = postedDateDisplay;
  }
}

export class Event {
  id: number;
  title: string;
  content: string;
  insertDateDisplay: string;
  constructor(id: number, title: string, content: string, insertDateDisplay: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.insertDateDisplay = insertDateDisplay;
  }
}
