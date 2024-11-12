import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceEmpleados {

    public token: string;

    constructor (
        private _http: HttpClient
    ) {this.token = ""}

    getToken(usuario: Usuario): Observable<any> {
        let json = JSON.stringify(usuario);

        let headers = new HttpHeaders().set("Content-type", "application/json");

        let request = "Auth/Login";
        let url = environment.urlApiEmpleados + request;
        return this._http.post(url, json, {headers: headers});
    }

    getPerfilEmpleado(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", 'bearer ' + this.token);
        let request = "api/Empleados/PerfilEmpleado";
        let url = environment.urlApiEmpleados + request;
        return this._http.get(url, {headers: headers});
        
    }

    getSubordinados(): Observable<any> {
        let header = new HttpHeaders().set("Authorization", "bearer " + this.token);
        let request = "api/empleados/subordinados";
        let url = environment.urlApiEmpleados + request;
        return this._http.get(url, {headers: header});
    }
}