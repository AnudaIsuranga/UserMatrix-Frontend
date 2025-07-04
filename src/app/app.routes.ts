import { Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"add-user",
        component:AddUserComponent
    },
    {
        path:"manage-user",
        component:ManageUserComponent
    },
    {
        path:"faqs",
        component:FaqsComponent
    },
    {
        path:"about-us",
        component:AboutUsComponent
    },
];
