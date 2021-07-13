import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars = [
    {
      name: "VW",
      model: "Golf",
      color: "blue"
    },
    {
      name: "Tesla",
      model: "S",
      color: "white"
    },
    {
      name: "BMW",
      model: "x5",
      color: "black"
    },
    {
      name: "Nissan",
      model: "Skyline",
      color: "orange"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
