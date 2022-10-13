import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GworkersComponent } from './gworkers/gworkers.component';
import { GclientsComponent } from './gclients/gclients.component';
import { GsucursalesComponent } from './gsucursales/gsucursales.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GprovidersComponent } from './gproviders/gproviders.component';
import { GproductsComponent } from './gproducts/gproducts.component';
import { GcleantypesComponent } from './gcleantypes/gcleantypes.component';
import { RegcitasComponent } from './regcitas/regcitas.component';
import { AsignpersonalComponent } from './asignpersonal/asignpersonal.component';
import { BillingComponent } from './billing/billing.component';
import { PdfreportsComponent } from './pdfreports/pdfreports.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    GworkersComponent,
    GclientsComponent,
    GsucursalesComponent,
    PageNotFoundComponent,
    GprovidersComponent,
    GproductsComponent,
    GcleantypesComponent,
    RegcitasComponent,
    AsignpersonalComponent,
    BillingComponent,
    PdfreportsComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      /**rutas para mostrar los diferentes componentes de la aplicacion */
      {path: 'sucursales', component: GsucursalesComponent},
      {path: 'workers', component: GworkersComponent},
      {path: 'clients', component: GclientsComponent},
      {path: 'providers', component: GprovidersComponent},
      {path: 'products', component: GproductsComponent},
      {path: 'cleantypes', component: GcleantypesComponent},
      {path: 'citas', component: RegcitasComponent},
      {path: 'apersonal', component: AsignpersonalComponent},
      {path: 'billing', component: BillingComponent},
      {path: 'reports', component: PdfreportsComponent},

      /**rutas para redireccion a la pagina principal o a la pagina 404 de error */
      {path: '', redirectTo: '/sucursales', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
