import blinki_2 from "$lib/assets/blinkies/blinkiesCafe-Kn.gif"
import blinki_3 from "$lib/assets/blinkies/blinkiesCafe-Wu.gif"
import blinki_4 from "$lib/assets/blinkies/blinkiesCafe-aI.gif"
import blinki_5 from "$lib/assets/blinkies/blinkiesCafe-d3.gif"
import blinki_6 from "$lib/assets/blinkies/blinkiesCafe-xd.gif"

type Blinky = {
  src: string,
  alt: string,
}

export const blinkies: Blinky[] = [
  {
    src: blinki_2,
    alt: "animated gif that states: 'powered by svelte'",
  },
  {
    src: blinki_3,
    alt: "animated gif that states: 'ditch DRM!!!'",
  },
  {
    src: blinki_4,
    alt: "animated gif that states: 'I love the music!'",
  },
  {
    src: blinki_5,
    alt: "animated gif that states: 'powered by debian'",
  },
  {
    src: blinki_6,
    alt: "animated gif that states: 'systems programming'",
  },
]

