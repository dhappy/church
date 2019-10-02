export class Point {
  id:string
  x:string
  y:string

  constructor(base?:any) {
    Object.assign(this, base)
  }
}