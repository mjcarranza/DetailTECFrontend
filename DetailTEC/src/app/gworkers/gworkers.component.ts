import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gworkers',
  templateUrl: './gworkers.component.html',
  styleUrls: ['./gworkers.component.css']
})
export class GworkersComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      apellido1: '',
      apellido2: '',
      cedula: '',
      edad: '',
      password: '',
      fecha_ingreso: '',
      fecha_nacimiento: '',
      rol: '',
      tipo_pago: ''
    });
  }
  //Variables
  EmpleadoList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshEmplList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se cambia el tipo de dato de rol y tipo de pago
    customerData.rol = parseInt(customerData.rol);
    customerData.tipo_pago = parseInt(customerData.tipo_pago);
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "apellido1": customerData.apellido1,
      "apellido2": customerData.apellido2,
      "cedula" : customerData.cedula,
      "fecha_ingreso": customerData.fecha_ingreso,
      "fecha_nacimiento": customerData.fecha_nacimiento,
      "edad": customerData.edad,
      "password": customerData.password,
      "rol": customerData.rol,
      "tipo_pago": customerData.tipo_pago
    };
    // se envian los datos a la Base de Datos
    this.service.addEmpleado(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshEmplList();
  }

  // Se actualiza la tabla de trabajadores
  refreshEmplList(){
    this.service.getEmpleadoList().subscribe(data=>{
      this.EmpleadoList = data;
      console.log(data);
    });
  }
}
