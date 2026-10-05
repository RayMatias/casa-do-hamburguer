"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Trash2, Plus, Minus, ShoppingCart, Loader2 } from "lucide-react"
import { useCartStore } from "../actions/useCartStore"
import { createOrder } from "@/app/actions/createOrder"

export default function CartPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  // Puxa os dados e funções do Zustand
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotal = useCartStore((state) => state.getTotal)
  const clearCart = useCartStore((state) => state.clearCart)

  const formatCurrency = (val: number) => {
    return val.toFixed(2)
  }

  const handleCheckout = async () => {
    if (status === "unauthenticated" || !session?.user?.id) {
      router.push("/login")
      return
    }

    if (cart.length === 0) return

    try {
      setIsCheckingOut(true)

      // Mapeia o carrinho do Zustand para o formato esperado pela tua Server Action
      const itemsInput = cart.map((item) => ({
        productId: item.id, // ID do produto na base de dados
        quantity: item.quantity,
        price: item.price,
      }))

      // Passa o userId correto da sessão ativa e os itens mapeados
      const result = await createOrder({
        userId: session.user.id,
        items: itemsInput,
      })

      if (result.success) {
        clearCart() // Limpa o carrinho local do Zustand/localStorage
        router.push("/orders") // Redireciona para a página de pedidos
      } else {
        alert("Erro ao finalizar o pedido. Tenta novamente.")
      }
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error)
      alert("Ocorreu um erro ao finalizar o pedido.")
    } finally {
      setIsCheckingOut(false)
    }
  }

  // Se o carrinho estiver vazio
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0E0F10] text-white p-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="p-4 bg-[#121212] border border-[#2A2D30] rounded-full text-[#FBA716]">
          <ShoppingCart size={36} />
        </div>
        <h1 className="text-2xl font-bold">Seu carrinho está vazio</h1>
        <p className="text-[#B8BBC0] max-w-sm">
          Explore nosso cardápio e adicione delícias ao seu carrinho!
        </p>
        <Link
          href="/our_menu"
          className="bg-[#FBA716] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#e09413] transition mt-2"
        >
          Ver cardápio
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0E0F10] text-white p-4 md:p-8 max-w-4xl mx-auto pb-32 md:pb-12">
      <Link
        href="/our_menu"
        className="flex items-center gap-2 text-[#B8BBC0] hover:text-white mb-6 transition w-fit"
      >
        <ArrowLeft size={20} /> Continuar comprando
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Seu Carrinho</h1>

      <div className="flex flex-col gap-6">
        <div className="border border-[#2A2D30] bg-[#121212] rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 border-b border-[#2A2D30] pb-4 last:border-b-0 last:pb-0"
            >
              {/* Linha superior: Imagem, Nome e Botão de apagar */}
              <div className="flex items-start gap-3 w-full">
                {item.imageUrl ? (
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#2A2D30]">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-[#2A2D30] rounded-lg shrink-0 flex items-center justify-center">
                    <Package size={20} className="text-[#B8BBC0]" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm leading-snug break-words">{item.name}</h4>
                  <span className="text-xs text-[#FBA716] font-semibold block mt-0.5">
                    R$ {formatCurrency(item.price)} cada
                  </span>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-zinc-500 hover:text-red-400 transition p-1 shrink-0"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Linha inferior: Quantidade e Preço Total alinhados lado a lado */}
              <div className="flex items-center justify-between w-full pt-1">
                <div className="flex items-center gap-2 bg-[#1A1C1E] border border-[#2A2D30] rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:text-[#FBA716] transition"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-bold px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:text-[#FBA716] transition"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <span className="font-bold text-sm text-zinc-200">
                  R$ {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do Carrinho e Checkout */}
        <div className="bg-[#121212] border border-[#2A2D30] rounded-xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-[#B8BBC0]">Total geral</span>
            <span className="text-[#FBA716] text-2xl">
              R$ {formatCurrency(getTotal())}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full bg-[#FBA716] text-black font-bold py-3.5 rounded-xl hover:bg-[#e09413] transition text-center cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isCheckingOut ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processando pedido...
              </>
            ) : (
              "Finalizar Pedido"
            )}
          </button>
        </div>
      </div>
    </main>
  )
}