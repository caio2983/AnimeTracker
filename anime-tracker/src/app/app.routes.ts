import { Routes } from '@angular/router';
import { AnimepageComponent } from '../pages/animepage/animepage.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';

export const routes = [
  { path: 'anime', component: AnimepageComponent },
  { path: '', component: HomepageComponent },
];
