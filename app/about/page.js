import Link from 'next/link'

export default function About() {
          return (
                    <div className="min-h-screen bg-black text-white">
                              <header className="bg-black sticky top-0 z-10 border-b border-gray-800">
                                        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                                  <Link href="/" className="flex items-center gap-3">
                                                            <img
                                                                      src="/logo.png"
                                                                      alt="LEGIT FASHION STORE"
                                                                      className="h-14 w-auto"
                                                            />
                                                  </Link>
                                                  <Link href="/" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
                                                            Shop Now
                                                  </Link>
                                        </div>
                              </header>

                              <div className="max-w-4xl mx-auto px-4 py-16">

                                        {/* Hero with Logo */}
                                        <div className="text-center mb-16">
                                                  <img
                                                            src="/logo.png"
                                                            alt="LEGIT FASHION STORE"
                                                            className="h-32 w-auto mx-auto mb-8"
                                                  />
                                                  <h1 className="text-5xl font-bold mb-4">About LEGIT FASHION</h1>
                                                  <p className="text-xl text-gray-400">Premium streetwear. Authentic pieces. Kampala.</p>
                                        </div>

                                        {/* Our Story */}
                                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl mb-8">
                                                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                                                            LEGIT FASHION started in 2024 with one mission: bring real, authentic streetwear to Kampala.
                                                            No fakes. No replicas. No compromise.
                                                  </p>
                                                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                                                            We hand-pick every vintage tee, jacket, and sneaker. If it's not legit, we don't stock it.
                                                            That's why our customers keep coming back.
                                                  </p>
                                                  <p className="text-gray-300 text-lg leading-relaxed">
                                                            From Kisementi to the world - we're building Uganda's most trusted streetwear brand.
                                                  </p>
                                        </div>

                                        {/* Why LEGIT */}
                                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl mb-8">
                                                  <h2 className="text-3xl font-bold mb-6">Why Shop LEGIT</h2>
                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div>
                                                                      <h3 className="font-bold text-xl mb-2 text-yellow-500">✓ 100% Authentic</h3>
                                                                      <p className="text-gray-400">Every piece verified. Money-back guarantee if fake.</p>
                                                            </div>
                                                            <div>
                                                                      <h3 className="font-bold text-xl mb-2 text-yellow-500">✓ Same-Day Delivery</h3>
                                                                      <p className="text-gray-400">Order before 3pm, get it today in Kampala.</p>
                                                            </div>
                                                            <div>
                                                                      <h3 className="font-bold text-xl mb-2 text-yellow-500">✓ Easy Payments</h3>
                                                                      <p className="text-gray-400">MTN MoMo, Airtel Money, or Cash on delivery.</p>
                                                            </div>
                                                            <div>
                                                                      <h3 className="font-bold text-xl mb-2 text-yellow-500">✓ Perfect Fit</h3>
                                                                      <p className="text-gray-400">All sizes listed. Free exchange if wrong size.</p>
                                                            </div>
                                                  </div>
                                        </div>

                                        {/* Visit Us */}
                                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl mb-12">
                                                  <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            <div>
                                                                      <p className="text-gray-300 mb-3"><b className="text-white">Address:</b><br />Plot 12, Kampala Road<br />Kisementi, Kampala</p>
                                                                      <p className="text-gray-300 mb-3"><b className="text-white">Hours:</b><br />Monday - Saturday<br />9:00 AM - 7:00 PM</p>
                                                                      <p className="text-gray-300 mb-6"><b className="text-white">Phone:</b><br />0756 974 646</p>

                                                                      <a
                                                                                href="https://wa.me/256756974646?text=Hi, I'd like to visit your store"
                                                                                target="_blank"
                                                                                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
                                                                      >
                                                                                WhatsApp Us
                                                                      </a>
                                                            </div>
                                                            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                                                                      <p className="text-gray-500">Map coming soon</p>
                                                            </div>
                                                  </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="text-center">
                                                  <Link
                                                            href="/"
                                                            className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition"
                                                  >
                                                            Start Shopping
                                                  </Link>
                                        </div>

                              </div>

                              <footer className="border-t border-gray-800 mt-16 py-8">
                                        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
                                                  <img src="/logo.png" alt="LEGIT" className="h-8 w-auto mx-auto mb-4 opacity-50" />
                                                  <p>© 2024 LEGIT FASHION STORE. All rights reserved.</p>
                                        </div>
                              </footer>
                    </div>
          )
}