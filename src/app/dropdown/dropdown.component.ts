import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IData } from '../dropdown.modal';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('dropDownlist') dropDownlist: IData[];
  @Output('eventTrigger') eventTrigger = new EventEmitter(null)

  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange() {
    this.eventTrigger.emit(this.selectedValue);
  }

}
