import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {  Observable,  } from 'rxjs';
import {  map, tap  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { coinsModel } from '../models/coins.model';



@Injectable({
  providedIn: 'root'
})
export class ApiCoinsesService   {
  private MORE_INFO:any;
  private timer: any;
  private listCoins:coinsModel[];
  private rootApi='https://api.coingecko.com/api/v3/coins/';
  constructor(private httpClient:HttpClient) {
    this.MORE_INFO={}; 
    this.timer={};
    this.listCoins=[{
      id:"",
      symbol:"", 
      name:""
    }];
   // this.listCoins=[{}];
   }

 get(): Observable<coinsModel[]> {
       if(this.listCoins[0].name){
      return of(this.listCoins);
    }else{
      return this.httpClient.get(`${this.rootApi}/list`)
      .pipe(map(list=>list= list as coinsModel[]),map(list=>list=list.filter(list=>list.id!=="")),tap(list=>this.listCoins=list as coinsModel[]));
    }

  // .subscribe(list => this.listCoins= list ); 
  //  this.listCoins=this.listCoins.splice(1000,100);
  // return of(this.listCoins);
  // return of (this.listCoins);
 }
 getMoreInfo(id:string):Observable<any>{
       if( this.MORE_INFO[id]) {
      return of(this.MORE_INFO[id])
    }else{
    return this.httpClient.get(`${this.rootApi}${id}`)
    .pipe(tap((r) => this.MORE_INFO[id]=r));
    }
  }
 deleteMoreInfo(id:string):void{
  
  this.timer[id]=setTimeout(()=>
  {delete this.MORE_INFO[id];} ,environment.timeResetMoreInfo*1000); 
 }
 offDeleteMoreInfo(id:string):void{
  
    clearTimeout(this.timer[id]);
 }
}