export class Team {
  id:string
  path:string
  icon:any

  constructor(base?:any) {
    Object.assign(this, base)
  }
}