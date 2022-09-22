import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentForm = new FormGroup({
    text: new FormControl(''),
  })

  @Input('comment') inputComment: Post;
  replyToComment: boolean = false

  constructor(private postService: PostService, private authService: AuthService, private dMode : DarkModeService) { }
  matColorPostComment: boolean
  ngOnInit(): void {
    this.dMode.theme.subscribe(
      value => {
        this.matColorPostComment = value
      }
    )
  }

  toggleReplyToComment = () => {
    this.replyToComment = !this.replyToComment
  }

  submitReply = (e: any) => {
    e.preventDefault()
    let newComment = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [])
    this.postService.upsertPost({...this.inputComment, comments: [...this.inputComment.comments, newComment]})
      .subscribe(
        (response) => {
          this.inputComment = response
          this.toggleReplyToComment()
        }
      )
  }
}
