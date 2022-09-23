export default class Profile {
  id: number;
  aboutMe: string;
  hobbies: string;
  somethingElse: string;
  profilePic: string;

  constructor(
    id: number,
    aboutMe: string,
    hobbies: string,
    somethingElse: string,
    profilePic: string,
  ) {
    this.id = id;
    this.aboutMe = aboutMe;
    this.hobbies = hobbies;
    this.somethingElse = somethingElse;
    this.profilePic = profilePic;
  }
}
