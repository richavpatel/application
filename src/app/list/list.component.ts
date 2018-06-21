import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists = [];

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getusers().subscribe((myservice: any[]) => {
      console.log(myservice);
      this.lists = myservice;

    });
  }

}
