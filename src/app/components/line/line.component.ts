import { Component, OnInit, Input, Host } from '@angular/core'
import { Point } from '../../models/Point'
import { FloorplanComponent } from '../floorplan/floorplan.component'
import { Wall } from 'src/app/models/Wall'

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.svg',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() p1:Point
  @Input() p2:Point
  @Input() parent:any
  public grabbed:boolean = false

  constructor() {}

  ngOnInit() {}

  get length() {
    let ssqr = Math.sqrt(
      Math.pow(this.p1.x - this.p2.x, 2)
      + Math.pow(this.p1.x - this.p2.x, 2)
    )
    return Math.round(ssqr * 100) / 100 + 'm'
  }

  private ds:any = {}

  grabListener(evt) {
    this.grabbed = true

    let trans = Point.toCanvas(new Point(
      { x: evt.clientX, y: evt.clientY }
    ))
    this.ds.x1 = this.p1.x - trans.x
    this.ds.x2 = this.p2.x - trans.x
    this.ds.y1 = this.p1.y - trans.y
    this.ds.y2 = this.p2.y - trans.y
  }

  moveListener(evt) {
    if(this.grabbed) {
      let trans = Point.toCanvas(
        evt.center
        ? evt.center
        : { x: evt.clientX, y: evt.clientY }
      )
      this.p1.x = trans.x + this.ds.x1
      this.p1.y = trans.y + this.ds.y1
      this.p2.x = trans.x + this.ds.x2
      this.p2.y = trans.y + this.ds.y2
    }
  }

  releaseListener(evt) {
    this.grabbed = false
  }

  private breakwidth = 7

  dblclick(evt) {
    let breakpoint = Point.toCanvas(new Point(
      { x: evt.clientX, y: evt.clientY }
    ))
    if(
      Math.max(
        this.p1.distanceTo(breakpoint),
        this.p1.distanceTo(breakpoint)
      ) <= 3 * Wall.width / 4
    ) {
      this.parent.corner(this.p1, this.p2, breakpoint)
    } else {
      this.parent.extrude(this.p1, this.p2, breakpoint)
    }
  }

  private _guid:string

  get guid() {
    if(this._guid === undefined) {
      this._guid = (new Date()).toISOString()
    }
    return this._guid
  }
}
