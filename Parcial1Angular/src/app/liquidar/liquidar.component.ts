import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liquidar',
  templateUrl: './liquidar.component.html',
  styleUrls: ['./liquidar.component.css']
})
export class LiquidarComponent {
  cedula:string="";
  nombres:string="";
  apellidos:string="";
  edad: number = 0
  totalPapa: number = 0
  
 calculoHijo(total:any){
  this.totalPapa = total
 }


}
