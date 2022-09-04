import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadJsonService } from '../services/read-json.service';
import * as lodash from 'lodash';
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  name: any;
  all_data: any;
  data: any;
  tool: any;
  filtredData: any;

  constructor(private route: ActivatedRoute, private router: Router, private json: ReadJsonService) {
    this.data = this.json.getGroup()

    this.all_data = this.router.getCurrentNavigation()?.extras.state;
    console.log('name', this.data);



  }


  ngOnInit(): void {
    this.filtredData = lodash.intersection(this.data.filter(d => this.all_data.name.indexOf(d.name) > -1).map(d => d), this.data.filter(d => this.all_data.name.indexOf(d.name) > -1).map(d => d));

    console.log("tool object", this.filtredData);





  }

}
