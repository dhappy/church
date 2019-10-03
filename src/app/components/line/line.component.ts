import { Component, OnInit, Input } from '@angular/core'
import { Point } from 'src/app/models/Point'

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.svg',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() p1:Point
  @Input() p2:Point
  public grabbed:boolean = false

  constructor() {}

  ngOnInit() {}

  private ds:any = {}

  grabListener(evt) {
    this.grabbed = true

    let trans = this.translatePoint({x: evt.clientX, y: evt.clientY})
    this.ds.x1 = this.p1.x - trans.x
    this.ds.x2 = this.p2.x - trans.x
    this.ds.y1 = this.p1.y - trans.y
    this.ds.y2 = this.p2.y - trans.y
  }

  moveListener(evt) {
    let trans = this.translatePoint(evt.center)
    this.p1.x = trans.x + this.ds.x1
    this.p1.y = trans.y + this.ds.y1
    this.p2.x = trans.x + this.ds.x2
    this.p2.y = trans.y + this.ds.y2
  }

  releaseListener(evt) {
    this.grabbed = false
  }

  translatePoint(point:Point):Point {
    let svg = <SVGSVGElement><unknown>document.getElementById('canvas')
    var pt = svg.createSVGPoint();

    pt.x = point.x
    pt.y = point.y

    return pt.matrixTransform(svg.getScreenCTM().inverse())
  }
}
