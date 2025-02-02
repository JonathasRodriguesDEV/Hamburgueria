// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './home.component';


// @NgModule({
//   declarations: [
//     HomeComponent
//   ],
//   imports: [
//     CommonModule,
//     HomeRoutingModule
//   ]
// })
// export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class HomeModule { }
