import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  //@Input() likes: number

  
  //Likes will assign length of response to value later
  likes : number = 0;
  counter : number = 0;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }

  likePost = () => {
    //fetch post id
    //let newLike = new Post(0, "", "", this.authService.currentUser, this.authService.currentUser.email, [])
    /*this.postService.upsertPost({...this.post, likes: [...[this.post.likes], newLike]})
      .subscribe(
        (response) => {
          this.post = response
          console.log(response)
        }
      )*/
      this.postService.getAllPosts().subscribe(
        (response) => {
          console.log(response)
          console.log("This was a get response")
           
          response.map((responses) => {
           
            //adds
            console.log(responses.likes)
            console.log("added current user session to likes")
            console.log(responses)
            console.log("Displayed 'updated' record above")
        },
        //This would be an upsert or similar equivalent for adding records to the likes table later
        (this.post.likes).push(this.authService.currentUser.email)
        );
        console.log(this.post.likes)
        }
      )
    //fetch junction for number of users associated with the post
    //iterate through that junction based on postId and increase number of visible likes for display
    
    

  }

  dislikePost = () => {
    this.likes--;
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
