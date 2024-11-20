import llawi_src from "$lib/assets/cards/llawi.svg"
import solong_src from "$lib/assets/cards/so-long.svg"
import gifany_src from "$lib/assets/cards/gifany.zig.svg"

type Card = {
  src: string,
  href: string,
  alt: string,
}

export const cards: Card[] = [
  {
    src: llawi_src,
    href: "https://github.com/pandadiestro/llawi",
    alt: "llawi, the password manager",
  },
  {
    src: solong_src,
    href: "https://github.com/pandadiestro/so-long",
    alt: "so-long, a network process killer",
  },
  {
    src: gifany_src,
    href: "https://github.com/pandadiestro/gifany.zig",
    alt: "gifany.zig, a gif89a and gif87a compatible gif decoding library"
  }
]

