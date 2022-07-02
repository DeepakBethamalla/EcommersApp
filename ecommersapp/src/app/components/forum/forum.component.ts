import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width="50%"
     this.dialog.open(LoginComponent);
  }

}
