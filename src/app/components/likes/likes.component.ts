import { Component, Input, OnInit } from '@angular/core';
import Likes from 'src/app/models/Likes';
import { AuthService } from 'src/app/services/auth.service';
import { LikesService } from 'src/app/services/likes.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  

  likes: Likes

  @Input () postID : number

  @Input() postLikes : number

  constructor(private authService: AuthService, private likeService: LikesService, private postService: PostService) { }

  ngOnInit(): void {
  }
  
  likePost = () => {

    this.likes = {
      id: this.postID,

      id2: this.authService.currentUser.id
    }

    this.likeService.updateLikes(this.likes.id, this.likes.id2).subscribe((data) => {

      console.log(data);

    this.postLikes = data.likes.length
      
    })
    


  }

}
