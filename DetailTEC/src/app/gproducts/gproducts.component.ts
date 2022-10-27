import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gproducts',
  templateUrl: './gproducts.component.html',
  styleUrls: ['./gproducts.component.css']
})
export class GproductsComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      marca: '',
      costo: '',
      cedula_proveedor: ''
    });
  }

  //Variables
  ProductsList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    this.refreshProductsList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addProducto(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
    this.refreshProductsList();
  }

  // Se actualiza la tabla de trabajadores
  refreshProductsList(){
    this.service.getProductosList().subscribe(data=>{
      this.ProductsList = data;
      console.log(data);
    });
  }
}
