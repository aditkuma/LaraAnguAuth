import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
    email:null,
    password:null
  };
  public error=null;
  
  
  constructor(private Jarwis:JarwisService) { }
  onSubmit()
  {
    //console.log(this.form);
    this.Jarwis.login(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }
  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
