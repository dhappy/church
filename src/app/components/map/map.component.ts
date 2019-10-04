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
  public description:string
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
          'b', 'b', 'p', 'p', 'r', 'p',
          'p', 'r', 'b', 'r'
        ]
        let alInfo = {
          r: {
            name: 'Red Alliance',
            description: "# Red Alliance\n\nMeant to be run by women, and, ultimately to control more than 50% of the land in the world.",
          },
          p: {
            name: 'Purple Alliance',
            description: "# Purple Alliance\n\nMeant to be run by whoever is most fit.\n\nIn the war of the sexes they act as intermediaries.\n\nControl of spaces will often cycle through a red team, then purple, blue, and purple again before repeating.",
          },
          b: {
            name: 'Blue Alliance',
            description: "# Blue Alliance\n\nMeant to be run by men.",
          },
        }
        return new Leg({
          id: `leg-${positions[idx]}`,
          path: path,
          name: alInfo[alliances[idx]].name,
          description: alInfo[alliances[idx]].description,
        })
      }
    )
  )

  public realms = [
    { rune: 'ᚦ', name: 'Jötunheimr', inhabitants: 'Giants' },
    { rune: 'ᛗ', name: 'Miðgarðr', inhabitants: 'Humans' },
    { rune: 'ᛁ', name: 'Niflheimr', inhabitants: 'Ice' },
    { rune: 'ᚡ', name: 'Vanaheimr', inhabitants: 'Sages' },
    { rune: 'ᛠ', name: 'Svartálfaheimr', inhabitants: 'Dwarves' },
    { rune: 'ᛃ', name: 'Álfheimr', inhabitants: 'Elves' },
    { rune: 'ᛊ', name: 'Múspellsheimr', inhabitants: 'Fire' },
    { rune: '🌳', name: 'Yggdrasil', inhabitants: 'Non-Human Life' },
    { rune: 'ᚫ', name: 'Ásgarðr', inhabitants: 'Heroes' },
    { rune: 'ᛏ', name: 'Hel', inhabitants: 'Corpses' },
    { rune: '🐲', name: 'Níðhöggr', inhabitants: 'Dragon who gnaws at Yggdrasil' },
    { rune: '🐿️', name: 'Ratatoskr', inhabitants: 'Squirrel who lives in Yggdrasil' },
    { rune: '🦅', name: 'Veðrfölnir', inhabitants: 'Hawk sitting on an eagle perched on Yggdrasil' },
  ]

  public descriptions = [
    "# Silver (Giants)\n\n## Captain: [Herb Gardner](//fb.me)\n\nFarmers' Market. All the teams can issue ids that will open the doors.",
    "# Orange (Humans)\n\nBodega. Ids are traditional government issued ones.",
    "# White (Ice)\n\nMatela-based sitting/sleeping room w/ head shop. Door keyed to ids verfied through mail to a voter registration address.",
    "# Yellow (Sages)\n\nA venue and bar. Door list uses purple alliance ids.",
    "# Cyan (Dwarves)\n\n## Captain: [Will Holcomb](//fb.me/dysbulic)\n\n20 coding workstations. Each team sends a pair of developers for a two-week sprint.\n\nAll the software is open-source.\n\nSome the functionality is outlined in [my Presidential platform](//github.com/dysbulic/PotUs).",
    "# Pink (Elves)\n\n## Captain: [Cricket](//fb.me)\n\nArt department.",
    "# Black (Fire)\n\n## Captain: [Demitrius Whitfield](//fb.me)\n\nHotel rooms. Doors keyed using building ids.\n\nSome rooms are open to reservation online. All transactions are in IOTA.",
    "# Green (Yggdrasil)\n\n## Captain: Savage Williams\n\nSpace for animals w/ access to greenspace on the roof.",
    "# Gold (Heros)\n\nA brothel and porn production site.",
    "# Copper (Corpses)\n\n## Captain: [The PotUS]()\n\nA pharmocopia.",
  ]

  public teams = (
    [
      {
        path: 'm 0,0 v 9 l 7,4.5 v -9 z',
        width: 7, height: 13.5,
        x: 93, y: 68.5,
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
          description: this.descriptions[idx],
        }
      ))
    )
  )

  constructor() {}

  ngOnInit() {}

  mouseover(part) {
    this.hovered = part.name
    this.description = part.description
  }

  mouseout(part) {
    this.hovered = ''
    this.description = ''
  }
}
