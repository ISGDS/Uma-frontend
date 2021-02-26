import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user/user';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-back-office-area',
  templateUrl: './back-office-area.component.html',
  styleUrls: ['./back-office-area.component.css']
})
//Back office area controller for viewing, editing and deleting users
export class BackOfficeAreaComponent implements OnInit {

  @Input() user!: User;
  @Input() userList!: User[];
  displayedColumns: string[] = ['id', 'name', 'surename', 'date', 'email', 'password', 'phone', 'actions'];
  dataRefresher: any;

  constructor(private userSerivce: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers() {
    this.userSerivce.getAllUsers()
      .subscribe((userList: User[]) => {
        this.userList = userList;
      });
  }

  showUser() {
    this.userSerivce.getUser()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  refresh() {
    this.dataRefresher =
      setInterval(() => {
        this.showAllUsers();
      }, 100);
  }

  updateRowData(user: User) {
    this.userSerivce.updateUser(user).subscribe();
    this.refresh();
  }
  deleteRowData(user: User) {
    this.userSerivce.deleteUser(user.id).subscribe();
    this.refresh();
  }

  openDialog(action: any, user: User) {
    let result = { action, user };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: result
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });

  }

}
