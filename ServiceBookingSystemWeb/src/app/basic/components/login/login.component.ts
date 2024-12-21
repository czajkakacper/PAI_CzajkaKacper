import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,

  ) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  submitForm() {
    this.authService.login(this.validateForm.get(['userName'])!.value, this.validateForm.get(['password'])!.value)
      .subscribe(
        res => {
          console.log('Login successful:', res);
          // Twoja logika w przypadku sukcesu (np. nawigacja, zapis tokena)
          if (UserStorageService.isClientLoggedIn()) {
            console.log('Tu powinien być client')
            this.router.navigateByUrl('client/dashboard')
          } else if (UserStorageService.isCompanyLoggedIn()) {
            console.log('Tu powinien byc company')
            this.router.navigateByUrl('company/dashboard')
          }
        },
        error => {
          // Dodajemy szczegółowe logowanie w przypadku błędu
          if (error.status === 401) {
            this.notification.error('ERROR', 'Bad credentials', { nzDuration: 5000 });
          } else if (error.status === 500) {
            this.notification.error('ERROR', 'Server error', { nzDuration: 5000 });
          } else {
            this.notification.error('ERROR', `Unexpected error: ${error.statusText}`, { nzDuration: 5000 });
          }

          // Logowanie szczegółów błędu w konsoli przeglądarki
          console.error('Error details:', {
            status: error.status,
            message: error.message,
            errorBody: error.error // Szczegóły odpowiedzi backendu, jeśli są dostępne
          });
        }
      );
  }
  
}
