export type ApiResponse = {
  borders: string[];
  capital: string[];
  cca3: string;
  currencies: { [key: string]: { name: string } };
  flags: { alt: string; svg: string };
  languages: { [key: string]: string };
  name: { common: string; nativeName: { [key: string]: { common: string } } };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
}[];

export type CountriesData = {
  borders: string[];
  capital: string;
  cca3: string;
  currencies: string[];
  flag?: { alt: string; svg: string };
  languages: string[];
  name: string;
  nativeNames?: string[];
  population: number;
  region: string;
  subregion: string;
  tld: string[];
}[];
