import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { coinsModel } from 'src/app/models/coins.model';
import { ListLiveReportsService } from 'src/app/services/list-live-reports.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-choose-a-lot',
  templateUrl: './modal-choose-a-lot.component.html',
  styleUrls: ['./modal-choose-a-lot.component.css']
})
export class ModalChooseALotComponent implements OnInit, OnDestroy {
noneModal=false;
@Input() coin:coinsModel;
  constructor(public activeModal:NgbActiveModal,private listLiveReportsService:ListLiveReportsService ) {
    this.coin={
      id:"",
      symbol:"",
      name:""
    };
   }
 

  ngOnInit(): void {
    
     this.listLiveReportsService.get().subscribe(list=>{
      if(list.length<environment.listLivereport){
        this.activeModal.close("delete");
      }});

   }
   ngOnDestroy(): void {
         this.listLiveReportsService.push(this.coin);

   
  }

}
