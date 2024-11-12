import { Component, DoCheck } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public login!: boolean

  constructor(
    private _service: ServiceEmpleados
  ) {}

  ngDoCheck(): void {
    if (this._service.token != "") {
      this.login = true;
    } else {
      this.login = false;
    }
    console.log("MENU");
  }
}
