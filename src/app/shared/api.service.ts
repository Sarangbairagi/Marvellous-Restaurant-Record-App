import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { Menulist } from '../menu/Menulist.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  
  

  constructor(private _http: HttpClient) { }

  // Restaurent Dashboard Related API

  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    console.log("In API Service addRestaurent");
    return this._http.post<any>("http://localhost:3000/posts",restaurentModelObj).pipe(map((res:any)=>{
      return res;
    }))
  }

  //POST request
  postRestaurent(data:any ) 
  {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id:number) 
  {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }

  //Specific Data
  SpecificRestaurant(data : any)
  {
    return this._http.get<any>(`http://localhost:3000/posts?name=${data}`).pipe(map((res:any)=>{
      return res;
    }));
  }

// ###############################################################################################################################################

// Restaurent Menu Related API

  // GET Menu request
  getMenuData(name : string )
  {
    return this._http.get<any>(`http://localhost:3000/Menu?name=${name}`).pipe(map((res:any)=>{
      return res;
    }));
  }

  // Add Menu request
  add_dishmenu( menulist : Menulist)
  {
    console.log("In API Service addRestaurentMenu");
    return this._http.post<any>("http://localhost:3000/Menu",menulist).pipe(map((res:any)=>{
      return res;
    }))
  }

  //update Menu request
  updatemenu(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:3000/Menu/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }

   //delete Menu request
   deletemenu(id:number) 
   {
     return this._http.delete<any>("http://localhost:3000/Menu/"+id).pipe(map((res:any)=>{
       return res;
     }));
   }
}
