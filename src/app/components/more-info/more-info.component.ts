import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ApiCoinsesService } from 'src/app/services/api-coinses.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit, OnDestroy{
  @Input() idMoreInfo:string;
   moreInfo:any;
   loading=true;
  constructor(private apiCoinsesService:ApiCoinsesService) { 
    this.idMoreInfo="";
    this.moreInfo={
      "market_data.current_price.isl": null,
      "market_data.current_price.usd": null,
      "market_data.current_price.eur": null,
      "image.large":null
    };
  
      
    
  }
  ngOnDestroy(): void {
    this.apiCoinsesService.deleteMoreInfo(this.idMoreInfo);
  }

  ngOnInit(): void {
    setTimeout(()=>{this.loading=!this.loading},1500);

    this.apiCoinsesService.offDeleteMoreInfo(this.idMoreInfo);
    this.apiCoinsesService.getMoreInfo(this.idMoreInfo).subscribe(more=>{this.moreInfo=more
      ; console.log(this.moreInfo)});

  }

}
