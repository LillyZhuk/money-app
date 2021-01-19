import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { UsersService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = false;
  public message: string;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.loading = true;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((data: User) => {
          const dataUser =  data['0'];
          if (dataUser) {
            if (dataUser.password === formData.password) {
              this.authService.setItem('user', JSON.stringify(dataUser));
              this.authService.login();
              this.loading = false;
              this.router.navigate(['bill']);
            } else {
              this.showMessage('Пароль не правильный');
            }
          } else {
            this.showMessage('Такого пользователя не существует');
          }
        },
        error => {
          this.loading = false;
        });
  }

  private showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
      this.loading = false;
    }, 5000);
  }

}
