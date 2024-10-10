import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule],  
  bootstrap: [AppComponent],
})
export class AppModule {}
