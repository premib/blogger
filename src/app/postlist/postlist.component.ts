import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  providers: [
    PostServiceService
 ]
})
export class PostlistComponent implements OnInit {

  posts=[];
  constructor(private postservice:PostServiceService){
    this.postservice.loadPost().subscribe(data=>{
      this.posts=data;
      //console.log(this.posts);
      });

  }

  ngOnInit(): void {
  }

}
