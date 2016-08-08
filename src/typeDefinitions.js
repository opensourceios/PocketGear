/* @flow */

export type PokemonType =
  'Bug' |
  'Dark' |
  'Dragon' |
  'Electric' |
  'Fairy' |
  'Fighting' |
  'Fire' |
  'Flying' |
  'Ghost' |
  'Grass' |
  'Ground' |
  'Ice' |
  'Normal' |
  'Poison' |
  'Psychic' |
  'Rock' |
  'Steel' |
  'Water'

export type PokemonID = number;

export type Pokemon = {
  id: PokemonID;
  name: string;
  types: Array<PokemonType>;
  category: string;
  description: string;
  max_cp: number;
  evolution_chains?: Array<Array<PokemonID>>;
  evolution_requirements: {
    amount: number;
    name: string;
  };
  evolution_cp_multipilers?: Array<{
    id: PokemonID;
    multipilers: {
      minimum: number;
      maximum: number;
      average: number;
    };
  }>;
  height: {
    amount: number;
    unit: 'm' | 'cm';
  };
  weight: {
    amount: number;
    unit: 'g' | 'kg';
  };
  max_hp: number;
  stamina: number;
  attack: number;
  defense: number;
  capture_rate: number;
  flee_rate: number;
}

export type TypeChart = {
  name: PokemonType;
  immunes: Array<PokemonType>;
  weaknesses: Array<PokemonType>;
  strengths: Array<PokemonType>;
}

export type Attack = {
  name: string;
  type: PokemonType;
  damage: number;
  duration: number;
  known_by: Array<PokemonID>;
}

export type QuickAttack = Attack & {
  energy_increase: number;
}

export type SpecialAttack = Attack & {
  critical_hit_chance: number;
  energy_requirement: number;
}