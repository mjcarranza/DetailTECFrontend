import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gclients',
  templateUrl: './gclients.component.html',
  styleUrls: ['./gclients.component.css']
})
export class GclientsComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      apellido1: '',
      apellido2: '',
      telefono1: '',
      telefono2: '',
      cedula: '',
      email: '',
      direcciones: '',
      usuario: ''
    });
  }

  //Variables
  ClientsList : any = []; 
  checkoutForm: any;
  contra : string;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshClientsList();
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
      "telefono1" : customerData.telefono1,
      "telefono2": customerData.telefono2,
      "cedula": customerData.cedula,
      "correo": customerData.email,
      "direccion": customerData.direccion,
      "usuario": customerData.usuario,
      "password": this.generatePassword()
    };
    // se envian los datos a la Base de Datos
    this.service.addCliente(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshClientsList();
  }

  // Se actualiza la tabla de trabajadores
  refreshClientsList(){
    this.service.getClientesList().subscribe(data=>{
      this.ClientsList = data;
      console.log(data);
    });
  }

  generatePassword(){
    let leng = 8;
    let baseSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?.!@#$&%';

    let password = "";
    for (let x = 0; x < leng; x++) {
      let random = Math.floor(Math.random()*baseSymbols.length);
      password += baseSymbols.charAt(random);      
    }
    return password;
  }

}
