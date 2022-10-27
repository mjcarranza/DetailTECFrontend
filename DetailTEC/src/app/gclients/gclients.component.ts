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
      telefono: '',
      cedula: '',
      email: '',
      direcciones: '',
      usuario: ''
    });
  }

  //Variables
  ClientsList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    this.refreshClientsList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let pass = this.generatePassword(); // enviar este password por correo
    customerData.password = pass;
    let cDatos = JSON.stringify(customerData);
    this.service.addCliente(cDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
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
    let lenght = 8;
    let baseSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?.!@#$&%';

    let password = "";
    for (let x = 0; x < length; x++) {
      let random = Math.floor(Math.random()*baseSymbols.length);
      password += baseSymbols.charAt(random);      
    }
    return password;
  }

}
