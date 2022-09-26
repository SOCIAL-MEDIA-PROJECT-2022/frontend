export default class Follower {
  email: string;
  id: number;
  state: string;

  constructor(id: number, email: string, state: string) {
    this.id = id;
    this.email = email;
    this.state = state;
  }


}
