import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { coinsModel } from 'src/app/models/coins.model';
import { ListLiveReportsService } from 'src/app/services/list-live-reports.service';
import { ModalChooseALotComponent } from '../modal-choose-a-lot/modal-choose-a-lot.component';

@Component({
  selector: 'app-crypt-card',
  templateUrl: './crypt-card.component.html',
  styleUrls: ['./crypt-card.component.css']
})
export class CryptCardComponent implements OnInit, OnChanges {
@Input() coins:coinsModel;
@Input() noneModal=true;
moreInfo=false;
coinId:any;
  liveReportsToggle:boolean;
  public _liveReportsToggle:coinsModel;
  public __liveReportsToggle:coinsModel[];
  constructor(private listLiveReportsService:ListLiveReportsService,public ngbmodal:NgbModal  ) { 
    this.coins={
      id:"",
      symbol:"",
      name:""
    };
        this._liveReportsToggle={
      id:"",
      symbol:"",
      name:""
    };
    this.__liveReportsToggle=[];
    this.liveReportsToggle=false;
    this.coinId=this.coins.id;
  }
  ngOnChanges(_changes: SimpleChanges): void {
    
   
  }

  ngOnInit(): void {
    
    this.listLiveReportsService.get().subscribe(
      list=>this.__liveReportsToggle=list.filter(item=>item.id===this.coins.id));
      
    //this._liveReportsToggle?this.liveReportsToggle=true:this.liveReportsToggle=false});
   // this._liveReportsToggle=this._liveReportsToggle.filter(theId=>theId===this.coins.id);
   // this.__liveReportsToggle[0]=this._liveReportsToggle[0];
   //this.listLiveReportsService.get().subscribe(list=>this.__liveReportsToggle=list);    
  }
 
  toListliveReports():void{ 

   if(!this.__liveReportsToggle[0]){
          //this.__liveReportsToggle=this._liveReportsToggle;
          this.listLiveReportsService.push(this.coins);
          if(!this.__liveReportsToggle[0]){
            this.__liveReportsToggle[0]=this.coins;
          
            const modal= this.ngbmodal.open(ModalChooseALotComponent);
            modal.componentInstance.coin= this.__liveReportsToggle[0];
            
                    
            // modal.closed.subscribe(()=>{
            //   this.listLiveReportsService.push(this.coins.id)
            //   if(!this._liveReportsToggle[0]){
            //     console.log("hh")
            //   }
            // })
            
          }
    }else{
      this.listLiveReportsService.delete(this.coins.id)
    }
    
     // this.liveReportsToggle=!this.liveReportsToggle;
          // this.listLiveReportsService.ListLiveReports.subscribe(ikk=>this.kkk=ikk)
    // if(!this._liveReportsToggle[0]){
     // this.liveReportsToggle = !this.liveReportsToggle;
    //  setTimeout(()=>{this.liveReportsToggle =!this.liveReportsToggle;},500);
     // console.log("ggg");
    // }
    
 console.log(this._liveReportsToggle,this.coins.id,);
 //this.listLiveReportsService.ListLiveReports.subscribe(console.log)
 
  }

}
