import { Point } from './Point'
import { DerivedPoint } from './DerivedPoint'

export class Wall {
  id:string
  points:Point[]

  constructor(base?:any) {
    Object.assign(this, base)

    this.points = [new Point({x: 20, y: 20})]

    this.points.push(new DerivedPoint(
      this.points[this.points.length - 1],
      x => x + 25
    ))
    this.points.push(new DerivedPoint(
      this.points[this.points.length - 1],
      undefined,
      y => y + 25
    ))
    this.points.push(new DerivedPoint(
      this.points[this.points.length - 1],
      x => x - 25
    ))
  }

  get path():string {
    let path = 'M'
    this.points.forEach(point => {
      path += ` ${point.x},${point.y}`
    })
    return `${path} z`
  }
}