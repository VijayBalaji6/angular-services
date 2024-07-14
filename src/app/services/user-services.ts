import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  users: UserModel[] = [];

  constructor() {}

  add(user: UserModel): void {
    this.users.push(user);
  }

  get(): UserModel[] {
    return this.users;
  }

  getNoOfUsers(): number {
    return this.users.length;
  }
}
