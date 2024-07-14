export class UserModel {
  userName: String;
  userAge: number;
  userGender: String;

  constructor(name: String, userAge: number, gender: String) {
    this.userName = name;
    this.userAge = userAge;
    this.userGender = gender;
  }
}
