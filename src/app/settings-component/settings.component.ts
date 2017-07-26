import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  bidding: String; 

  demographics = [
    { name:'Male', value:'male', checked: false },
    { name:'Female', value:'female', checked: false },
    { name:'Children', value:'children', checked: false },
    { name:'Infants', value:'infants', checked: false }  
  ];

  constructor() { }

  ngOnInit() {
  }

}
