import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostServiceService } from './post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PostdetailsComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
