import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gsucursales',
  templateUrl: './gsucursales.component.html',
  styleUrls: ['./gsucursales.component.css']
})
export class GsucursalesComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      prov: '',
      cant: '',
      dist: '',
      tel: '',
      idGer: '',
      fAbre: '',
      fInicio: ''
    });
  }
  //Variables
  SucursalList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshSucList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.name,
      "provincia": customerData.prov,
      "canton": customerData.cant,
      "distrito" : customerData.dist,
      "fecha_apertura": customerData.fAbre,
      "gerente_sucursal": customerData.idGer,
      "fecha_inicio_gerente": customerData.fInicio
    };
    // se envian los datos a la Base de Datos
    this.service.addSucursal(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshSucList();
  }

  // Se actualiza la tabla de trabajadores
  refreshSucList(){
    this.service.getSucList().subscribe(data=>{
      this.SucursalList = data;
      console.log(data);
    });
  }

}
