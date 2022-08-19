import { tabLayout } from "../player/tab/tab.component"

export interface Tab {
  instrument: { name: string, strings: number }
  bars: Bar[],
  initialTempo: number,
  initialKey: number,
  mode: number,
  tuning?: string
}

export interface Bar {
  segments: Segment[],
  tempo: number,
  timeSignature: {
    numerator: number,
    denominator: number
  }
}

export class Segment {
  constructor(
    public isRest: boolean,
    public durationInverse: number,
    public notes?: Note[]
  ) { }

  get separationSpace() {
    let barInnerWidth = tabLayout.initialBarInnerWidth
    let separationPx = barInnerWidth / this.durationInverse

    return separationPx
  }
}

export interface Note {
  fretValue: number,
  string: number
  effects?: {}
}

export let exampleSong: Tab = {
  instrument: { name: "guitar", strings: 6 },
  initialKey: 4,
  mode: 1,
  initialTempo: 110,
  tuning: "Standard",
  bars: [
    {
      tempo: 110,
      timeSignature: { numerator: 4, denominator: 4 },
      segments: [
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
      ]
    },
    {
      tempo: 110,
      timeSignature: { numerator: 4, denominator: 4 },
      segments: [
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 3, string: 5 }, { fretValue: 5, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 5, string: 5 }, { fretValue: 7, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 6, string: 5 }, { fretValue: 8, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 5, string: 5 }, { fretValue: 7, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 3, string: 5 }, { fretValue: 5, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 5, string: 5 }, { fretValue: 7, string: 4 }]),
      ]
    },
    {
      tempo: 110,
      timeSignature: { numerator: 4, denominator: 4 },
      segments: [
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
      ]
    },
    {
      tempo: 110,
      timeSignature: { numerator: 3, denominator: 4 },
      segments: [
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 3, string: 5 }, { fretValue: 5, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 5, string: 5 }, { fretValue: 7, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 0, string: 5 }]),
        new Segment(false, 8, [{ fretValue: 3, string: 5 }, { fretValue: 5, string: 4 }]),
        new Segment(false, 8, [{ fretValue: 5, string: 5 }, { fretValue: 7, string: 4 }]),
      ]
    },
  ]
}