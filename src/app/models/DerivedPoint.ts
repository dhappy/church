import { Point } from './Point'

export class DerivedPoint {
  id:string
  from:Point[]
  fx:(x?:number) => number
  fy:(y?:number) => number

  constructor(from?:Point[], fx?, fy?) {
    this.from = from
    this.fx = fx
    this.fy = fy
  }

  get x() {
    if(!this.from) {
      return this.fx.call(this)
    } else if(this.fx) {
      return this.fx.apply(this, this.from)
    } else {
      return this.from[0].x
    }
  }

  get y() {
    if(!this.from) {
      return this.fy.call(this)
    } else if(this.fy) {
      return this.fy.apply(this, this.from)
    } else {
      return this.from[0].y
    }
  }

  set x(x) {
    this.fx = () => x
  }

  set y(y) {
    this.fy = () => y
  }

  public toString():string {
    return `${this.x},${this.y}`
  }

  public distanceTo(p:Point) {
    return Math.sqrt(
      Math.pow(p.x - this.x, 2)
      + Math.pow(p.y - this.y, 2)
    )
  }
}