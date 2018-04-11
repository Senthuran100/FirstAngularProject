import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DccomicsComponent } from './dccomics/dccomics.component';
import {RouterModule,Routes} from '@angular/router';

const routeLists :Routes =[

  {path:"todo",component:DccomicsComponent},
  {path:"",component:MarvelComponent}
  
]
@NgModule({ 
  declarations: [
    AppComponent,
    MarvelComponent,
    DccomicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
