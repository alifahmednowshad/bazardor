export type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  emoji: string;
  unit: string; 
  category: string; 
  categoryName: string;
  categoryIcon: string;
  price: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: number; 
  markets: Market[];
};

export type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};
