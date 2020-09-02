import { ɵangular_packages_forms_forms_s } from '@angular/forms';

export class User {
    name: string;
    email: string;
    birthdate: string;
    phoneno: string;
    gender: string;
    address:string;
    constructor(name:string,
        email:string,
        birthdate:string,
        phoneno:string,
        gender:string,
        address:string)
        {
         this.name=name;
         this.birthdate=birthdate;
         this.email=email;
         this.phoneno=phoneno;
         this.gender=gender;
         this.address=address   
        }
  }