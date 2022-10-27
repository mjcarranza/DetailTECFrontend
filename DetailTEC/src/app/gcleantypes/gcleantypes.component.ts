import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gcleantypes',
  templateUrl: './gcleantypes.component.html',
  styleUrls: ['./gcleantypes.component.css']
})
export class GcleantypesComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      costo: '',
      precio: '',
      duracion: '',
      productos_usados: '',
      cantidad_personal: '',
      puntuacion: ''
    });
  }

  //Variables
  ClenTypesList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    this.refreshCleanTypesList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addCleanType(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
    this.refreshCleanTypesList();
  }

  // Se actualiza la tabla de trabajadores
  refreshCleanTypesList(){
    this.service.getCleanTypesList().subscribe(data=>{
      this.ClenTypesList = data;
      console.log(data);
    });
  }

}
