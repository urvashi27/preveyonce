import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,  Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {User} from '../User';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
registerForm:FormGroup;
value:String;
user:any;
  constructor(private fb: FormBuilder,private router:Router,private service:UserService) { }

  ngOnInit() {
    this.registerForm=this.fb.group(
      {
        name:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
        email:['',[Validators.required,Validators.email]],
        birthdate:['',[Validators.required]],
        phoneno:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        address:['',[Validators.required]],
        gender:['',[Validators.required]]
      }
    );
  }
  submit()
  {
    if(this.registerForm.invalid)
    {
      alert("please enter all fields");
      return;
    }
      else{
    this.user=new User(this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.birthdate,
      this.registerForm.value.phoneno,
      this.registerForm.value.gender,
      this.registerForm.value.address);
      
      this.service.addUser(this.user);
    
    this.router.navigate(['user']);
    
   
  }
}

}
