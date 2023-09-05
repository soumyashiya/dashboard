import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  // sideBarOpen=true
  // constructor(){}
  // sideBarToggler(){
  //   this.sideBarOpen=!this.sideBarOpen
  // }
  sidebarOpend:boolean=true
 


  toggle(){
    this.sidebarOpend=!this.sidebarOpend

  }
  
  
}
