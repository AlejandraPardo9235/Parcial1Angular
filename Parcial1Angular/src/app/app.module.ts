import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LiquidarComponent } from './liquidar/liquidar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalcularSubsidioComponent } from './calcular-subsidio/calcular-subsidio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LiquidarComponent,
    SidenavComponent,
    CalcularSubsidioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
