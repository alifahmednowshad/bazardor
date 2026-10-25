export type TickerItem = {
  id: string | number;
  emoji: string;
  name: string;
  price: number;
  unit: string;
  change: number; 
};

export const sampleTicker: TickerItem[] = [
  {
    id: 1,
    emoji: "🍚",
    name: "স্বর্ণমাছি চাল",
    price: 48,
    unit: "কেজি",
    change: 2.1,
  },
  {
    id: 2,
    emoji: "🍚",
    name: "মিনিকেট চাল",
    price: 99,
    unit: "কেজি",
    change: -2.9,
  },
  {
    id: 3,
    emoji: "🍚",
    name: "বাটাম সাইজ চাল",
    price: 66,
    unit: "কেজি",
    change: 3.1,
  },
  {
    id: 4,
    emoji: "🫘",
    name: "মসুর ডাল",
    price: 142,
    unit: "কেজি",
    change: 2.9,
  },
  { id: 5, emoji: "🫘", name: "ছোলা", price: 120, unit: "কেজি", change: -2.4 },
];
