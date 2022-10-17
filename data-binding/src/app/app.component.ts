import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utilizar valores que propriedades
   * possuem para mostrá-los para o usuário
   */

  /**
   * property binding: utilizar valores de propriedades para
   * atribuí-los a atributos HTML
   */

  /**
   * event binding: utilizado para ouvir eventos da DOM dentro
   * do Angular
   */

  /**
   * Two Way Data Binding:
   */
  title = 'Angular é muito bom!';
  n1: number = 0
  n2: number = 0
  tipoInput: string = 'text'
  i: number = 0

  somar(x: number, y: number) {
    return x + y
  }

  mudarTipoDoInput(): void {
    if (this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }

  increment() {
    this.i++
  }

  decrement() {
    this.i--
  }
}
