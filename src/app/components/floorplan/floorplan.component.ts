import { Component, OnInit } from '@angular/core'
import { Wall } from '../../models/Wall'

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.svg',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent implements OnInit {
  public walls:Wall[] = [new Wall()]

  constructor() {}

  ngOnInit() {}
}
