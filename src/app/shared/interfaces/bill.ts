export interface IBill {
  value: number;
  currency: string;
}

export interface ICurrency {
  base: string;
  date: string;
  rates: {[key: string]: number};
  success: boolean;
  timestamp: number;
}
