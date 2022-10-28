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
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshAssignationList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "hora_cita": customerData.hora_cita
    };
    // se envian los datos a la Base de Datos
    //this.service.addEmpleado(JSON.stringify(data)); // cambiar esta ///////********* */
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshAssignationList();
  }

  // Se actualiza la tabla de trabajadores
  //// obtener con un query los nombres de los trabajadoress
  refreshAssignationList(){
    this.service.getEmpleadoList().subscribe(data=>{ // solo el nombre con la hora de la cita
      this.AssignationList = data;
      console.log(data);
    });
  }
}
