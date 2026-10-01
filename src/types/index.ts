export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'sides' | 'desserts' | 'drinks';
  price: number;
  description: string;
  image: string;
  altText: string;
  tags: string[];
  heatLevel?: number; // 0 to 3
  weightOrSize?: string;
  badge?: string;
  customizable?: boolean;
}

export interface CartItem {
  cartId: string;
  menuItem: MenuItem;
  quantity: number;
  meatDoneness?: 'mal' | 'ponto' | 'bem';
  selectedExtras: { name: string; price: number }[];
  notes?: string;
  itemTotal: number;
}

export interface ReservationRequest {
  fullName: string;
  phone: string;
  email: string;
  reason: 'duvida' | 'reserva' | 'evento' | 'feedback';
  date?: string;
  time?: string;
  guests?: string;
  message?: string;
}
