import User from "./User"
//may remove likes again but this may make life easier for like display
export default class Post {
  id: number
  text: string
  imageUrl: string
  author: User
  comments: Post[]
  comment: boolean
  likes: string[]


  constructor(id: number, text: string, imageUrl: string, author: User, likes: string[], comments: Post[], comment: boolean) {
    this.id = id
    this.text = text
    this.imageUrl = imageUrl
    this.author = author
    this.comments = comments
    this.comment = comment
  }
}
