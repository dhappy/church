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
          'b', 'r', 'p', 'r'
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
    { rune: 'ᚫ', name: 'Ásgarðr', inhabitants: 'Heroes' },
    { rune: 'ᛏ', name: 'Hel', inhabitants: 'Corpses' },
    { rune: 'ᛊ', name: 'Múspellsheimr', inhabitants: 'Fire' },
    { rune: '🌳', name: 'Yggdrasil', inhabitants: 'Non-Human Life' },
    { rune: '🐲', name: 'Níðhöggr', inhabitants: 'Dragon who gnaws at Yggdrasil' },
    { rune: '🐿️', name: 'Ratatoskr', inhabitants: 'Squirrel who lives in Yggdrasil' },
    { rune: '🦅', name: 'Veðrfölnir', inhabitants: 'Hawk sitting on an eagle perched on Yggdrasil' },
  ]

  public interests = {
    pink: 'peace',
    silver: 'worship',
    cyan: 'war',
    copper: 'shelter',
    gold: 'trade',
    white: 'substances',
    black: 'sustenance',
    green: 'non-represented life',
    orange: 'threat mitigation',
    yellow: 'over-taxed',
  }

  public descriptions = [
    "# Silver (Giants)\n\n## Captain: [Herb Gardner](//fb.me)\n\nAll the teams can issue ids that will open the doors.\n\nThe building above has one primary purpose: to produce the highest quality software in reasonable time.\n\nMuch of that will be high-quality foodstuffs from around the world.\n\nI want for them to have a \"President's Kitchen\" where, they can order up whatever their heart desires &, sometimes with procurement delays, they get it.\n\nThe building will run in terms of sprints. Some developers will get an invitation for some set of sprints in the future. At that point they pick dishes they might like to eat, drugs they might want to take, & people they might want to spend time with.\n\nThe system that coordinates those future needs and the desires of the present occupants is Argus.",
    "# Orange (Humans)\n\nKitchens for the building and a pick-up counter.\n\nThe supply chain for everything is tracked and consumers are able to navigate a breakdown of the costs.\n\nThe software produced by the [DoH](//dhappy.org) is oriented toward ending war, homelessness, & hunger. Part of how this is acheived is through tithes that fill funding pools which can be used to suppliment purchaces.\n\nThe eventual goal is to get the pools filled to the point that hunger and homelessness go away along with the fear of them that looms over all our heads.",
    "# White (Ice)\n\nMatela-based sitting/sleeping room w/ head shop. Door keyed to ids verfied through mail to a voter registration address.\n\nOne of the big issues is how to allow consumption without running afoul of draconian drug laws.\n\nThe concept at this point is to create the interfaces for collaboratively designing the building and livestreaming select sections of it.",
    "# Yellow (Sages)\n\nA venue and bar. Door list uses purple alliance ids.\n\nPrimary concern is entertainment and testing an AI for [shared time](http://dhappy.org/.../calendar/fractal/).",
    "# Cyan (Dwarves)\n\n## Captain: [Will Holcomb](//fb.me/dysbulic)\n\nCoding workspaces and meeting places.\n\nSoftware foci include:\n\n* The toolset to write everything in. There is a huge ecosystem of software being developed in typescript that should be happening in ruby instead.\n\n* Much of the building is a testing-ground for various systems.\n\n+ Silver is responsible for procurement focusing on digitizing the supply chain, particularly with foodstuffs.",
    "# Pink (Elves)\n\n## Captain: [Cricket](//fb.me)\n\nGym.\n\n## Concomitant AI\n\n…",
    "# Copper (Heros)\n\nA brothel.\n\nThe core desires to be pandered to are the artists and coders creating the product.\n\nPeople submit videos to apply for positions.\n\n",
    "# Gold (Corpses)\n\n## Captain: [The PotUS]()\n\nA pharmocopia.\n\nThe US has some system for sourcing drugs for research. That system is used to provision this section.\n\n## Concomitant AI\n\n…",
    "# Black (Fire)\n\n## Captain: [Demitrius Whitfield](//fb.me)\n\nI envision a collection of maybe 20 primary and 100 ancilary open-source projects.\n\nTen of those accumulate ~5 person teams from around the globe who stay in these hotel rooms.\n\nDoors keyed using building ids.\n\nSome rooms are open to reservation online. All transactions are in IOTA.\n\nThis would need to be multiple floors.",
    "# Green (Yggdrasil)\n\n## Captain: Savage Williams\n\nSpace for animals w/ access to greenspace on the roof.",
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
