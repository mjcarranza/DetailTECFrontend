import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      id_cliente: '',
      cantidad_bebidas: '',
      cantidad_snacks: '',
      metodo_pago: ''
    });
  }

  //Variables
  BillingList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
  }

  onSubmit(customerData:any) {
    let data = {
      "id_cliente": customerData.id_cliente,
      "cantidad_bebidas": customerData.cantidad_bebidas,
      "cantidad_snacks": customerData.cantidad_snacks,
      "metodo_pago" : customerData.metodo_pago
    };
    //let datos = JSON.stringify(data);
    //this.service.addProvider(datos); // generar factura
    this.checkoutForm.reset();
    this.GeneraFacturaPDF(data);
  }

  // Generacion de reporte de planilla
  GeneraFacturaPDF(data:any){
    // HACER QUERYS CORRESPONDIENTES
    /** llamar al metodo para obtener los datos necesarios para la factura */
    const pdfDefinition: any = {
      content: [
        {
          text: 'REPORTE DE PLANILLA',
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
