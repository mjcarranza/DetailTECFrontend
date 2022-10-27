import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-asignpersonal',
  templateUrl: './asignpersonal.component.html',
  styleUrls: ['./asignpersonal.component.css']
})
export class AsignpersonalComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      hora_cita: ''
    });
  }

  //Variables
  AssignationList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    this.refreshAssignationList();
  }

  onSubmit(customerData:any) {
    // Process checkout data here
    let wDatos = JSON.stringify(customerData);
    this.service.addProvider(wDatos);
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);
    this.refreshAssignationList();
  }

  // Se actualiza la tabla de trabajadores
  //// obtener con un query los nombres de los trabajadoress
  refreshAssignationList(){
    this.service.getProviderList().subscribe(data=>{
      this.AssignationList = data;
      console.log(data);
    });
  }
}
