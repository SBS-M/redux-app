import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //Maneja 25 stados
      logOnly: environment.production //Restringe la extenion 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
