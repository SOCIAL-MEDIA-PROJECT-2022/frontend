import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Likes from 'src/app/models/Likes';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

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

  
  //Test
  
  //

  
  //Likes will assign length of response to value later
  //likes : number = 0;
 // userLike : Likes;


  //likesLength = Object.keys(Likes).length
  postLikesP : number;
  postID : number = 0;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.postID = this.post.id
    this.postLikesP = (this.post.likes).length
  }

  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }
  

  /*dislikePost = () => {
    this.likes--;
  }*/

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
