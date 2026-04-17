export const cars = [
  {
    id: 'nova',
    name: 'Nova',
    type: 'Sedan',
    price: { INR: 1500000, USD: 18000 },
    range: 450,
    topSpeed: 180,
    acceleration: 6.5,
    tagline: 'The City Redefined',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'apex',
    name: 'Apex',
    type: 'Sedan',
    price: { INR: 2500000, USD: 30000 },
    range: 600,
    topSpeed: 220,
    acceleration: 4.2,
    tagline: 'Performance Meets Luxury',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'titan',
    name: 'Titan',
    type: 'SUV',
    price: { INR: 1800000, USD: 21000 },
    range: 500,
    topSpeed: 190,
    acceleration: 5.8,
    tagline: 'Adventure Without Limits',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pinnacle',
    name: 'Pinnacle',
    type: 'Luxury SUV',
    price: { INR: 4500000, USD: 54000 },
    range: 650,
    topSpeed: 210,
    acceleration: 4.8,
    tagline: 'The Ultimate Command Center',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'zenith',
    name: 'Zenith',
    type: 'Sports',
    price: { INR: 5500000, USD: 66000 },
    range: 550,
    topSpeed: 280,
    acceleration: 2.9,
    tagline: 'Pure Electric Adrenaline',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800'
  }
];

export const formatPrice = (amount, currency = 'INR') => {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount.USD);
  }
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount.INR);
};
