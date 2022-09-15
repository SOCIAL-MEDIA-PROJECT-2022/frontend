import User from "./User"

export default class Post {
    id: number
    text: string
    imageUrl: string
    author: User
    likes: string[]
    comments: Post[]

    constructor (id: number, text: string, imageUrl: string, author: User, likes: string[], comments: Post[]) {
        this.id = id
        this.text = text
        this.imageUrl = imageUrl
        this.author = author
        this.likes = likes
        this.comments = comments
    }
}