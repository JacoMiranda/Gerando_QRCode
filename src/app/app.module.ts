import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
import { LerQRcodeComponent } from './ler-qrcode/ler-qrcode.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QrCardComponent } from './qr-card/qr-card.component';
import { QrFormComponent } from './qr-form/qr-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LerQRcodeComponent,
    QrCardComponent,
    QrFormComponent

  ],
  imports: [

  BrowserModule,
    QRCodeModule,
    NgxQRCodeModule,
    NgQrScannerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
