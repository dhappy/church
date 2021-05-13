export class Team {
  id:string
  path:string
  icon:any
  x:number
  y:number
  width:number
  height:number

  constructor(base?:any) {
    Object.assign(this, base)
  }
}