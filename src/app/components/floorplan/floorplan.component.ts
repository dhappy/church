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

  private ds:any = {}

  public grabLine(evt, p1, p2) {
    let trans = this.translatePoint(evt.center)
    this.ds.x1 = p1.x - trans.x
    this.ds.x2 = p2.x - trans.x
    this.ds.y1 = p1.y - trans.y
    this.ds.y2 = p2.y - trans.y
  }

  public moveLine(evt, p1, p2) {
    let trans = this.translatePoint(evt.center)
    p1.x = trans.x + this.ds.x1
    p1.y = trans.y + this.ds.y1
    p2.x = trans.x + this.ds.x2
    p2.y = trans.y + this.ds.y2
  }

  translatePoint(point:Point):Point {
    let svg = document.getElementById('canvas')
    var pt = svg.createSVGPoint();

    pt.x = point.x
    pt.y = point.y

    return pt.matrixTransform(svg.getScreenCTM().inverse())
  }
}
