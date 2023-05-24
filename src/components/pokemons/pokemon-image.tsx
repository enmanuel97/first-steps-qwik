import { component$ } from "@builder.io/qwik";

export const PokemonImage = component$(() => {
  return (
	<div>
	  <img
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
		style={{ width: "200px", height: "200px" }}
		alt=""
	  />
	</div>
  );
});