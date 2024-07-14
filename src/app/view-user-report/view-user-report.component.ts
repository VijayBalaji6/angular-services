import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UserServices } from '../services/user-services';

@Component({
  selector: 'app-view-user-report',
  templateUrl: './view-user-report.component.html',
  styleUrl: './view-user-report.component.css',
})
export class ViewUserReportComponent implements OnInit {
  noOfUsers: UserModel[] = [];
  constructor(private userService: UserServices) {}
  ngOnInit(): void {
    this.noOfUsers = this.userService.get();
  }
}
