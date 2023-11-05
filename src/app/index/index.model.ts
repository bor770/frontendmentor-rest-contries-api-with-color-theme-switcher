export type CountriesData = {
  capital: string;
  flag: { alt: string; svg: string };
  name: string;
  population: number;
  region: string;
}[];

export type Filter = { field: `name` | `region`; value: string };
