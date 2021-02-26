import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surename: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }


  login(){
    this.router.navigate(["/login"]);
  }

  register() {
    if(this.registerForm.valid){
      this.userService.addUser(this.registerForm.value).subscribe();
    }
  }
}