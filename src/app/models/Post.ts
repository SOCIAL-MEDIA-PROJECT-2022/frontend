import User from "./User"
import Likes from "./Likes"

export default class Post {
    id: number
    text: string
    imageUrl: string
    author: User
    comments: Post[]

    constructor (id: number, text: string, imageUrl: string, author: User, comments: Post[]) {
        this.id = id
        this.text = text
        this.imageUrl = imageUrl
        this.author = author
        this.comments = comments
    }
}