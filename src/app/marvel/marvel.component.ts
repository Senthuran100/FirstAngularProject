import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
   
     heros=['Iron Man','Superman','Spiderman','Ant Man'];
     inputHero=null;
     btnDisable=false;
    Adding=false;
     ChangeHero(){

      this.heros.push(this.inputHero);
      this.inputHero =null;
      this.Adding=false;
      
     }
     AddMore(){
       this.Adding=!this.Adding;
     }
  constructor() { }

  ngOnInit() {
  }

}
