import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList {
  @Input() postListTitle: string = '';
  @Input() isLoginedIn: boolean = false;
  childMessage: string = 'Message from child';
}
