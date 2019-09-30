import { Component, OnInit } from '@angular/core';
import { Leg } from 'src/app/models/Leg';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.svg',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public hovered:string = 'test'
  public legs = (
    [
      'm 105.25147,175.92691 0.43532,9.08716 47.13866,-24.72243 35.94775,14.29892 -36.21502,-21.24793 z',
      'm 104.90329,175.92691 -0.43532,9.08716 -47.138658,-24.72243 -35.947749,14.29892 36.21502,-21.24793 z',
      'm 105.25148,166.83974 -0.1741,9.38785 47.4808,-22.88496 43.03039,24.85606 -43.8322,-37.55136 z',
      'm 104.90328,166.83974 0.1741,9.38785 -47.480797,-22.88496 -43.030394,24.85606 43.832204,-37.55136 z',
      'm 105.26868,155.48591 -0.0172,11.35383 46.50489,-26.19241 49.17759,41.82768 -28.19654,-40.02928 -22.1116,-15.49702 z',
      'm 104.88608,155.48591 0.0172,11.35383 L 58.398393,140.64733 9.2207987,182.47501 37.417339,142.44573 59.528944,126.94871 Z',
      'm 105.07738,143.36676 c 13.28564,-8.72047 29.26515,-20.69178 44.79248,-30.78115 l 36.28572,25.70238 19.27678,50.27083 -32.69494,-46.11309 -22.1116,-15.49702 -45.35714,28.5372 z',
      'm 105.07738,143.36676 C 91.791744,134.64629 75.812233,122.67498 60.284898,112.58561 l -36.285714,25.70238 -19.2767863,50.27083 32.6949413,-46.11309 22.111605,-15.49702 45.357136,28.5372 z',
      'm 105.07738,128.36038 44.79248,-36.185486 55.18453,42.333336 3.77976,62.74404 -22.67857,-58.96428 -36.28572,-25.70238 -44.79248,30.78115 z',
      'M 105.07738,128.36038 60.284898,92.174894 5.1003737,134.50823 1.3206121,197.25227 23.999184,138.28799 60.284898,112.58561 105.07738,143.36676 z',
    ]
    .map(
      (path, idx) => {
        let positions = [
          '1r', '1l', '2l', '2r', '3l', '3r',
          '4l', '4r', '5l', '5r'
        ]
        return new Leg({
          id: `leg-${positions[idx]}`,
          path: path,
          name: 'BLUE',
        })
      }
    )
  )

  public realms = [
    { rune: 'ᛗ', name: 'Miðgarðr', inhabitants: 'Humans' },
    { rune: 'ᚫ', name: 'Ásgarðr', inhabitants: 'Heroes' },
    { rune: 'ᚡ', name: 'Vanaheimr', inhabitants: 'Sages' },
    { rune: 'ᚦ', name: 'Jötunheimr', inhabitants: 'Giants' },
    { rune: 'ᛃ', name: 'Álfheimr', inhabitants: 'Elves' },
    { rune: 'ᛏ', name: 'Hel', inhabitants: 'Corpses' },
    { rune: 'ᛠ', name: 'Svartálfaheimr', inhabitants: 'Dwarves' },
    { rune: 'ᛁ', name: 'Niflheimr', inhabitants: 'Ice' },
    { rune: 'ᛊ', name: 'Múspellsheimr', inhabitants: 'Fire' },
    { rune: '🌳', name: 'Yggdrasil', inhabitants: 'All non-human life' },
    { rune: '🐲', name: 'Níðhöggr', inhabitants: 'Dragon who gnaws at Yggdrasil' },
    { rune: '🐿️', name: 'Ratatoskr', inhabitants: 'Squirrel who lives in Yggdrasil' },
    { rune: '🦅', name: 'Veðrfölnir', inhabitants: 'Hawk sitting on an eagle perched on Yggdrasil' },
  ]

  public teams = (
    [
      'm 104.93564,185.03077 -0.0324,-9.10386 -10.557148,-5.07813 6.96e-4,8.62419 z',
      'm 105.21912,185.03077 0.0324,-9.10386 10.55715,-5.07813 -7e-4,8.62419 z',
      'm 104.90329,175.92691 -10.55715,-5.07813 -0.133634,-10.36144 10.690774,6.3524 z',
      'm 105.25147,175.92691 10.55715,-5.07813 0.13363,-10.36144 -10.69077,6.3524 z',
      'm 104.90328,166.83974 -0.0172,-11.35383 -10.673574,-6.78275 v 11.78418 z',
      'm 105.25148,166.83974 0.0172,-11.35383 10.67357,-6.78275 v 11.78418 z',
      'M 105.07738,143.36676 94.212506,135.9444 v 12.75876 l 10.673574,6.78275 z',
      'm 105.07738,143.36676 10.86487,-7.42236 v 12.75876 l -10.67357,6.78275 z',
      'm 105.07738,128.36038 v 15.00638 L 94.212506,135.9444 v -16.1445 z',
      'm 105.07738,128.36038 v 15.00638 l 10.86487,-7.42236 v -16.1445 z'
    ]
    .map(
      (path, idx) => new Team({
        path: path,
        id: `team-${idx}`,
        name: this.realms[idx].inhabitants,
        icon: {
          data: this.realms[idx].rune,
          x: '45%',
          y: (idx * 8 + 105) + 'px',
        },
      })
    )
  )

  constructor() {}

  ngOnInit() {}

  mouseover(part) {
    this.hovered = part.name
  }

  mouseout(part) {
    this.hovered = ''
  }
}
