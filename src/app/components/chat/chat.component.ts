import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabase,  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatMessage } from './models/message.class';
declare const document: any;
@Component({
  selector: 'pwa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('element') messagesElement: ElementRef;

  public messages: FirebaseListObservable<ChatMessage[]>;
  public name = '';
  public text = '';

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.messages = this.db.list('/messages', {
      query: {
        limitToLast: 10
      }
    });
    this.afAuth.authState.subscribe(user => this.name = user ? user.displayName : null);
    this.scrollToBottom();
    this.messages.subscribe(() => this.scrollToBottom());
  }

  send() {
    if (this.text.length) {
      this.messages.push({ text: this.text, name: this.name, timestamp: new Date().valueOf() });
      this.text = '';
    }
  }

  scrollToBottom() {
    setTimeout(() => this.messagesElement.nativeElement.scrollTop = this.messagesElement.nativeElement.scrollHeight);
  }

}
