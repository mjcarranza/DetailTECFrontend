import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gproviders',
  templateUrl: './gproviders.component.html',
  styleUrls: ['./gproviders.component.css']
})
export class GprovidersComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      cedula: '',
      provincia: '',
      canton: '',
      distrito: '',
      email: '',
      telefono: ''
    });
  }

  //Variables
  ProvidersList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshProvidersList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "cedula": customerData.cedula,
      "provincia": customerData.provincia,
      "canton" : customerData.canton,
      "distrito": customerData.distrito,
      "correo": customerData.email,
      "telefono": customerData.telefono
    };
    // se envian los datos a la Base de Datos
    this.service.addProvider(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshProvidersList();
  }

  // Se actualiza la tabla de trabajadores
  refreshProvidersList(){
    this.service.getProviderList().subscribe(data=>{
      this.ProvidersList = data;
      console.log(data);
    });
  }

}
