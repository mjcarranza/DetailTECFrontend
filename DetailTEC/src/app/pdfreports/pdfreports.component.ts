import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfreports',
  templateUrl: './pdfreports.component.html',
  styleUrls: ['./pdfreports.component.css'] 
})
export class PdfreportsComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      id_cliente: '',
    });
  }
  clientList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
  }

  // Generacion de reporte de planilla
  reportePlanillaPDF(){
    // HACER QUERYS CORRESPONDIENTES
    const pdfDefinition: any = {
      content: [ //                                      sangria, top, na, buttom
        { text: 'Reporte de Planilla',fontSize: 20, bold: true, margin: [0, 0, 0, 20], style: 'header' },
        {
          style: 'tableExample', color: '#444',
          table: {
            body: [
              [{ text: 'Nombre',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Primer Apellido',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Segundo Apellido',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Tipo de Pago',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Tipo de Lavado',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Cantidad de Lavados',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Costo',fontSize: 14,bold: true, alignment: 'center' }, 
              { text: 'Monto Total',fontSize: 14,bold: true, alignment: 'center' }],

              [{text:'Mario',alignment:'center'}, 
              {text:'Carranza',alignment:'center'}, 
              {text:'Castillo',alignment:'center'}, 
              {text:'Semanal',alignment:'center'}, 
              {text:'Pulido y encerado',alignment:'center'}, 
              {text:'2',alignment:'center'},
              {text:'200',alignment:'center'}, 
              {text:'500',alignment:'center'}],

              [{text:'Mario',alignment:'center'}, 
              {text:'Carranza',alignment:'center'}, 
              {text:'Castillo',alignment:'center'}, 
              {text:'Semanal',alignment:'center'}, 
              {text:'Pulido y encerado',alignment:'center'}, 
              {text:'2',alignment:'center'},
              {text:'200',alignment:'center'}, 
              {text:'500',alignment:'center'}],
            ]
          }
        },
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  // Generacion de tipos de lavado por cliente
  tiposDeLavadoPDF(customerData:any){
    let wDatos = JSON.stringify(customerData);
    this.checkoutForm.reset();
    console.log(wDatos);
    // HACER QUERYS CORRESPONDIENTES
    this.getInfoCliente(); // de la lista de clientes que devuelve, comparar cual tiene cedula igual a wDatos
    const pdfDefinition: any = {
      content: [
        {
          text: 'REPORTE DE TIPOS DE LAVADO POR CLIENTE',
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  // Generacion de reporte de puntos
  puntosPDF(){
    // HACER QUERYS CORRESPONDIENTES
    const pdfDefinition: any = {
      content: [
        {
          text: 'REPORTE DE PUNTOS',
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  getInfoCliente(){
    this.service.getClientesList().subscribe(data=>{
      this.clientList = data;
      console.log(data);
    });
  }
}
