import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:AddCustomerPageComponent
    },
    {
        path:"manage-customer",
        component:ManageCustomerPageComponent
    }
];
