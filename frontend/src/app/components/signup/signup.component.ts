import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Token } from '@angular/compiler';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };
  public error=[];
  constructor(private Jarwis:JarwisService, private Token:TokenService, private router:Router) { }
  onSubmit()
  {
    //console.log(this.form);
    this.Jarwis.signup(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  handleError(error){
    this.error = error.error.errors;
  }


  ngOnInit() {
  }

}
