import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.css']
})
export class ListTitlesComponent implements OnInit{

  @Input() title!: any;
  @Input() list: any[]=[];

  constructor() { }

  ngOnInit() {
  }
}
