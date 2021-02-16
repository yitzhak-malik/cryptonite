import { Component, Input,  OnInit,  } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { coinsModel } from 'src/app/models/coins.model';
import { ListLiveReportsService } from 'src/app/services/list-live-reports.service';
import { ModalChooseALotComponent } from '../modal-choose-a-lot/modal-choose-a-lot.component';

@Component({
  selector: 'app-crypt-card',
  templateUrl: './crypt-card.component.html',
  styleUrls: ['./crypt-card.component.css']
})
export class CryptCardComponent implements OnInit {

@Input() coins:coinsModel;
@Input() noneModal=true;
moreInfo=false;
public liveReportsToggle:coinsModel[];

  constructor(private listLiveReportsService:ListLiveReportsService,public ngbmodal:NgbModal  ) { 
    this.coins={
      id:"",
      symbol:"",
      name:""
    };
    this.liveReportsToggle=[];

  }
 

  ngOnInit(): void {
    
    this.listLiveReportsService.get().subscribe(
      list=>this.liveReportsToggle=list.filter(item=>item.id===this.coins.id));
  }
 
  toListliveReports():void{ 

   if(!this.liveReportsToggle[0]){

          this.listLiveReportsService.push(this.coins);
          if(!this.liveReportsToggle[0]){
              this.liveReportsToggle[0]=this.coins;
          
              const modal= this.ngbmodal.open(ModalChooseALotComponent);
              modal.componentInstance.coin=this.coins;
          }
   }else{
      this.listLiveReportsService.delete(this.coins.id)
   }

  }

}
