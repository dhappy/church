import { DerivedPoint } from './DerivedPoint';

// Point that auto locates to the intersection
// of a line at a right angle to a point

export class CornerPoint extends DerivedPoint {
  constructor(p1, p2, c) {
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

    super([p1, p2, c], x, y)
  }
}