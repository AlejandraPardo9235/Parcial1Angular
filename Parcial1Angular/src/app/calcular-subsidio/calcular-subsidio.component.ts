import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calcular-subsidio',
  templateUrl: './calcular-subsidio.component.html',
  styleUrls: ['./calcular-subsidio.component.css']
})
export class CalcularSubsidioComponent {

  @Input() cedula:any=0;
  @Input() nombres: any =0;
  @Input() apellidos: any =0;
  @Input() edad: any =0;
  @Output() total = new EventEmitter<number>()
  resultado:number =0

  constructor(){
    
  }
  calcularValorSubsidio() {
    if (this.edad !== null) {
      if (this.edad >= 1 && this.edad <= 17) {
        this.resultado = this.edad * 20000;
      } else if (this.edad >= 18) {
        this.resultado =  this.edad * 40000;
      }
    }
    this.total.emit(this.resultado)
 
  }
}
