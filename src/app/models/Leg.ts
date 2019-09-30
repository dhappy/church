export class Leg {
  id:string
  path:string

  constructor(base?:any) {
    Object.assign(this, base)
  }
}