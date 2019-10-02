import { Point } from './Point'

export class Wall {
  id:string
  points:Point[]

  constructor(base?:any) {
    Object.assign(this, base)
  }

  get path():string {
    return 'm 0,0 l 25,25'
  }
}