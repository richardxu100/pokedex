export const pokemon = [ // maybe add a searchText prop
	{ name : "MissingNo", type : "blank", stage : 100, caught : false, species : "Glitch Pokemon"},
	{ name : "Bulbasaur", type : "grass", stage : 0, caught : false, species : "Seed Pokemon"},
	{ name : "Ivysaur", type : "grass", stage : 3, caught : false, species : "Seed Pokemon"},
	{ name : "Venusaur", type : "grass", stage : 5, caught : false, species : "Seed Pokemon"},
	{ name : "Charmander", type : "fire", stage : 0, caught : false, species : "Lizard Pokemon"},
	{ name : "Charmeleon", type : "fire", stage : 3, caught : false, species : "Flame Pokemon"},
	{ name : "Charizard", type : "fire", stage : 5, caught : false, species : "Flame Pokemon"},
	{ name : "Squirtle", type : "water", stage : 0, caught : false, species : "Tiny Turtle Pokemon"},
	{ name : "Wartortle", type : "water", stage : 3, caught : false, species : "Turtle Pokemon"},
	{ name : "Blastoise", type : "water", stage : 5, caught : false, species : "Shellfish Pokemon"},
	{ name : "Caterpie", type : "bug", stage : 1, caught : false, species : "Worm Pokemon"},
	{ name : "Metapod", type : "bug", stage : 2, caught : false, species : "Cocoon Pokemon"},
	{ name : "Butterfree", type : "bug", stage : 4, caught : false, species : "Butterfly Pokemon"},
	{ name : "Weedle", type : "bug", stage : 1, caught : false, species : "Hairy Bug Pokemon"},
	{ name : "Kakuna", type : "bug", stage : 2, caught : false, species : "Cocoon Pokemon"},
	{ name : "Beedrill", type : "bug", stage : 4, caught : false, species : "Poison Bee Pokemon"},
	{ name : "Pidgey", type : "flying", stage : 1, caught : false, species : "Tiny Bird Pokemon"},
	{ name : "Pidgeotto", type : "flying", stage : 3, caught : false, species : "Bird Pokemon"},
	{ name : "Pidgeot", type : "flying", stage : 5, caught : false, species : "Bird Pokemon"},
	{ name : "Rattata", type : "normal", stage : 1, caught : false, species : "Mouse Pokemon"},
	{ name : "Raticate", type : "normal", stage : 2, caught : false, species : "Mouse Pokemon"},
	{ name : "Spearow", type : "flying", stage : 1, caught : false, species : "Tiny Bird Pokemon"},
	{ name : "Fearow", type : "flying", stage : 3, caught : false, species : "Beak Pokemon"},
	{ name : "Ekans", type : "poison", stage : 1, caught : false, species : "Snake Pokemon"},
	{ name : "Arbok", type : "poison", stage : 3, caught : false, species : "Cobra Pokemon"},
	{ name : "Pikachu", type : "electric", stage : 1, caught : false, species : "Mouse Pokemon"},
	{ name : "Raichu", type : "electric", stage : 3, caught : false, species : "Mouse Pokemon"},
	{ name : "Sandshrew", type : "ground", stage : 1, caught : false, species : "Mouse Pokemon"},
	{ name : "Sandslash", type : "ground", stage : 2, caught : false, species : "Mouse Pokemon"},
	{ name : "Nidoran F", type : "poison", stage : 1, caught : false, species : "Poison Pin Pokemon"},
	{ name : "Nidorina", type : "poison", stage : 2, caught : false, species : "Poison Pin Pokemon"},
	{ name : "Nidoqueen", type : "poison", stage : 5, caught : false, species : "Drill Pokemon"},
	{ name : "Nidoran M", type : "poison", stage : 1, caught : false, species : "Poison Pin Pokemon"},
	{ name : "Nidorino", type : "poison", stage : 2, caught : false, species : "Poison Pin Pokemon"},
	{ name : "Nidoking", type : "poison", stage : 5, caught : false, species : "Drill Pokemon"},
	{ name : "Clefairy", type : "fairy", stage : 1, caught : false, species : "Fairy Pokemon"},
	{ name : "Clefable", type : "fairy", stage : 3, caught : false, species : "Fairy Pokemon"},
	{ name : "Vuplix", type : "fire", stage : 1, caught : false, species : "Fox Pokemon"},
	{ name : "Ninetales", type : "fire", stage : 3, caught : false, species : "Fox Pokemon"},
	{ name : "Jigglypuff", type : "fairy", stage : 1, caught : false, species : "Balloon Pokemon"},
	{ name : "Wigglytuff", type : "fairy", stage : 3, caught : false, species : "Balloon Pokemon"},
	{ name : "Zubat", type : "poison", stage : 1, caught : false, species : "Bat Pokemon"},
	{ name : "Golbat", type : "poison", stage : 2, caught : false, species : "Bat Pokemon"},
	{ name : "Oddish", type : "grass", stage : 1, caught : false, species : "Weed Pokemon"},
	{ name : "Gloom", type : "grass", stage : 2, caught : false, species : "Weed Pokemon"},
	{ name : "Vileplume", type : "grass", stage : 3, caught : false, species : "Flower Pokemon"},
	{ name : "Paras", type : "bug", stage : 1, caught : false, species : "Mushroom Pokemon"},
	{ name : "Parasect", type : "bug", stage : 2, caught : false, species : "Mushroom Pokemon"},
	{ name : "Venonat", type : "bug", stage : 1, caught : false, species : "Insect Pokemon"},
	{ name : "Venomoth", type : "bug", stage : 2, caught : false, species : "Poison Moth Pokemon"},
	{ name : "Diglett", type : "ground", stage : 1, caught : false, species : "Mole Pokemon"},
	{ name : "Dugtrio", type : "ground", stage : 2, caught : false, species : "Mole Pokemon"},
	{ name : "Meowth", type : "normal", stage : 1, caught : false, species : "Scratch Cat Pokemon"},
	{ name : "Persian", type : "normal", stage : 2, caught : false, species : "Classy Cat Pokemon"},
	{ name : "Psyduck", type : "water", stage : 1, caught : false, species : "Duck Pokemon"},
	{ name : "Golduck", type : "water", stage : 2, caught : false, species : "Duck Pokemon"},
	{ name : "Mankey", type : "fighting", stage : 1, caught : false, species : "Pig Monkey Pokemon"},
	{ name : "Primeape", type : "fighting", stage : 2, caught : false, species : "Pig Monkey Pokemon"},
	{ name : "Growlithe", type : "fire", stage : 1, caught : false, species : "Puppy Pokemon"},
	{ name : "Arcanine", type : "fire", stage : 2, caught : false, species : "Legendary Pokemon"},
	{ name : "Poliwag", type : "water", stage : 1, caught : false, species : "Tadpole Pokemon"},
	{ name : "Poliwhirl", type : "water", stage : 2, caught : false, species : "Tadpole Pokemon"},
	{ name : "Poliwrath", type : "water", stage : 5, caught : false, species : "Tadpole Pokemon"},
	{ name : "Abra", type : "psychic", stage : 1, caught : false, species : "Psi Pokemon"},
	{ name : "Kadabra", type : "psychic", stage : 2, caught : false, species : "Psi Pokemon"},
	{ name : "Alakazam", type : "psychic", stage : 5, caught : false, species : "Psi Pokemon"},
	{ name : "Machop", type : "fighting", stage : 1, caught : false, species : "Superpower Pokemon"},
	{ name : "Machoke", type : "fighting", stage : 2, caught : false, species : "Superpower Pokemon"},
	{ name : "Machamp", type : "fighting", stage : 5, caught : false, species : "Superpower Pokemon"},
	{ name : "Bellsprout", type : "grass", stage : 1, caught : false, species : "Flower Pokemon"},
	{ name : "Weepinbell", type : "grass", stage : 3, caught : false, species : "Flycatcher Pokemon"},
	{ name : "Victreebel", type : "grass", stage : 5, caught : false, species : "Flycatcher Pokemon"},
	{ name : "Tentacool", type : "water", stage : 1, caught : false, species : "Jellyfish Pokemon"},
	{ name : "Tentacruel", type : "water", stage : 3, caught : false, species : "Jellyfish Pokemon"},
	{ name : "Geodude", type : "rock", stage : 1, caught : false, species : "Rock Pokemon"},
	{ name : "Graveler", type : "rock", stage : 3, caught : false, species : "Rock Pokemon"},
	{ name : "Golem", type : "rock", stage : 5, caught : false, species : "Megaton Pokemon"},
	{ name : "Ponyta", type : "fire", stage : 2, caught : false, species : "Fire Horse Pokemon"},
	{ name : "Rapidash", type : "fire", stage : 3, caught : false, species : "Fire Horse Pokemon"},
	{ name : "Slowpoke", type : "water", stage : 2, caught : false, species : "Dopey Pokemon"},
	{ name : "Slowbro", type : "water", stage : 3, caught : false, species : "Hermit Crab Pokemon"},
	{ name : "Magnemite", type : "electric", stage : 2, caught : false, species : "Magnet Pokemon"},
	{ name : "Magneton", type : "electric", stage : 3, caught : false, species : "Magnet Pokemon"},
	{ name : "Farfetch'd", type : "flying", stage : 3, caught : false, species : "Wild Duck Pokemon"},
	{ name : "Doduo", type : "flying", stage : 2, caught : false, species : "Twin Bird Pokemon"},
	{ name : "Dodrio", type : "flying", stage : 4, caught : false, species : "Triple Bird Pokemon"},
	{ name : "Seel", type : "water", stage : 3, caught : false, species : "Sea Lion Pokemon"},
	{ name : "Dewgong", type : "ice", stage : 5, caught : false, species : "Sea Lion Pokemon"},
	{ name : "Grimer", type : "poison", stage : 2, caught : false, species : "Sludge Pokemon"},
	{ name : "Muk", type : "poison", stage : 4, caught : false, species : "Sludge Pokemon"},
	{ name : "Shellder", type : "water", stage : 2, caught : false, species : "Bivalve Pokemon"},
	{ name : "Cloyster", type : "ice", stage : 4, caught : false, species : "Bivalve Pokemon"},
	{ name : "Gastly", type : "ghost", stage : 2, caught : false, species : "Gas Pokemon"},
	{ name : "Haunter", type : "ghost", stage : 3, caught : false, species : "Gas Pokemon"},
	{ name : "Gengar", type : "ghost", stage : 4, caught : false, species : "Shadow Pokemon"},
	{ name : "Onix", type : "rock", stage : 3, caught : false, species : "Rock Snake Pokemon"},
	{ name : "Drozee", type : "psychic", stage : 1, caught : false, species : "Hypnosis Pokemon"},
	{ name : "Hypno", type : "psychic", stage : 3, caught : false, species : "Hypnosis Pokemon"},
	{ name : "Krabby", type : "water", stage : 3, caught : false, species : "River Crab Pokemon"},
	{ name : "Kingler", type : "water", stage : 4, caught : false, species : "Pincer Pokemon"},
	{ name : "Voltorb", type : "electric", stage : 1, caught : false, species : "Ball Pokemon"},
	{ name : "Electrode", type : "electric", stage : 3, caught : false, species : "Ball Pokemon"},
	{ name : "Exeggcute", type : "grass", stage : 3, caught : false, species : "Egg Pokemon"},
	{ name : "Exeggutor", type : "grass", stage : 5, caught : false, species : "Coconut Pokemon"},
	{ name : "Cubone", type : "ground", stage : 3, caught : false, species : "Lonely Pokemon"},
	{ name : "Marowak", type : "ground", stage : 4, caught : false, species : "Bone Keeper Pokemon"},
	{ name : "Hitmonchan", type : "fighting", stage : 5, caught : false, species : "Kicking Pokemon"},
	{ name : "Hitmonlee", type : "fighting", stage : 5, caught : false, species : "Punching Pokemon"},
	{ name : "Lickitung", type : "normal", stage : 4, caught : false, species : "Licking Pokemon"},
	{ name : "Koffing", type : "poison", stage : 2, caught : false, species : "Poison Gas Pokemon"},
	{ name : "Weezing", type : "poison", stage : 4, caught : false, species : "Poison Gas Pokemon"},
	{ name : "Rhyhorn", type : "rock", stage : 3, caught : false, species : "Spikes Pokemon"},
	{ name : "Rhydon", type : "rock", stage : 4, caught : false, species : "Drill Pokemon"},
	{ name : "Chansey", type : "normal", stage : 4, caught : false, species : "Egg Pokemon"},
	{ name : "Tangela", type : "grass", stage : 4, caught : false, species : "Vine Pokemon"},
	{ name : "Kangaskhan", type : "normal", stage : 4, caught : false, species : "Parent Pokemon"},
	{ name : "Horsea", type : "water", stage : 1, caught : false, species : "Dragon Pokemon"},
	{ name : "Seadra", type : "water", stage : 2, caught : false, species : "Dragon Pokemon"},
	{ name : "Goldeen", type : "water", stage : 3, caught : false, species : "Goldfish Pokemon"},
	{ name : "Seaking", type : "water", stage : 4, caught : false, species : "Goldfish Pokemon"},
	{ name : "Staryu", type : "water", stage : 1, caught : false, species : "Star Shape Pokemon"},
	{ name : "Starmie", type : "water", stage : 2, caught : false, species : "Mysterious Pokemon"},
	{ name : "Mr. Mime", type : "psychic", stage : 4, caught : false, species : "Barrier Pokemon"},
	{ name : "Scyther", type : "bug", stage : 4, caught : false, species : "Mantis Pokemon"},
	{ name : "Jynx", type : "psychic", stage : 4, caught : false, species : "Human Shape Pokemon"},
	{ name : "Electabuzz", type : "electric", stage : 5, caught : false, species : "Electric Pokemon"},
	{ name : "Magmar", type : "fire", stage : 5, caught : false, species : "Spitfire Pokemon"},
	{ name : "Pinsir", type : "bug", stage : 5, caught : false, species : "Stag Beetle Pokemon"},
	{ name : "Tauros", type : "normal", stage : 4, caught : false, species : "Wild Bull Pokemon"},
	{ name : "Magikarp", type : "water", stage : 1, caught : false, species : "Fish Pokemon"},
	{ name : "Gyrados", type : "water", stage : 5, caught : false, species : "Atrocious Pokemon"},
	{ name : "Lapras", type : "water", stage : 4, caught : false, species : "Transport Pokemon"},
	{ name : "Ditto", type : "normal", stage : 4, caught : false, species : "Transform Pokemon"},
	{ name : "Eevee", type : "normal", stage : 2, caught : false, species : "Evolution Pokemon"},
	{ name : "Vaporeon", type : "water", stage : 4, caught : false, species : "Bubble Jet Pokemon"},
	{ name : "Jolteon", type : "electric", stage : 4, caught : false, species : "Lightning Pokemon"},
	{ name : "Flareon", type : "fire", stage : 4, caught : false, species : "Flame Pokemon"},
	{ name : "Porygon", type : "normal", stage : 5, caught : false, species : "Virtual Pokemon"},
	{ name : "Omanyte", type : "water", stage : 4, caught : false, species : "Spiral Pokemon"},
	{ name : "Omastar", type : "water", stage : 5, caught : false, species : "Spiral Pokemon"},
	{ name : "Kabuto", type : "rock", stage : 4, caught : false, species : "Shellfish Pokemon"},
	{ name : "Kabutops", type : "rock", stage : 5, caught : false, species : "Shellfish Pokemon"},
	{ name : "Aerodactyl", type : "flying", stage : 5, caught : false, species : "Fossil Pokemon"},
	{ name : "Snorlax", type : "normal", stage : 5, caught : false, species : "Sleeping Pokemon"},
	{ name : "Articuno", type : "ice", stage : 6, caught : false, species : "Freeze Pokemon"},
	{ name : "Zapdos", type : "electric", stage : 6, caught : false, species : "Electric Pokemon"},
	{ name : "Moltres", type : "fire", stage : 6, caught : false, species : "Flame Pokemon"},
	{ name : "Dratini", type : "dragon", stage : 4, caught : false, species : "Dragon Pokemon"},
	{ name : "Dragonair", type : "dragon", stage : 5, caught : false, species : "Dragon Pokemon"},
	{ name : "Dragonite", type : "dragon", stage : 6, caught : false, species : "Dragon Pokemon"},
	{ name : "Mewtwo", type : "psychic", stage : 6, caught : false, species : "Genetic Pokemon"},
	{ name : "Mew", type : "psychic", stage : 7, caught : false, species : "New Species Pokemon"}
];
