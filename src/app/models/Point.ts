export class Point {
  id?:string
  x:number
  y:number

  constructor(base?:any) {
    Object.assign(this, base)
  }
}