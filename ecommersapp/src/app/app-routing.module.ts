import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './components/course/course.component';
import { HiringComponent } from './components/hiring/hiring.component';
import { TechinicalComponent } from './components/techinical/techinical.component';
import { HomeComponent } from './components/home/home.component';
import { CertificationComponent } from './components/certification/certification.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ForumComponent } from './components/forum/forum.component';
import { AboutComponent } from './components/about/about.component';
import { HackathonComponent } from './components/hackathon/hackathon.component';




const routes: Routes = [

{path:'',component:HomeComponent},
{path:'course',component:CourseComponent},
{path:'hiring',component:HiringComponent},
{path:'techinical',component:TechinicalComponent},
{path:'certification',component:CertificationComponent},
{path:'membership',component:MembershipComponent},
{path:'forum',component:ForumComponent},
{path:'about',component:AboutComponent},
{path:'hackathon',component:HackathonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
