import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchComponent,
    DetailsComponent,
    WelcomeComponent,
    ProfileComponent,
    AdminComponent,
    ModifierComponent,
    SupprimerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
