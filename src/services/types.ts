export type CountryProps = {
  countryName: string;

  countryCode: string;
  deaths: number;

  recovered: number;
  cases: number;
  key: string;
};

export type SingleCountryProps = {
  TotalConfirmed: number;
  CountryCode: string;
  TotalDeaths: number;
  TotalRecovered: number;
  ID: string;
  Country: string;
};

export type CardProps = {
  title: string;
  color: string;
  count: number;
};
