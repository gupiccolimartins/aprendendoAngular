import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OlaMundoComponent } from './ola-mundo/ola-mundo.component';
import { ContadorComponent } from './contador/contador.component';
import { LivroComponent } from './livro/livro.component';
import { RevistaComponent } from './revista/revista.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaMundoComponent,
    ContadorComponent,
    LivroComponent,
    RevistaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
