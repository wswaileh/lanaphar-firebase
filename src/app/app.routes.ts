import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', component: AppLayoutComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: '' }
        ]
    }
];
