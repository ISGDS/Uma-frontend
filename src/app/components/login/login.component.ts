import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    register(){
        this.router.navigate(["/create-account"]);
    }

    login() {
        if(this.loginForm.valid){
            this.userService.loginUser(this.loginForm.value)
            .subscribe(res => {
                if(res instanceof Object){
                    this.router.navigate(["/back-office-area"]);
                }
            });
        }
    }
}
