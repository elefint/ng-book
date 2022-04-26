import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  //name: string; // added name property
  @Input() name: string; // added name property

  constructor() {
    this.name = 'Michael'; // set the name
  }

  ngOnInit(): void {
  }

}
