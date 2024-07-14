import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user-model';
import { UserServices } from '../services/user-services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private userService: UserServices) {}

  addUser(userData: NgForm): void {
    let newUser: UserModel = new UserModel(
      userData.value.userName,
      userData.value.userAge,
      userData.value.gender
    );
    this.userService.add(newUser);
  }
}
