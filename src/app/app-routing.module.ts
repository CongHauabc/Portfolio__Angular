import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ServicesComponent } from './services/services.component';
import { SkillComponent } from './skill/skill.component';
import { QualificationComponent } from './qualification/qualification.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent },
  {path:'About',component:AboutComponent},
  {path:'Portfolio',component:PorfolioComponent},
  {path:'Qualification',component:QualificationComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Skill',component:SkillComponent},
  {path:'Contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
