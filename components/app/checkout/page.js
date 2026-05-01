'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Checkout() {
          const [cart, setCart] = useState([])
          const [showSteps, setShowSteps] = useState(false)
          const YOUR_NUMBER = '256700899799'
          const YOUR_MOMO_NUMBER = '0764266075'

          useEffect(() => {
                    setCart(JSON.parse(localStorage.getItem('legitCart') || '[]'))
          }, [])

          const updateQty = (id, size, newQty) => {
                    if (newQty < 1) {
                              removeItem(id, size)
                              return
                    }
                    const newCart = cart.map(item =>
                              item.id === id && item.size === size ? { ...item, qty: newQty } : item
                    )
                    setCart(newCart)
                    localStorage.setItem('legitCart', JSON.stringify(newCart))
          }

          const removeItem = (id, size) => {
                    const newCart = cart.filter(item => !(item.id === id && item.size === size))
                    setCart(newCart)
                    localStorage.setItem('legitCart', JSON.stringify(newCart))
          }

          const clearCart = () => {
                    setCart([])
                    localStorage.removeItem('legitCart')
          }

          const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
          const orderText = cart.map(i => `${i.name} Size:${i.size} x${i.qty}`).join(', ')

          const whatsappLink = `https://wa.me/${YOUR_NUMBER}?text=Hi LEGIT FASHION, I want to order: ${orderText}. Total: UGX ${total.toLocaleString()}`
          const mtnLink = `https://wa.me/${YOUR_NUMBER}?text=Hi LEGIT FASHION, I want to pay UGX ${total.toLocaleString()} for: ${orderText} via MTN MoMo. My number is:`
          const airtelLink = `https://wa.me/${YOUR_NUMBER}?text=Hi LEGIT FASHION, I want to pay UGX ${total.toLocaleString()} for: ${orderText} via Airtel Money. My number is:`

          if (cart.length === 0) {
                    return (
                              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                                        <div className="text-center">
                                                  <h1 className="text-2xl font-bold mb-4">Cart is Empty</h1>
                                                  <Link href="/" className="bg-black text-white px-6 py-3 rounded-lg">Back to Store</Link>
                                        </div>
                              </div>
                    )
          }

          return (
                    <div className="min-h-screen bg-gray-50 p-4">
                              <div className="max-w-2xl mx-auto">
                                        <div className="flex justify-between items-center mb-6">
                                                  <h1 className="text-3xl font-bold">Your Cart</h1>
                                                  <button onClick={clearCart} className="text-red-600 text-sm underline">
                                                            Clear Cart
                                                  </button>
                                        </div>

                                        {cart.map(item => (
                                                  <div key={`${item.id}-${item.size}`} className="bg-white p-4 rounded-lg mb-3">
                                                            <div className="flex justify-between items-start mb-3">
                                                                      <div>
                                                                                <p className="font-bold text-lg">{item.name}</p>
                                                                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                                                                <p className="font-bold text-lg mt-1">UGX {(item.price * item.qty).toLocaleString()}</p>
                                                                      </div>
                                                                      <button onClick={() => removeItem(item.id, item.size)} className="text-red-600 font-bold text-sm">
                                                                                Remove
                                                                      </button>
                                                            </div>

                                                            <div className="flex items-center gap-3">
                                                                      <span className="text-sm text-gray-600">Qty:</span>
                                                                      <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="bg-gray-200 w-8 h-8 rounded-lg font-bold hover:bg-gray-300">
                                                                                -
                                                                      </button>
                                                                      <span className="font-bold w-8 text-center">{item.qty}</span>
                                                                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="bg-gray-200 w-8 h-8 rounded-lg font-bold hover:bg-gray-300">
                                                                                +
                                                                      </button>
                                                                      <span className="text-sm text-gray-500 ml-2">UGX {item.price.toLocaleString()} each</span>
                                                            </div>
                                                  </div>
                                        ))}

                                        <div className="bg-black text-white p-4 rounded-lg mt-6 mb-4">
                                                  <div className="flex justify-between text-lg">
                                                            <span>Total:</span>
                                                            <span className="font-bold">UGX {total.toLocaleString()}</span>
                                                  </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mb-3">
                                                  <a href={mtnLink} target="_blank" onClick={clearCart} className="bg-yellow-500 text-black py-4 rounded-lg text-center font-bold hover:bg-yellow-600">
                                                            Pay with MTN MoMo
                                                  </a>
                                                  <a href={airtelLink} target="_blank" onClick={clearCart} className="bg-red-600 text-white py-4 rounded-lg text-center font-bold hover:bg-red-700">
                                                            Pay with Airtel Money
                                                  </a>
                                        </div>

                                        <a href={whatsappLink} target="_blank" onClick={clearCart} className="block w-full bg-green-600 text-white py-4 rounded-lg text-center font-bold text-lg hover:bg-green-700 mb-3">
                                                  Order via WhatsApp
                                        </a>

                                        <button onClick={() => setShowSteps(!showSteps)} className="w-full text-sm text-gray-600 underline mb-3">
                                                  {showSteps ? 'Hide' : 'Show'} Payment Steps
                                        </button>

                                        {showSteps && (
                                                  <div className="p-4 bg-gray-100 rounded-lg text-sm mb-4">
                                                            <p className="font-bold mb-2">How to Pay UGX {total.toLocaleString()}:</p>
                                                            <p className="mb-2"><b>MTN MoMo:</b> Dial *165*3# → Enter Number: {YOUR_MOMO_NUMBER} → Amount: {total.toLocaleString()} → PIN</p>
                                                            <p className="mb-2"><b>Airtel Money:</b> Dial *185*9# → Enter Number: {YOUR_MOMO_NUMBER} → Amount: {total.toLocaleString()} → PIN</p>
                                                            <p className="text-xs text-gray-600">Send screenshot on WhatsApp after payment</p>
                                                  </div>
                                        )}

                                        <Link href="/" className="block text-center text-blue-600 underline">
                                                  Continue Shopping
                                        </Link>
                              </div>
                    </div>
          )
}