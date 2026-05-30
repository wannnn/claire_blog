export type ContinentId =
  | "asia"
  | "europe"
  | "africa"
  | "north-america"
  | "south-america"
  | "oceania";

export const CONTINENT_LABELS: Record<ContinentId, string> = {
  asia: "Asia",
  europe: "Europe",
  africa: "Africa",
  "north-america": "North America",
  "south-america": "South America",
  oceania: "Oceania",
};

export const CONTINENT_ORDER: ContinentId[] = [
  "asia",
  "europe",
  "africa",
  "north-america",
  "south-america",
  "oceania",
];

export interface CountryMeta {
  label: string;
  flag: string;
  continent: ContinentId;
}

/** Maps URL folder slug (`country` on posts) to UI label and continent. */
export const COUNTRY_META: Record<string, CountryMeta> = {
  nepal: { label: "Nepal", flag: "🇳🇵", continent: "asia" },
  bahrain: { label: "Bahrain", flag: "🇧🇭", continent: "asia" },
  oman: { label: "Oman", flag: "🇴🇲", continent: "asia" },
  uae: { label: "UAE", flag: "🇦🇪", continent: "asia" },
  philippines: { label: "Philippines", flag: "🇵🇭", continent: "asia" },
  thailand: { label: "Thailand", flag: "🇹🇭", continent: "asia" },
  malaysia: { label: "Malaysia", flag: "🇲🇾", continent: "asia" },
  italy: { label: "Italy", flag: "🇮🇹", continent: "europe" },
  belgium: { label: "Belgium", flag: "🇧🇪", continent: "europe" },
  switzerland: { label: "Switzerland", flag: "🇨🇭", continent: "europe" },
  liechtenstein: { label: "Liechtenstein", flag: "🇱🇮", continent: "europe" },
  portugal: { label: "Portugal", flag: "🇵🇹", continent: "europe" },
  spain: { label: "Spain", flag: "🇪🇸", continent: "europe" },
  greece: { label: "Greece", flag: "🇬🇷", continent: "europe" },
};

export function formatCountryLabel(countrySlug: string): string {
  const meta = COUNTRY_META[countrySlug];
  if (!meta) return countrySlug;
  return `${meta.flag} ${meta.label}`;
}

export function getCountryMeta(countrySlug: string): CountryMeta | undefined {
  return COUNTRY_META[countrySlug];
}

export function getContinentForCountry(countrySlug: string): ContinentId | undefined {
  return COUNTRY_META[countrySlug]?.continent;
}
