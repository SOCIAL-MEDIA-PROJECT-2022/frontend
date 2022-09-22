export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
    proPict: string
    aboutMe: string


    constructor (id: number, email: string, firstName: string, lastName: string, proPict: string, aboutMe: string) {
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.proPict = proPict
        this.aboutMe = aboutMe
    }
}