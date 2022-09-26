import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import Post from 'src/app/models/Post';
import {AuthService} from 'src/app/services/auth.service';
import Request from 'src/app/models/Request'
import {DarkModeService} from 'src/app/services/dark-mode.service';
import {PostService} from 'src/app/services/post.service';
import {FollowService} from "../../services/follow.service";

@Component({
  selector: 'app-post-feed-page',
  templateUrl: './post-feed-page.component.html',
  styleUrls: ['./post-feed-page.component.css']
})

export class PostFeedPageComponent implements OnInit {

  postForm = new FormGroup({
    text: new FormControl(''),
    imageUrl: new FormControl('')
  })

  posts: Post[] = [];
  createPost: boolean = false;
  request: Request;
  matColorPostFeed: boolean

  constructor(private postService: PostService, private authService: AuthService, private dMode: DarkModeService, private followService: FollowService) {
  }

  ngOnInit(): void {

    this.postService.getAllPosts(this.authService.currentUser.id).subscribe(
      (response) => {
        this.posts = response
      }
    )

    this.dMode.theme.subscribe(
      value => {
        this.matColorPostFeed = value
      }
    )

    this.followService.getFollowers(this.authService.currentUser.id);

  }

  toggleCreatePost = () => {
    this.createPost = !this.createPost
  }

  submitPost = (e: any) => {
    e.preventDefault();
    this.postService.upsertPost(new Post(0, this.postForm.value.text || "", this.postForm.value.imageUrl || "", this.authService.currentUser, [], [], false))
      .subscribe(
        (response) => {
          this.posts = [response, ...this.posts]
          this.toggleCreatePost()
        }
      )
  }
}
