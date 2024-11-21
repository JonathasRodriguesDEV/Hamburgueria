import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DescriptionComponent } from './description/description.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    DescriptionComponent,
    InputComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    DescriptionComponent,
    InputComponent
  ]
})
export class SharedModule { }
