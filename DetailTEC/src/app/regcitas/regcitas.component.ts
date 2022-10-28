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
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshCitaList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "placa": customerData.placa,
      "cliente_cedula": customerData.id,
      "sucursal": customerData.sucursal,
      "lavado_solicitado" : customerData.tipo_lavado,
      "hora" : customerData.hora
    };
    // se envian los datos a la Base de Datos
    this.service.addCita(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
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
