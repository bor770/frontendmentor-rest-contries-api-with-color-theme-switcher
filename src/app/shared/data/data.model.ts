export type ApiResponse = {
  borders: string[];
  capital: string[];
  currencies: { [key: string]: { name: string } };
  flags: { alt: string; svg: string };
  languages: { [key: string]: string };
  name: { common: string; nativeName: { [key: string]: { common: string } } };
  population: number;
  region: string;
  subregion: string;
}[];
