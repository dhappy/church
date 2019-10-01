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
      'm 100,73  0,  9  40,-25  36,14 -36,-23 z',
      'm 100,73  0,  9 -40,-25 -36,14  36,-23 z',
      'm 100,64  0,  9  40,-25  43,28 -43,-37 z',
      'm 100,64  0,  9 -40,-25 -43,28  43,-37 z',
      'm 100,53  0, 11  40,-25  50,43 -50,-54 z',
      'm 100,53  0, 11 -40,-25 -50,43  50,-54 z',
      'm 100,40  0, 13  40,-25  52,56 -52,-69 z',
      'm 100,40  0, 13 -40,-25 -52,56  52,-69 z',
      'm 100,25  0, 15  40,-25  56,74 -55,-89 z',
      'm 100,25  0, 15 -40,-25 -56,74  55,-89 z',
    ]
    .map(
      (path, idx) => {
        let positions = [
          '1r', '1l', '2l', '2r', '3l', '3r',
          '4l', '4r', '5l', '5r'
        ]
        let alliances = [
          'Blue', 'Blue', 'Purple', 'Purple', 'Red'
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
    { rune: 'ᚦ', name: 'Jötunheimr', inhabitants: 'Giants' },
    { rune: 'ᛗ', name: 'Miðgarðr', inhabitants: 'Humans' },
    { rune: '🌳', name: 'Yggdrasil', inhabitants: 'All non-human life' },
    { rune: 'ᚡ', name: 'Vanaheimr', inhabitants: 'Sages' },
    { rune: 'ᛠ', name: 'Svartálfaheimr', inhabitants: 'Dwarves' },
    { rune: 'ᛃ', name: 'Álfheimr', inhabitants: 'Elves' },
    { rune: 'ᛊ', name: 'Múspellsheimr', inhabitants: 'Fire' },
    { rune: 'ᛁ', name: 'Niflheimr', inhabitants: 'Ice' },
    { rune: 'ᚫ', name: 'Ásgarðr', inhabitants: 'Heroes' },
    { rune: 'ᛏ', name: 'Hel', inhabitants: 'Corpses' },
    { rune: '🐲', name: 'Níðhöggr', inhabitants: 'Dragon who gnaws at Yggdrasil' },
    { rune: '🐿️', name: 'Ratatoskr', inhabitants: 'Squirrel who lives in Yggdrasil' },
    { rune: '🦅', name: 'Veðrfölnir', inhabitants: 'Hawk sitting on an eagle perched on Yggdrasil' },
  ]

  public teams = (
    [
      {
        path: 'm 0,0 v 9 l 7,4.5 v -9 z',
        width: 7, height: 13.5,
        x: 93, y: 68.5
      },
      {
        path: 'm 0,4.5 v 9 l 7,-4.5 v -9 z',
        width: 7, height: 13.5,
        x: 100, y: 68.5
      },
      {
        path: 'm 0,0 v 9 l 7,4.5 v -9 z',
        width: 7, height: 13.5,
        x: 93, y: 59.5
      },
      {
        path: 'm 0,4.5 v 9 l 7,-4.5 v -9 z',
        width: 7, height: 13.5,
        x: 100, y: 59.5
      },
      {
        path: 'm 0,0 v 11 l 7,4.5 v -11 z',
        width: 7, height: 15.5,
        x: 93, y: 48.5
      },
      {
        path: 'm 0,4.5 v 11 l 7,-4.5 v -11 z',
        width: 7, height: 15.5,
        x: 100, y: 48.5
      },
      {
        path: 'm 0,0 v 13 l 7,4.5 v -13 z',
        width: 7, height: 17.5,
        x: 93, y: 35.5
      },
      {
        path: 'm 0,4.5 v 13 l 7,-4.5 v -13 z',
        width: 7, height: 17.5,
        x: 100, y: 35.5
      },
      {
        path: 'm 0,0 v 15 l 7,4.5 v -15 z',
        width: 7, height: 19.5,
        x: 93, y: 20.5
      },
      {
        path: 'm 0,4.5 v 15 l 7,-4.5 v -15 z',
        width: 7, height: 19.5,
        x: 100, y: 20.5
      },
    ]
    .map(
      (obj, idx) => new Team(Object.assign(
        obj,
        {
          id: `team-${idx}`,
          name: this.realms[idx].inhabitants,
          icon: this.realms[idx].rune,
        }
      ))
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
