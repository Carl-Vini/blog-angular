import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContentComponent } from './components/pages/content/content.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home'
    },
    {
        path: 'content/:id',
        component: ContentComponent
    }
];
