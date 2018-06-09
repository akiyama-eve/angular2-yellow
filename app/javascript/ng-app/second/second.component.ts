import { Component } from '@angular/core';
import templateString from './second.html';
import { MyDataService } from '../my_data/my_data.service';
import { MyData } from '../my_data/my_data';

@Component({
  template: templateString,
  providers: [ MyDataService ]
})
export class SecondComponent {
  private myDatas: any;
  private attrs: any
  private newMyData: MyData;
  private createLabel;

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
    this.getAll();
    this.newMyData = new MyData();
    this.createLabel = "Create";
  }

  getAll() {
    this.myDataService.all().subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }

  update(id, string_test, integer_test, boolean_test) {
    this.attrs = {
      string_test: string_test,
      integer_test: integer_test,
      boolean_test: boolean_test
    }
    this.myDataService.update(id, this.attrs).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }

  create(newMyData) {
    console.log(newMyData.getCreateParam())
    this.myDataService.create(newMyData.getCreateParam()).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
      this.newMyData = new MyData();
    }, e => {
      console.log(e);
    })
  }

}
