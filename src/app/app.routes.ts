import { Routes } from '@angular/router';
import { DevopsdocsComponent } from './masters/devopsdocs/devopsdocs.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'devops', component: DevopsdocsComponent }
];
