import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private shared = false;
  private userData = null;
  readonly APIUrl ="https://localhost:7065";

  constructor(private http: HttpClient) { }

  // Para la tabla de sucursales
  getSucList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GSucursales/Obtener');
  }
  addSucursal(val:any){
    return this.http.post(this.APIUrl+'/GSucursales/Guardar',val);
  }

  //Para la tabla de empleados
  getEmpleadoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTrabajadores/Obtener');
  }
  addEmpleado(val:any){
    fetch(this.APIUrl+'/GTrabajadores/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    //this.http.post(this.APIUrl+'/GTrabajadores/Guardar',val);
  }

  // Para la tabla de clientes
  getClientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener');
  }
  getClienteId():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener-por-id');
  }
  addCliente(val:any){
    return this.http.post(this.APIUrl+'/GClientes/Guardar',val);
  }

  // Para la tabla de citas
  getCitaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/RCitas/Obtener');
  }
  addCita(val:any){
    return this.http.post(this.APIUrl+'/RCitas/Guardar',val);
  }

  // Para la tabla de proveedores
  getProviderList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GProveedores/Obtener');
  }
  addProvider(val:any){
    return this.http.post(this.APIUrl+'/GProveedores/Guardar',val);
  }

  // Para la tabla de insumos/productos
  getProductosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GInsumos/Obtener');
  }
  addProducto(val:any){
    return this.http.post(this.APIUrl+'/GInsumos/Guardar',val);
  }

  // Para la tabla de tipos de lavado
  getCleanTypesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTipos_de_lavado/Obtener');
  }
  addCleanType(val:any){
    return this.http.post(this.APIUrl+'/GTipos_de_lavado/Guardar',val);
  }
}
