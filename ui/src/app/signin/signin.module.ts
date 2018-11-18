import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    { path: '', component: SigninComponent },
];

@NgModule({
    declarations: [
        SigninComponent,
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    bootstrap: [SigninComponent]
})
export class SigninModule { }
