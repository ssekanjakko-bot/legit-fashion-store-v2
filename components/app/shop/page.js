'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Shop() {
          const [products, setProducts] = useState([])
          const [selectedCategory, setSelectedCategory] = useState('All')
          const [cartCount, setCartCount] = useState(0)
          const [selectedSizes, setSelectedSizes] = useState({})

          const YOUR_NUMBER = '256764266075'

          useEffect(() => {
                    const stored = JSON.parse(localStorage.getItem('legitProducts') || '[]')
                    if (stored.length > 0) {
                              setProducts(stored)
                    } else {
                              setProducts([
                                        { id: 1, name: 'Vintage Band Tee', price: 80000, category: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', sizes: ['S', 'M', 'L', 'XL'] },
                                        { id: 2, name: 'Denim Jacket', price: 150000, category: 'Jackets', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400', sizes: ['M', 'L', 'XL'] },
                                        { id: 3, name: 'Cargo Pants', price: 120000, category: 'Pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', sizes: ['S', 'M', 'L'] },
                                        { id: 4, name: 'Retro Sneakers', price: 200000, category: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', sizes: ['40', '41', '42', '43', '44'] },
                              ])
                    }

                    const cart = JSON.parse(localStorage.getItem('legitCart') || '[]')
                    setCartCount(cart.reduce((sum, item) => sum + item.qty, 0))
          }, [])

          const categories = ['All', ...new Set(products.map(p => p.category))]
          const filteredProducts = selectedCategory === 'All'
                    ? products
                    : products.filter(p => p.category === selectedCategory)

          const addToCart = (product) => {
                    const size = selectedSizes[product.id]
                    if (!size) {
                              alert('Please select a size first')
                              return
                    }

                    const cart = JSON.parse(localStorage.getItem('legitCart') || '[]')
                    const existing = cart.find(item => item.id === product.id && item.size === size)

                    if (existing) {
                              existing.qty += 1
                    } else {
                              cart.push({ ...product, size, qty: 1 })
                    }

                    localStorage.setItem('legitCart', JSON.stringify(cart))
                    setCartCount(cart.reduce((sum, item) => sum + item.qty, 0))
                    alert(`${product.name} Size: ${size} added to cart!`)
          }

          const selectSize = (productId, size) => {
                    setSelectedSizes({ ...selectedSizes, [productId]: size })
          }

          return (
                    <div className="min-h-screen bg-gray-50">
                              <header className="bg-black text-white sticky top-0 z-10 shadow-lg border-b-4 border-[#3C2415]">
                                        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                                                  <Link href="/welcome" className="flex items-center gap-3">
                                                            <img src="/logo.png" alt="LEGIT FASHION" className="h-12 w-auto" />
                                                  </Link>
                                                  <div className="flex items-center gap-4">
                                                            <Link href="/about" className="text-gray-300 hover:text-[#D4A574] hidden sm:block">About</Link>
                                                            <Link href="/checkout" className="bg-[#D4A574] text-[#2C1810] px-4 py-2 rounded-full font-bold hover:bg-[#E8C89E] transition">
                                                                      Cart: {cartCount}
                                                            </Link>
                                                  </div>
                                        </div>
                              </header>

                              <div className="bg-gradient-to-r from-[#3C2415] to-[#2C1810] text-white py-3">
                                        <div className="max-w-7xl mx-auto px-4 text-center">
                                                  <p className="text-sm font-medium">
                                                            <span className="text-[#D4A574]">FREE DELIVERY</span> in Kampala •
                                                            <span className="text-[#D4A574] ml-2">100% AUTHENTIC</span> •
                                                            <span className="text-[#D4A574] ml-2">MTN/Airtel Money</span>
                                                  </p>
                                        </div>
                              </div>

                              <div className="max-w-7xl mx-auto px-4 py-8">
                                        <div className="text-center mb-8">
                                                  <h1 className="text-4xl font-bold mb-2 text-gray-900">
                                                            Latest <span className="text-[#3C2415]">Drops</span>
                                                  </h1>
                                                  <p className="text-gray-600">Limited stock. Cop yours before it's gone.</p>
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                                                  {categories.map(cat => (
                                                            <button
                                                                      key={cat}
                                                                      onClick={() => setSelectedCategory(cat)}
                                                                      className={`px-6 py-2 rounded-full font-medium transition ${selectedCategory === cat
                                                                                ? 'bg-[#3C2415] text-white shadow-md'
                                                                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#3C2415]'
                                                                                }`}
                                                            >
                                                                      {cat}
                                                            </button>
                                                  ))}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                                  {filteredProducts.map(product => {
                                                            const mtnLink = `https://wa.me/${YOUR_NUMBER}?text=Hi LEGIT FASHION, I want to pay UGX ${product.price.toLocaleString()} for ${product.name} via MTN MoMo. My number is:`
                                                            const airtelLink = `https://wa.me/${YOUR_NUMBER}?text=Hi LEGIT FASHION, I want to pay UGX ${product.price.toLocaleString()} for ${product.name} via Airtel Money. My number is:`

                                                            return (
                                                                      <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border-t-4 border-[#3C2415]">
                                                                                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                                                                                <div className="p-4">
                                                                                          <h3 className="font-bold text-lg mb-1 text-gray-900">{product.name}</h3>
                                                                                          <p className="text-[#5C4033] text-sm mb-2 font-medium">{product.category}</p>
                                                                                          <p className="text-2xl font-bold mb-4 text-[#3C2415]">UGX {product.price.toLocaleString()}</p>

                                                                                          <div className="flex flex-wrap gap-2 mb-4">
                                                                                                    {product.sizes.map(size => (
                                                                                                              <button
                                                                                                                        key={size}
                                                                                                                        onClick={() => selectSize(product.id, size)}
                                                                                                                        className={`px-3 py-1 border-2 rounded text-sm font-medium transition ${selectedSizes[product.id] === size
                                                                                                                                  ? 'bg-[#3C2415] text-white border-[#3C2415]'
                                                                                                                                  : 'border-gray-300 text-gray-700 hover:border-[#3C2415]'
                                                                                                                                  }`}
                                                                                                              >
                                                                                                                        {size}
                                                                                                              </button>
                                                                                                    ))}
                                                                                          </div>

                                                                                          <button
                                                                                                    onClick={() => addToCart(product)}
                                                                                                    className="w-full bg-[#3C2415] text-white py-3 rounded-lg font-bold mb-3 hover:bg-[#2C1810] transition"
                                                                                          >
                                                                                                    Add to Cart
                                                                                          </button>

                                                                                          <div className="grid grid-cols-2 gap-2">
                                                                                                    <a
                                                                                                              href={mtnLink}
                                                                                                              target="_blank"
                                                                                                              className="bg-yellow-500 text-black py-2 rounded-lg text-center font-bold text-sm hover:bg-yellow-600 transition"
                                                                                                    >
                                                                                                              MTN MoMo
                                                                                                    </a>
                                                                                                    <a
                                                                                                              href={airtelLink}
                                                                                                              target="_blank"
                                                                                                              className="bg-red-600 text-white py-2 rounded-lg text-center font-bold text-sm hover:bg-red-700 transition"
                                                                                                    >
                                                                                                              Airtel Money
                                                                                                    </a>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            )
                                                  })}
                                        </div>
                              </div>

                              <footer className="bg-black text-gray-200 py-8 mt-12 border-t-4 border-[#3C2415]">
                                        <div className="max-w-7xl mx-auto px-4">
                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                                                            <div>
                                                                      <img src="/logo.png" alt="LEGIT" className="h-10 w-auto mb-3" />
                                                                      <p className="text-gray-400">Premium streetwear and vintage finds in Kampala.</p>
                                                            </div>

                                                            <div>
                                                                      <h3 className="font-bold text-[#D4A574] text-lg mb-3">Visit Us</h3>
                                                                      <p className="text-gray-400"> Pentagon City plaza shopping Mall</p>
                                                                      <p className="text-gray-400"> Kampala</p>
                                                                      <p className="text-gray-400 mt-2">Mon-Sat: 9am - 7pm</p>
                                                            </div>

                                                            <div>
                                                                      <h3 className="font-bold text-[#D4A574] text-lg mb-3">Connect</h3>
                                                                      <a href={`https://wa.me/${YOUR_NUMBER}`} target="_blank" className="block text-gray-400 hover:text-[#D4A574] mb-1">WhatsApp</a>
                                                                      <Link href="/about" className="block text-gray-400 hover:text-[#D4A574] mb-1">About Us</Link>
                                                                      <Link href="/admin" className="block text-gray-600 hover:text-gray-400 text-xs mt-4">Admin</Link>
                                                            </div>
                                                  </div>

                                                  <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
                                                            <p>© 2026 LEGIT FASHION STORE. All rights reserved.</p>
                                                  </div>
                                        </div>
                              </footer>
                    </div>
          )
}