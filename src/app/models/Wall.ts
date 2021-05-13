import { Point } from './Point'
import { DerivedPoint } from './DerivedPoint'
import { CornerPoint } from './CornerPoint'

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

  // On the side nearest the click point
  corner(p1, p2, clickAt) {
    let m = (p2.y - p1.y) / (p2.x - p1.x)
    let nearest = clickAt.nearest(p1, p2)
    let step = m

    if(Math.abs(step) === Infinity) {
      step = p2.y - p1.y
    }
    if(step === 0) {
      step = p2.x - p1.x
    }
    let factor = step / Math.abs(step)

    if(nearest == p2) {
      factor *= -1
    }

    console.info('S', m, step, factor, factor * Wall.width)

    let g1 = Point.at(m, nearest, factor * Wall.width)
    let g2 = new CornerPoint(p1, p2, g1)

    console.info('Gs', g1, g2)

    const idx = this.points.indexOf(p1)
    let ins = [g1, g2]
    let insP = idx + 1

    this.points = (
      this.points.slice(0, insP)
      .concat(ins)
      .concat(this.points.slice(insP))
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

    let g1 = new CornerPoint(p1, p2, c1)
    let g2 = new CornerPoint(p1, p2, c2)

    const idx = this.points.indexOf(p2)
    this.points = (
      this.points.slice(0, idx)
      .concat([g1, c1, c2, g2])
      .concat(this.points.slice(idx))
    )
  }
}