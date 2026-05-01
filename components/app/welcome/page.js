'use client'
import Link from 'next/link'

export default function Welcome() {
          const YOUR_NUMBER = '256700899799'
          const SHOP_ADDRESS = ' Pentagon city plaza shopping Mall, room number PC 39 $ 64'

          return (
                    <div className="min-h-screen bg-[#3C2415] text-white">
                              <header className="bg-[#2C1810] border-b border-[#5C4033]">
                                        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                                  <img src="/logo.png" alt="LEGIT FASHION" className="h-14 w-auto" />
                                                  <div className="flex items-center gap-6">
                                                            <a href={`tel:${YOUR_NUMBER}`} className="text-[#D4A574] hover:text-white hidden md:block">
                                                                      0764266075
                                                            </a>
                                                            <Link href="/shop" className="bg-[#D4A574] text-[#2C1810] px-6 py-2 rounded-full font-bold hover:bg-[#E8C89E] transition">
                                                                      Enter Shop
                                                            </Link>
                                                  </div>
                                        </div>
                              </header>

                              <section className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810] to-[#3C2415]"></div>
                                        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
                                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                                            <div>
                                                                      <img src="/logo.png" alt="LEGIT FASHION STORE" className="h-24 w-auto mb-8" />
                                                                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                                                                Dress <span className="text-[#D4A574]">LEGIT.</span><br />
                                                                                Stay <span className="text-[#D4A574]">Authentic.</span>
                                                                      </h1>
                                                                      <p className="text-xl text-[#E8C89E] mb-8 leading-relaxed">
                                                                                Kampala's #1 destination for premium streetwear and vintage gems.
                                                                                Every piece verified. No fakes. Same-day delivery across the city.
                                                                      </p>

                                                                      <div className="grid grid-cols-2 gap-4 mb-10">
                                                                                <div className="bg-[#2C1810] border border-[#5C4033] p-4 rounded-xl">
                                                                                          <h3 className="font-bold text-[#D4A574] text-2xl mb-1">100%</h3>
                                                                                          <p className="text-sm text-[#E8C89E]">Authentic Guaranteed</p>
                                                                                </div>
                                                                                <div className="bg-[#2C1810] border border-[#5C4033] p-4 rounded-xl">
                                                                                          <h3 className="font-bold text-[#D4A574] text-2xl mb-1">Same Day</h3>
                                                                                          <p className="text-sm text-[#E8C89E]">Kampala Delivery</p>
                                                                                </div>
                                                                                <div className="bg-[#2C1810] border border-[#5C4033] p-4 rounded-xl">
                                                                                          <h3 className="font-bold text-[#D4A574] text-2xl mb-1">Est. 2026</h3>
                                                                                          <p className="text-sm text-[#E8C89E]">Pentagon Ctiy Plaza Shopping mall, KLA</p>
                                                                                </div>
                                                                                <div className="bg-[#2C1810] border border-[#5C4033] p-4 rounded-xl">
                                                                                          <h3 className="font-bold text-[#D4A574] text-2xl mb-1">MTN/Airtel</h3>
                                                                                          <p className="text-sm text-[#E8C89E]">Mobile Money</p>
                                                                                </div>
                                                                      </div>

                                                                      <div className="flex flex-col sm:flex-row gap-4">
                                                                                <Link
                                                                                          href="/shop"
                                                                                          className="bg-[#D4A574] text-[#2C1810] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#E8C89E] transition text-center"
                                                                                >
                                                                                          Shop New Drops
                                                                                </Link>
                                                                                <a
                                                                                          href={`https://wa.me/${YOUR_NUMBER}?text=Hi, I saw your website`}
                                                                                          target="_blank"
                                                                                          className="border-2 border-[#D4A574] text-[#D4A574] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D4A574] hover:text-[#2C1810] transition text-center"
                                                                                >
                                                                                          WhatsApp Us
                                                                                </a>
                                                                      </div>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-4">
                                                                      <img
                                                                                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500"
                                                                                alt="Streetwear Style"
                                                                                className="rounded-2xl h-72 w-full object-cover shadow-2xl"
                                                                      />
                                                                      <img
                                                                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
                                                                                alt="Fashion Drop"
                                                                                className="rounded-2xl h-72 w-full object-cover shadow-2xl mt-12"
                                                                      />
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              <section className="bg-[#2C1810] py-12 border-t border-[#5C4033]">
                                        <div className="max-w-7xl mx-auto px-4">
                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                                            <div>
                                                                      <h3 className="font-bold text-[#D4A574] text-xl mb-2">📍 Visit Our Store</h3>
                                                                      <p className="text-[#E8C89E]">{SHOP_ADDRESS}</p>
                                                                      <p className="text-[#E8C89E] text-sm mt-1">Mon-Sat: 9AM - 7PM</p>
                                                            </div>
                                                            <div>
                                                                      <h3 className="font-bold text-[#D4A574] text-xl mb-2">📞 Contact Us</h3>
                                                                      <p className="text-[#E8C89E]">0700899799</p>
                                                                      <p className="text-[#E8C89E] text-sm mt-1">WhatsApp Available 24/7</p>
                                                            </div>
                                                            <div>
                                                                      <h3 className="font-bold text-[#D4A574] text-xl mb-2">💳 Easy Payment</h3>
                                                                      <p className="text-[#E8C89E]">MTN MoMo & Airtel Money</p>
                                                                      <p className="text-[#E8C89E] text-sm mt-1">Cash on Delivery</p>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              <footer className="bg-[#2C1810] py-6 border-t border-[#5C4033]">
                                        <div className="max-w-7xl mx-auto px-4 text-center">
                                                  <img src="/logo.png" alt="LEGIT" className="h-8 w-auto mx-auto mb-3 opacity-60" />
                                                  <p className="text-xs text-[#5C4033]">© 2026 LEGIT FASHION STORE. All rights reserved.</p>
                                        </div>
                              </footer>
                    </div>
          )
}