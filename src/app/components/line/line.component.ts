import { Component, OnInit, Input, Host } from '@angular/core'
import { Point } from '../../models/Point'
import { FloorplanComponent } from '../floorplan/floorplan.component'

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.svg',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() p1:Point
  @Input() p2:Point
  public grabbed:boolean = false

  constructor(@Host() public plan:FloorplanComponent) {}

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

    let trans = Point.toCanvas({x: evt.clientX, y: evt.clientY})
    this.ds.x1 = this.p1.x - trans.x
    this.ds.x2 = this.p2.x - trans.x
    this.ds.y1 = this.p1.y - trans.y
    this.ds.y2 = this.p2.y - trans.y
  }

  moveListener(evt) {
    let trans = Point.toCanvas(evt.center)
    this.p1.x = trans.x + this.ds.x1
    this.p1.y = trans.y + this.ds.y1
    this.p2.x = trans.x + this.ds.x2
    this.p2.y = trans.y + this.ds.y2
  }

  releaseListener(evt) {
    this.grabbed = false
  }

  dblclick(evt) {
    let breakpoint = Point.toCanvas(
      { x: evt.clientX, y: evt.clientY }
    )
    this.plan.break(this.p1, this.p2, breakpoint)
  }

  private _guid:string

  get guid() {
    if(this._guid === undefined) {
      this._guid = (new Date()).toISOString()
    }
    return this._guid
  }
}
