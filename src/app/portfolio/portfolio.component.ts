import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  clickphoto:string=""
  detialsphoto:boolean = true

  photos:string[]=[
    "../../assets/img/img2.png",
    "../../assets/img/img3.png",
    "../../assets/img/img4.png",
    "../../assets/img/img5.png",
    "../../assets/img/img6.png",
    "../../assets/img/img7.png",
  ]
  Closeimg():void{
    this.detialsphoto=!this.detialsphoto 
    }

  }




