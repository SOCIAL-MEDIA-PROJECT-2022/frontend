import { Component, Input, OnInit } from '@angular/core';
import Likes from 'src/app/models/Likes';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostService } from 'src/app/services/post.service';
import { PostFeedPageComponent } from '../post-feed-page/post-feed-page.component';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  
  //acts storage for likes
  likes: Likes

  @Input () postID : number
  //@Input () postRec : Post
  @Input() postLikes : number

  constructor(private authService: AuthService, private likeService: LikesService, private postService: PostService) { }

  ngOnInit(): void {
  }
  
  likePost = () => {
    //fetch post id and user email
    this.likes = {
      id: this.postID,
      //email: this.authService.currentUser.email
      id2: this.authService.currentUser.id
    }
   /* console.log(this.postID)
    console.log("This was our likes object")
    console.log("id: "  + this.likes.id)
    console.log("id2: "  + this.likes.id2)*/
    //sending a post ID with the name of the user that liked it
    this.likeService.updateLikes(this.likes.id, this.likes.id2).subscribe((data) => {

      console.log(data);

    this.postLikes = data.likes.length
      
    })
    
    //this.postRec.likes.push(this.authService.currentUser.email)

  }

}
