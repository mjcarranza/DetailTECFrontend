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
      puntuacion: '',
      puntuacion_redime: ''
    });
  }

  //Variables
  ClenTypesList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshCleanTypesList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre_de_lavado": customerData.nombre,
      "costo": customerData.costo,
      "precio": customerData.precio,
      "duracion_estimada" : customerData.duracion,
      "productos_utilizados": customerData.productos_usados,
      "personal_requerido": customerData.cantidad_personal,
      "pOtorga": customerData.puntuacion,
      "pRedimir": customerData.puntuacion_redime
    };
    // se envian los datos a la Base de Datos
    this.service.addCleanType(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
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
