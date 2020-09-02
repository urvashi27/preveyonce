import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { MatTableDataSource} from '@angular/material/table'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns:String[]= ['Name','Email','BirthDate','Gender','Mobile Number','Address'];
  dataSource:any;

  constructor(private service:UserService) {
    this.dataSource =new MatTableDataSource(this.service.allUsers)
   }

  ngOnInit() {
    
    console.log(this.dataSource);
  }

}
