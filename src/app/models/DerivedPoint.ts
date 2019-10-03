import { Point } from './Point'

export class DerivedPoint {
  id:string
  from:Point
  fx:(x:number) => number
  fy:(y:number) => number

  constructor(from:Point, fx?, fy?) {
    this.from = from
    this.fx = fx
    this.fy = fy
  }

  get x() {
    if(this.fx) {
      return this.fx(this.from.x)
    } else {
      return this.from.x
    }
  }

  get y() {
    if(this.fy) {
      return this.fy(this.from.y)
    } else {
      return this.from.y
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
}