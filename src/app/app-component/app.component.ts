import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

library.add(faTimes, faPlus, faMinus);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Interface';
  theList: object[];

  deleteApt(theApt: object) {
    this.theList = without(this.theList, theApt);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
    });
  }

}
