export class Point {
  id?:string
  x:number
  y:number

  constructor(base?:any) {
    Object.assign(this, base)
  }

  static toCanvas(point:Point):Point {
    let svg = <SVGSVGElement><unknown>document.getElementById('canvas')
    let pt = svg.createSVGPoint();

    pt.x = point.x
    pt.y = point.y

    return pt.matrixTransform(svg.getScreenCTM().inverse())
  }
}