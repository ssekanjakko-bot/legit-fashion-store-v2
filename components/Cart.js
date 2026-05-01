'use client'

export default function Cart({ isOpen, setIsOpen, items, setItems }) {
          const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

          const removeItem = (id) => {
                    setItems(items.filter(item => item.id !== id))
          }

          if (!isOpen) return null

          return (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
                              <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
                                        <div className="flex justify-between items-center p-4 border-b">
                                                  <h2 className="text-xl font-bold">Your Cart</h2>
                                                  <button onClick={() => setIsOpen(false)}>✕</button>
                                        </div>

                                        <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
                                                  {items.length === 0 ? (
                                                            <p className="text-gray-500 text-center mt-8">Your cart is empty</p>
                                                  ) : (
                                                            items.map(item => (
                                                                      <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b">
                                                                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                                                                <div className="flex-1">
                                                                                          <h3 className="font-semibold">{item.name}</h3>
                                                                                          <p>${item.price} x {item.quantity}</p>
                                                                                          <button
                                                                                                    onClick={() => removeItem(item.id)}
                                                                                                    className="text-red-500 text-sm mt-1"
                                                                                          >
                                                                                                    Remove
                                                                                          </button>
                                                                                </div>
                                                                      </div>
                                                            ))
                                                  )}
                                        </div>

                                        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
                                                  <div className="flex justify-between mb-4 font-bold text-lg">
                                                            <span>Total:</span>
                                                            <span>${total}</span>
                                                  </div>
                                                  <button className="w-full bg-black text-white py-3 rounded">
                                                            Checkout
                                                  </button>
                                        </div>
                              </div>
                    </div>
          )
}