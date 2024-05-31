import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './modules/components/intro/intro.component';
import { ContactComponent } from './modules/components/contact/contact.component';

const routes: Routes = [
    { path: '', component: IntroComponent },  // Rota para a página Home
    { path: 'contato', component: ContactComponent }  // Rota para a página Contato
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
