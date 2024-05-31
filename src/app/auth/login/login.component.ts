import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, PasswordModule, FormsModule, CheckboxModule, RouterLink, ButtonModule, InputTextModule
  ],
  templateUrl: './login.component.html',
  styles: [`
  :host ::ng-deep .pi-eye,
  :host ::ng-deep .pi-eye-slash {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
  }
`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;
}
