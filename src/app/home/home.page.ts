import { DataService } from './../shared/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isSearch: boolean = false;
  data: any[] = [];
  search: string;
  filterFinally: any[] = [];
  constructor(private dataService: DataService) {
    // this.getData();
  }

  searchOpen() {
    this.isSearch = true;
  }

  getData() {
    this.data = this.dataService.dataList;
  }

  filterData() {
  let lowCaseData = this.search.toLocaleLowerCase();

  // console.log(lowCaseData)
  return lowCaseData

  }

  simpleFilter() {
    this.getData();
    let resultFilter = this.filterData();

    this.filterFinally = this.data.filter(doc => doc.title.toLocaleLowerCase() == resultFilter);
  }


  detailFilter() {
    this.getData();
    let inputFilter = this.filterData();

    this.filterFinally = this.data.filter(doc => doc.title.toLocaleLowerCase() == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,1) == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,2) == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,3) == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,4) == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,5) == inputFilter ||
                                                 doc.title.toLocaleLowerCase().substr(0,6) == inputFilter);
  }


  searchClose() {
    this.isSearch = false;
    this.search = "";
    this.filterFinally = [];
  }

}
