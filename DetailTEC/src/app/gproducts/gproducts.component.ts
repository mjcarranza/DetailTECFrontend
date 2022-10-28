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
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshProductsList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "marca": customerData.marca,
      "costo": customerData.costo,
      "proveedor" : customerData.proveedor
    };
    // se envian los datos a la Base de Datos
    this.service.addProducto(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
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
