import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    IntroComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
