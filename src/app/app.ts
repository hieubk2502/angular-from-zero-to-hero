import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsList } from './layout/posts-list/posts-list';

@Component({
  selector: 'app-root',
  imports: [PostsList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected appPostTitle = signal('App Post Title!');

  protected isLoginedIn = signal(false);

  @ViewChild(PostsList) postList: any;


  childMessage: string = '';

  constructor() {
    console.log(this.postList);
  } 

  ngAfterViewInit() {
    console.log(this.postList);
    // this.childMessage = this.postList.childMessage;
  }

  recievedEvent($event: any) {
    this.childMessage = $event;
    console.log($event);
  }
}
