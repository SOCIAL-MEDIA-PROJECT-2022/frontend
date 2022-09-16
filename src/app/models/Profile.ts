import User from './User';

export default class Proile {
  id: number;
  aboutMe: string;
  hobbies: string;
  somethingElse: string;
  profilePic: string;
  user: User;

  constructor(
    id: number,
    aboutMe: string,
    hobbies: string,
    somethingElse: string,
    profilePic: string,
    user: User
  ) {
    this.id = id;
    this.aboutMe = aboutMe;
    this.hobbies = hobbies;
    this.somethingElse = somethingElse;
    this.profilePic = profilePic;
    this.user = user;
  }
}
