import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // VARIABLES
  private shared = false;
  private userData = null;
  readonly APIUrl ="https://localhost:7065";

  constructor(private http: HttpClient) { }

  // PARA LA TABLA DE SUCURSALES
  // metodo get
  getSucList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GSucursales/Obtener');
  }
  // metodo post
  addSucursal(val:any){
    fetch(this.APIUrl+'/GSucursales/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE EMPLEADOS
  // metodo get
  getEmpleadoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTrabajadores/Obtener');
  }
  // metodo post
  addEmpleado(val:any){
    fetch(this.APIUrl+'/GTrabajadores/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE CLIENTES
  // metodo get
  getClientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener');
  }
  // metodo get por id
  getClienteId():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener-por-id');
  }
  // metodo post
  addCliente(val:any){
    fetch(this.APIUrl+'/GClientes/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE CITAS
  // metodo get
  getCitaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/RCitas/Obtener');
  }
  // metodo post
  addCita(val:any){
    fetch(this.APIUrl+'/RCitas/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE PROVEEDORES
  // metodo get
  getProviderList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GProveedores/Obtener');
  }
  // metodo post
  addProvider(val:any){
    fetch(this.APIUrl+'/GProveedores/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE INSUMOS/PRODUCTOS
  // metodo get
  getProductosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GInsumos/Obtener');
  }
  // metodo post
  addProducto(val:any){
    fetch(this.APIUrl+'/GInsumos/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE TIPOS DE LAVADO
  // metodo get
  getCleanTypesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTipos_de_lavado/Obtener');
  }
  // metodo post
  addCleanType(val:any){
    fetch(this.APIUrl+'/GTipos_de_lavado/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }
}
