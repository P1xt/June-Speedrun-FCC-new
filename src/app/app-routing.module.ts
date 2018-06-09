import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TributePageComponent } from './projects/tribute-page/tribute-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/tribute-page', component: TributePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
