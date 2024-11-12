import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild("cajauser") cajauser!: ElementRef
  @ViewChild("cajapassword") cajapassword!: ElementRef

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  login(): void {
    let user = this.cajauser.nativeElement.value;
    let password = this.cajapassword.nativeElement.value;
    let usuario = new Usuario(user, password);
    this._service.getToken(usuario).subscribe(response => {
      this._service.token = response.response;
      this._router.navigate(['/perfil'])
    })
  }
}
