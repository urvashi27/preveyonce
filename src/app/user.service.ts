import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
allUsers:User[]=[
  {
    
    "name":"Urvashi",
    
    "email":"urvashi@gmail.com",
    "phoneno":"123456789",
    "birthdate":"27/06/1996",
    "gender":"female",
    "address":"Bhandara"
  },
  
];
  constructor() { }
  addUser(user:User)
  {
    this.allUsers.push(user);
    console.log(this.allUsers);
  }
  
}
