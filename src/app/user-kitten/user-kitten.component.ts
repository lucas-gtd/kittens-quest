import { Component, OnInit } from '@angular/core';
import { Kitten } from '../common/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
