interface CartItem {
  id: string;
  quantity: number;
}

const items = new Map<string, CartItem>();

export const cartModule = {
  add(id: string) {
    const current = items.get(id);
    items.set(id, { id, quantity: current ? current.quantity + 1 : 1 });
  },
  clear() {
    items.clear();
  },
  list() {
    return Array.from(items.values());
  },
};
