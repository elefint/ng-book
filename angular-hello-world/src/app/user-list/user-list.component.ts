import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // Array of strings. An array is notated by the [] after the type

  constructor() {
    this.names = ['Ari', 'Carlos', 'Michael', 'Nate'];
  }

  ngOnInit(): void {
  }

}
