import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import Post from 'src/app/models/Post';
import {AuthService} from 'src/app/services/auth.service';
import {DarkModeService} from 'src/app/services/dark-mode.service';
import {PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  commentForm = new FormGroup({
    text: new FormControl(''),
  })


  @Input('post') post: Post
  replyToPost: boolean = false


  postLikesP: number;
  postID: number = 0;
  matColorPost: boolean

  constructor(private postService: PostService, private authService: AuthService, private dMode: DarkModeService) {
  }

  ngOnInit(): void {
    this.postID = this.post.id
    this.postLikesP = (this.post.likes).length

    this.dMode.theme.subscribe(
      value => {
        this.matColorPost = value
      }
    )
  }

  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }


  submitReply = (e: any) => {
    e.preventDefault()
    let newComment = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [], [])
    this.postService.upsertPost({...this.post, comments: [...this.post.comments, newComment]})
      .subscribe(
        (response) => {
          this.post = response
          this.toggleReplyToPost()
        }
      )
  }
}
