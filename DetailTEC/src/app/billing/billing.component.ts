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
    // Process checkout data here
    let datos = JSON.stringify(customerData);
    this.service.addProvider(datos); // generar factura
    this.checkoutForm.reset();
  
    console.warn('Your order has been submitted', customerData);

    this.GeneraFacturaPDF();
  }

  // Generacion de reporte de planilla
  GeneraFacturaPDF(){
    // HACER QUERYS CORRESPONDIENTES
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
