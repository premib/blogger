import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostlistComponent } from './postlist/postlist.component';


const routes: Routes = [
  {
    path:"",
    component:PostlistComponent
  },
  {
    path:"posts/:id",
    component:PostdetailsComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
