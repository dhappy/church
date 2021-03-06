import { Component, OnInit, Input } from '@angular/core'
import { Team } from '../../models/Team'

@Component({
  selector: '[app-team]',
  templateUrl: './team.component.svg',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team:Team
  public hovered:boolean = false
  public held:boolean = false

  constructor() {}

  ngOnInit() {}
}