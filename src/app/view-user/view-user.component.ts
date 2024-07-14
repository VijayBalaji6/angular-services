import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UserServices } from '../services/user-services';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent implements OnInit {
  users: UserModel[] = [];
  constructor(private userService: UserServices) {}
  ngOnInit(): void {
    this.users = this.userService.get();
  }
}
