import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = 'nacy'
  age = 5

  onageChange(age: number) {
    this.age = age
  }

  constructor() { }

  ngOnInit(): void {
  }
}
