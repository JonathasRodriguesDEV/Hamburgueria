import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCategoryRoutingModule } from './menu-category-routing.module';
import { MenuCategoryComponent } from './menu-category.component';


@NgModule({
  declarations: [
    MenuCategoryComponent
  ],
  imports: [
    CommonModule,
    MenuCategoryRoutingModule
  ]
})
export class MenuCategoryModule { }
