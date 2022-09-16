import { Component, Input, OnInit } from '@angular/core';
import Likes from 'src/app/models/Likes';
import { AuthService } from 'src/app/services/auth.service';
import { LikesService } from 'src/app/services/likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  
  //acts storage for likes
  likes: Likes

  @Input () postID : number

  constructor(private authService: AuthService, private likeService: LikesService) { }

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
    this.likeService.updateLikes(this.likes.id, this.likes.id2).subscribe()
    
    
    

  }

}
