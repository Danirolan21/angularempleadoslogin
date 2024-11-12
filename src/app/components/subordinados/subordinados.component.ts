import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit{

  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(['/login'])
    } else {
      this._service.getSubordinados().subscribe(response => {
        this.empleados = response;
      });
    }
    
  }
  
}
