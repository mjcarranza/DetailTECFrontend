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
    this.refreshProvidersList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addProvider(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
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
