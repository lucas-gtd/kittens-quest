import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../common/kitten.model';
import { addKittenToList } from '../common/kittenList';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  newKitten: Kitten = new Kitten('', '', '', '');

  onSubmit(){
    addKittenToList(this.newKitten)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
