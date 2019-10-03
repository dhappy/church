import { Component, OnInit } from '@angular/core'
import { Wall } from '../../models/Wall'
import { Point } from '../../models/Point'

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.svg',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent implements OnInit {
  public walls:Wall[] = [new Wall()]

  constructor() {}

  ngOnInit() {}

  public movePoint(evt, point) {
    let trans = this.translatePoint(evt.center)
    point.x = trans.x
    point.y = trans.y
  }
}
