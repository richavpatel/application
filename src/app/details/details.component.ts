import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 id: number;
  name: string;
  newDetail: any;

 details = [
  {
  id: 1,
  name: 'BMW'},
{
  id: 2,
  name: 'Tata'
},
{
  id: 3,
  name: 'honda'},
  {
    id: 4,
    name: 'hundai'},
];

 ngOnInit()  {
 }
  }

