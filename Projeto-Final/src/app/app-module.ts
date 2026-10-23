import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CadastroProjeto } from './cadastro-projeto/cadastro-projeto';

@NgModule({
  declarations: [App, CadastroProjeto],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
