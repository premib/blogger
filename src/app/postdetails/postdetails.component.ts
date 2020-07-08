import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { HttpParams} from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
 
})
export class PostdetailsComponent implements OnInit {
  id:any;
  posts:any=[];
  title;
  constructor(private acr:ActivatedRoute,private ps:PostServiceService) {
    //const params = new HttpParams();
   // params.set('posts',this.id);
   this.acr.params.subscribe((currentId)=>this.id=currentId.id);
    console.log(this.id);
    this.ps.PostDetail(this.id).subscribe(data=>{
      this.posts.push(data);
      console.log(this.posts);
      this.title=this.posts[0].post_title;
      console.log(this.title);
      });
  
    

    
   }

  ngOnInit(): void {
    
  }
  
  

}
