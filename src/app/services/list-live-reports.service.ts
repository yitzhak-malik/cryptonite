import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { coinsModel } from '../models/coins.model';

@Injectable({
  providedIn: 'root'
})
export class ListLiveReportsService implements OnInit {
  _ListLiveReports:coinsModel[];
   ListLiveReports:BehaviorSubject<coinsModel[]>;

  constructor() {
    this._ListLiveReports=[];
    this.ListLiveReports=new BehaviorSubject<coinsModel[]>([]);
  }

  ngOnInit(): void {
    this.ListLiveReports.next;
  }

  push(coin:coinsModel):void{
    
     if(this._ListLiveReports.length<environment.listLivereport){
       
          this._ListLiveReports.push(coin) ;
          this.ListLiveReports.next(this._ListLiveReports as coinsModel[]);
     }else{
          this.ListLiveReports.next(this._ListLiveReports as coinsModel[]);
     }

  }
   delete(id:string):void{
     
    this._ListLiveReports=this._ListLiveReports.filter( item=>item.id !== id);
    this.ListLiveReports.next(this._ListLiveReports);
   
   }
   get():Observable<coinsModel[]>{
     return this.ListLiveReports;
   }
}
