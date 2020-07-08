import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  constructor(private httpclient:HttpClient) {
   
    
    
    
   
   }
   loadPost():Observable<any>
   {
    return this.httpclient.get("https://5f0437158b06d60016dde2a1.mockapi.io/posts");      
   }
   PostDetail(data):Observable<any>
   {
   

    return this.httpclient.get(`https://5f0437158b06d60016dde2a1.mockapi.io/posts/${data}`);      
   }
}
