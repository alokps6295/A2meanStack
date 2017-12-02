import { Component, OnInit } from '@angular/core';
import{ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import{Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String;
email:String;
username:String;
password:String;
constructor(private validateService:ValidateService,
  private flashMessage:FlashMessagesService,
private router:Router,
private authservice:AuthService
) { }

  ngOnInit() {
  }

  onRegister(){
    console.log("gyuyu");
    const user={
      name:this.name,
      username:this.name,
      password:this.password,
      email:this.email
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.authservice.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });


  }

}
