import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coinsModel } from 'src/app/models/coins.model';
import { ApiCoinsesService } from 'src/app/services/api-coinses.service';
import { ListLiveReportsService } from 'src/app/services/list-live-reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCoins:coinsModel[];
  @Input() noneModal=true;
  constructor(private apiCoinsesService:ApiCoinsesService,private listLiveReportsService:ListLiveReportsService,
  private activatedRoute:ActivatedRoute ) {
    this.listCoins=[];
   
   }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(rPar=>{
      const coin=rPar.get('coin');
      if(coin){
        this.apiCoinsesService.get().subscribe(list =>this.listCoins=list.filter(theList=>theList.symbol===coin));
      }if(!coin){
        this.apiCoinsesService.get().subscribe(list =>this.listCoins=list);
      }
    })
    if(!this.noneModal){
            this.listLiveReportsService.get().subscribe(list =>this.listCoins=list);
    }
   
 
  }
 dd():void{
  //this.apiCoinsesService.get().subscribe(list =>this.listCoins=list )
   console.log(this.listCoins);
 }
 
}
