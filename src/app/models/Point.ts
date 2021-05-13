export class Point {
  id?:string
  x:number
  y:number

  constructor(base?:any) {
    Object.assign(this, base)
  }

  static toCanvas(point:Point):Point {
    let svg = <SVGSVGElement><unknown>document.getElementById('canvas')
    let pt = svg.createSVGPoint()

    pt.x = point.x
    pt.y = point.y
    pt = pt.matrixTransform(svg.getScreenCTM().inverse())

    return new Point({x: pt.x, y: pt.y })
  }

  public toString():string {
    return `${this.x},${this.y}`
  }

  public distanceTo?(p:Point) {
    return Math.sqrt(
      Math.pow(p.x - this.x, 2)
      + Math.pow(p.y - this.y, 2)
    )
  }

  public nearest?() {
    let sDist = Infinity
    let nearest = null
    for(let i = 0; i < arguments.length; i++) {
      let dist = this.distanceTo(arguments[i])
      if(dist < sDist) {
        sDist = dist
        nearest = arguments[i]
      }
    }
    return nearest
  }

  // https://www.geeksforgeeks.org/find-points-at-a-given-distance-on-a-line-of-given-slope/
  public static at(
    m:number, through:Point, distance:number
  ):Point {
    const inm = Math.sqrt(1 / (1 + m * m))

    return new Point({
      x: through.x + distance * inm,
      y: (
        through.y + distance
        * (Math.abs(m) === Infinity ? 1 : inm * m)
      ),
    })
  }
}