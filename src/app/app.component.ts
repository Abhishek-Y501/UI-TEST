import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { IData } from './dropdown.modal';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Test';
  public isResponseGet: boolean = false;
  public customers: IData[];
  public territories: IData[];
  public cSelectedValue: { id: Number, name: String } = { id: 0, name: null };
  public tSelectedValue: { id: Number, name: String } = { id: 0, name: null };

  constructor(private appService: AppService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.appService.getCustomers().subscribe(
      (response: any) => {
        this[response.responseMethod](response);
      },
      (err: HttpErrorResponse) => {
        this.isResponseGet = false;
        console.log(err);
      }
    )
  }

  private GetCustomers_success(response: any) {
    this.customers = response.data[0].list;

    this.appService.getTerritories().subscribe(
      (response: any) => {
        this[response.responseMethod](response);
      },
      (err: HttpErrorResponse) => {
        this.isResponseGet = false;
        console.log(err);
      }
    )
  }

  private GetTerritories_success(response: any) {
    this.territories = response.data[0].list;
    this.isResponseGet = true;
    this.toast.success(response.responseBodyText, response.responseHeaderText);
  }

  public onCustomerDropdownValueChange(value: { id: Number, name: String }) {
    this.cSelectedValue = value;
  }

  public onTerritoriesDropdownValueChange(value: { id: Number, name: String }) {
    this.tSelectedValue = value;
  }

  ngOnDestroy(): void {
    this.isResponseGet = false;
  }

}
