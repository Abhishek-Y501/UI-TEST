import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule
} from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "blue",
  "bgsOpacity": 0.5,
  "bgsPosition": "center-center",
  "bgsSize": 60,
  "bgsType": "circle",
  "blur": 5,
  "delay": 0,
  //"fastFadeOut": true,
  "fgsColor": "blue",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "circle",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "blue",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ timeOut: 5000 }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    //NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
