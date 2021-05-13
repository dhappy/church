import { Component, OnInit, Input } from '@angular/core';
import { Leg } from '../../models/Leg';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: '[app-leg]',
  templateUrl: './leg.component.svg',
  styleUrls: ['./leg.component.scss']
})
export class LegComponent implements OnInit {
  @Input() leg:Leg

  constructor() {}

  ngOnInit() {}

  typeof(obj) {
    if(typeof(obj) === 'object') {
      return obj.constructor.name.toLowerCase()
    } else {
      return typeof obj
    }
  }
}
