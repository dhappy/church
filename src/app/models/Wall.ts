import { Point } from './Point'
import { DerivedPoint } from './DerivedPoint'

export class Wall {
  id:string
  points:Point[]

  constructor(base?:any) {
    Object.assign(this, base)

    this.points = [
      new Point({x: 75, y: 15}),
      new Point({x: 135, y: 15}),
      new Point({x: 135, y: 55}),
      new Point({x: 75, y: 55}),
    ]
  }

  get path():string {
    let path = 'M'
    path += (
      this.points
      .map(point => `${point.x},${point.y}`)
      .join(' ')
    )
    return `${path} z`
  }

  public static width = 7

  corner(p1, p2, breakpoint?) {
    let m = (p2.y - p1.y) / (p2.x - p1.x)
    let inm = -1 / m

    let g1 = Point.at(inm, p2, Wall.width)
    let g2 = Point.at(m, g1, 0)

    const idx = this.points.indexOf(p1)
    this.points = (
      this.points.slice(0, idx + 1)
      .concat([g1, g2])
      .concat(this.points.slice(idx + 1))
    )
  }

  // Add points neccesary for an adjoining wall
  extrude(p1, p2, breakpoint) {
    // pick a new center through the breakpoint
    let m = (p2.y - p1.y) / (p2.x - p1.x)
    let c1 = Point.at(m, breakpoint, -Wall.width / 2)
    let c2 = Point.at(m, breakpoint, Wall.width / 2)

    if(c1.distanceTo(p1) > c2.distanceTo(p1)) {
      [c1, c2] = [c2, c1]
    }

    let x = (p1, p2, c) => {
      let m = (p2.y - p1.y) / (p2.x - p1.x)
      let minv = -1 / m
      let b1 = p1.y - m * p1.x
      let b2 = c.y - minv * c.x
      
      if(m === 0) {
        return c.x
      } else if(m === Infinity) {
        return p1.x
      } else {
        return (b2 - b1) / (m - minv)
      }
    }

    let y = (p1, p2, c) => {
      let m = (p2.y - p1.y) / (p2.x - p1.x)
      let b = p1.y - m * p1.x
      if(m === Infinity) {
        return c.y
      } else if(m === 0) {
        return p1.y
      } else {
        return m * x(p1, p2, c) + b
      }
    }

    let g1 = new DerivedPoint(
      [p1, p2, c1], x, y
    )

    let g2 = new DerivedPoint(
      [p1, p2, c2], x, y
    )

    const idx = this.points.indexOf(p1)
    this.points = (
      this.points.slice(0, idx + 1)
      .concat([g1, c1, c2, g2])
      .concat(this.points.slice(idx + 1))
    )
  }
}