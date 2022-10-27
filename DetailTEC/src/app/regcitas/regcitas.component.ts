import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-regcitas',
  templateUrl: './regcitas.component.html',
  styleUrls: ['./regcitas.component.css']
})
export class RegcitasComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      id: '',
      placa: '',
      sucursal: '',
      tipo_lavado: '',
      hora: ''
    });
  }

  //Variables
  CitaList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    this.refreshCitaList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addCita(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
    this.refreshCitaList();
  }

  // Se actualiza la tabla de trabajadores
  refreshCitaList(){
    this.service.getCitaList().subscribe(data=>{
      this.CitaList = data;
      console.log(data);
    });
  }
  
}
