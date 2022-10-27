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
    this.refreshSucList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addSucursal(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
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
