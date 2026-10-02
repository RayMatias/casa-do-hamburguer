import { create } from "zustand"
import { persist } from "zustand/middleware"


export interface CartItem{
    id: string        
    name: string
    price: number
    imageUrl?: string | null
    quantity: number
}


interface CartStore{
    cart: CartItem[]
    addToCart: (product: { id: string; name: string; price: number; imageUrl?: string | null }) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    getTotal: () => number
}


export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          })
        }
      },

      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        set({
          cart: get().cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => set({ cart: [] }),

      getTotal: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      },
    }),
    {
      name: "casa-hamburguer-carrinho", 
    }
  )
)