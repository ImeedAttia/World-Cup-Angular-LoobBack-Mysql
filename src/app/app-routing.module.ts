import { SupprimerComponent } from './supprimer/supprimer.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path : "" , component : WelcomeComponent},
  {path : "Home" , component : HomeComponent},
  {path : "Match" , component : MatchComponent},
  {path:"Match/Details/:id" , component : DetailsComponent},
  {path : "Profile/:id" , component : ProfileComponent},
  {path : "Admin" , component : AdminComponent},
  {path : "Admin/Modifier/:id" , component : ModifierComponent},
  {path : "Admin/supprimer/:id" , component : SupprimerComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
