import { Component, OnInit } from '@angular/core';
import { Kitten } from '../common/kitten.model';
import { addKittenToUserList, kittenList, removeKittenFromUserList, userKittenList } from '../common/kittenList';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  kittens: Kitten[] = []
  userKittens: Kitten[] = []

  hover: boolean = false

  constructor() { }

  removeUserKitten(kitten: Kitten){
    removeKittenFromUserList(kitten)
    this.hover = false
  }
  addUserKitten(kitten: Kitten){
    addKittenToUserList(kitten)
    this.hover = false
  }

  ngOnInit(): void {
    this.kittens = kittenList
    this.userKittens = userKittenList
  }

}
