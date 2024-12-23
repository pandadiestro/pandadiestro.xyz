import type { PageLoad } from "./$types";
import type { MinimalRepository } from "$lib/types/GhRepo";

export const load: PageLoad = async({ fetch }) => {
  const res = await fetch('https://api.github.com/users/pandadiestro/repos?sort=created');
  const ghrepos: MinimalRepository[] = await res.json();
  return { ghrepos };
}

