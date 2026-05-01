'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Admin() {
          const [isLoggedIn, setIsLoggedIn] = useState(false)
          const [username, setUsername] = useState('')
          const [password, setPassword] = useState('')
          const [products, setProducts] = useState([])
          const [editingId, setEditingId] = useState(null)
          const [showChangePassword, setShowChangePassword] = useState(false)
          const [oldPassword, setOldPassword] = useState('')
          const [newPassword, setNewPassword] = useState('')
          const [confirmPassword, setConfirmPassword] = useState('')
          const [imagePreview, setImagePreview] = useState('')
          const [uploading, setUploading] = useState(false)

          const [formData, setFormData] = useState({
                    name: '',
                    price: '',
                    category: 'T-Shirts',
                    image: '',
                    sizes: []
          })

          const CLOUD_NAME = 'dzeoeaz7e'
          const UPLOAD_PRESET = 'legit_products'

          const CATEGORIES = ['T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Jeans', 'Shoes', 'Caps', 'Accessories']
          const CLOTHES_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
          const SHOES_SIZES = ['38', '39', '40', '41', '42', '43', '44', '45']
          const CAP_SIZES = ['One Size']

          const DEFAULT_USERNAME = 'admin'
          const DEFAULT_PASSWORD = 'legit2024'

          useEffect(() => {
                    const savedLogin = localStorage.getItem('legitAdminLoggedIn')
                    if (savedLogin === 'true') {
                              setIsLoggedIn(true)
                              loadProducts()
                    }

                    if (!localStorage.getItem('legitAdminPassword')) {
                              localStorage.setItem('legitAdminPassword', DEFAULT_PASSWORD)
                    }
          }, [])

          const loadProducts = () => {
                    const stored = JSON.parse(localStorage.getItem('legitProducts') || '[]')
                    setProducts(stored)
          }

          const handleLogin = (e) => {
                    e.preventDefault()
                    const savedPassword = localStorage.getItem('legitAdminPassword') || DEFAULT_PASSWORD

                    if (username === DEFAULT_USERNAME && password === savedPassword) {
                              setIsLoggedIn(true)
                              localStorage.setItem('legitAdminLoggedIn', 'true')
                              loadProducts()
                    } else {
                              alert('Wrong username or password')
                    }
          }

          const handleLogout = () => {
                    setIsLoggedIn(false)
                    localStorage.removeItem('legitAdminLoggedIn')
                    setUsername('')
                    setPassword('')
          }

          const handleChangePassword = (e) => {
                    e.preventDefault()
                    const savedPassword = localStorage.getItem('legitAdminPassword') || DEFAULT_PASSWORD

                    if (oldPassword !== savedPassword) {
                              alert('Old password is incorrect')
                              return
                    }

                    if (newPassword.length < 6) {
                              alert('New password must be at least 6 characters')
                              return
                    }

                    if (newPassword !== confirmPassword) {
                              alert('New passwords do not match')
                              return
                    }

                    localStorage.setItem('legitAdminPassword', newPassword)
                    alert('Password changed successfully!')
                    setShowChangePassword(false)
                    setOldPassword('')
                    setNewPassword('')
                    setConfirmPassword('')
          }

          const handleImageUpload = async (e) => {
                    const file = e.target.files[0]
                    if (!file) return

                    setUploading(true)
                    const data = new FormData()
                    data.append('file', file)
                    data.append('upload_preset', UPLOAD_PRESET)

                    try {
                              const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                                        method: 'POST',
                                        body: data
                              })
                              const fileData = await res.json()
                              setFormData({ ...formData, image: fileData.secure_url })
                              setImagePreview(fileData.secure_url)
                              setUploading(false)
                    } catch (err) {
                              alert('Upload failed. Check that upload preset is Unsigned.')
                              setUploading(false)
                    }
          }

          const getSizesForCategory = (category) => {
                    if (category === 'Shoes') return SHOES_SIZES
                    if (category === 'Caps') return CAP_SIZES
                    return CLOTHES_SIZES
          }

          const toggleSize = (size) => {
                    const currentSizes = formData.sizes
                    if (currentSizes.includes(size)) {
                              setFormData({ ...formData, sizes: currentSizes.filter(s => s !== size) })
                    } else {
                              setFormData({ ...formData, sizes: [...currentSizes, size] })
                    }
          }

          const handleSubmit = (e) => {
                    e.preventDefault()

                    if (formData.sizes.length === 0) {
                              alert('Please select at least one size')
                              return
                    }

                    if (!formData.image) {
                              alert('Please upload a product image')
                              return
                    }

                    const productData = {
                              id: editingId || Date.now(),
                              name: formData.name,
                              price: parseInt(formData.price),
                              category: formData.category,
                              image: formData.image,
                              sizes: formData.sizes
                    }

                    let updatedProducts
                    if (editingId) {
                              updatedProducts = products.map(p => p.id === editingId ? productData : p)
                    } else {
                              updatedProducts = [...products, productData]
                    }

                    localStorage.setItem('legitProducts', JSON.stringify(updatedProducts))
                    setProducts(updatedProducts)
                    resetForm()
                    alert(editingId ? 'Product updated!' : 'Product uploaded to Cloudinary!')
          }

          const handleEdit = (product) => {
                    setEditingId(product.id)
                    setFormData({
                              name: product.name,
                              price: product.price.toString(),
                              category: product.category,
                              image: product.image,
                              sizes: product.sizes
                    })
                    setImagePreview(product.image)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
          }

          const handleDelete = (id) => {
                    if (confirm('Delete this product?')) {
                              const updated = products.filter(p => p.id !== id)
                              localStorage.setItem('legitProducts', JSON.stringify(updated))
                              setProducts(updated)
                    }
          }

          const resetForm = () => {
                    setEditingId(null)
                    setFormData({ name: '', price: '', category: 'T-Shirts', image: '', sizes: [] })
                    setImagePreview('')
          }

          if (!isLoggedIn) {
                    return (
                              <div className="min-h-screen bg-[#3C2415] flex items-center justify-center p-4">
                                        <div className="bg-[#2C1810] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#5C4033]">
                                                  <div className="text-center mb-8">
                                                            <img src="/logo.png" alt="LEGIT FASHION" className="h-16 w-auto mx-auto mb-4" />
                                                            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
                                                            <p className="text-[#E8C89E] text-sm mt-2">LEGIT FASHION STORE</p>
                                                  </div>

                                                  <form onSubmit={handleLogin} className="space-y-4">
                                                            <div>
                                                                      <label className="block text-sm font-medium mb-2 text-[#E8C89E]">Username</label>
                                                                      <input
                                                                                type="text"
                                                                                value={username}
                                                                                onChange={(e) => setUsername(e.target.value)}
                                                                                className="w-full p-3 bg-[#3C2415] border border-[#5C4033] rounded-lg text-white focus:border-[#D4A574] outline-none"
                                                                                placeholder="admin"
                                                                                required
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <label className="block text-sm font-medium mb-2 text-[#E8C89E]">Password</label>
                                                                      <input
                                                                                type="password"
                                                                                value={password}
                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                className="w-full p-3 bg-[#3C2415] border border-[#5C4033] rounded-lg text-white focus:border-[#D4A574] outline-none"
                                                                                placeholder="••••••••"
                                                                                required
                                                                      />
                                                            </div>
                                                            <button
                                                                      type="submit"
                                                                      className="w-full bg-[#D4A574] text-[#2C1810] py-3 rounded-lg font-bold hover:bg-[#E8C89E] transition"
                                                            >
                                                                      Login
                                                            </button>
                                                  </form>

                                                  <div className="mt-6 text-center">
                                                            <Link href="/shop" className="text-[#E8C89E] hover:text-[#D4A574] text-sm">
                                                                      ← Back to Store
                                                            </Link>
                                                  </div>
                                        </div>
                              </div>
                    )
          }

          return (
                    <div className="min-h-screen bg-gray-50">
                              <header className="bg-[#2C1810] text-white shadow-lg">
                                        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                                  <div className="flex items-center gap-3">
                                                            <img src="/logo.png" alt="LEGIT" className="h-10 w-auto" />
                                                            <h1 className="text-xl font-bold">Admin Panel</h1>
                                                  </div>
                                                  <div className="flex items-center gap-4">
                                                            <button
                                                                      onClick={() => setShowChangePassword(!showChangePassword)}
                                                                      className="text-[#D4A574] hover:text-white text-sm"
                                                            >
                                                                      Change Password
                                                            </button>
                                                            <button
                                                                      onClick={handleLogout}
                                                                      className="bg-[#D4A574] text-[#2C1810] px-4 py-2 rounded-lg font-bold hover:bg-[#E8C89E]"
                                                            >
                                                                      Logout
                                                            </button>
                                                  </div>
                                        </div>
                              </header>

                              <div className="max-w-7xl mx-auto p-4">

                                        {showChangePassword && (
                                                  <div className="bg-white rounded-lg shadow p-6 mb-6 border-l-4 border-[#D4A574]">
                                                            <h2 className="text-xl font-bold mb-4 text-[#2C1810]">Change Password</h2>
                                                            <form onSubmit={handleChangePassword} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                      <input
                                                                                type="password"
                                                                                placeholder="Current Password"
                                                                                value={oldPassword}
                                                                                onChange={(e) => setOldPassword(e.target.value)}
                                                                                className="p-3 border rounded-lg"
                                                                                required
                                                                      />
                                                                      <input
                                                                                type="password"
                                                                                placeholder="New Password (min 6 chars)"
                                                                                value={newPassword}
                                                                                onChange={(e) => setNewPassword(e.target.value)}
                                                                                className="p-3 border rounded-lg"
                                                                                required
                                                                      />
                                                                      <input
                                                                                type="password"
                                                                                placeholder="Confirm New Password"
                                                                                value={confirmPassword}
                                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                className="p-3 border rounded-lg"
                                                                                required
                                                                      />
                                                                      <button
                                                                                type="submit"
                                                                                className="bg-[#3C2415] text-white py-3 rounded-lg font-bold hover:bg-[#2C1810] md:col-span-2"
                                                                      >
                                                                                Update Password
                                                                      </button>
                                                                      <button
                                                                                type="button"
                                                                                onClick={() => setShowChangePassword(false)}
                                                                                className="bg-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-400"
                                                                      >
                                                                                Cancel
                                                                      </button>
                                                            </form>
                                                  </div>
                                        )}

                                        <div className="bg-white rounded-lg shadow p-6 mb-8">
                                                  <h2 className="text-xl font-bold mb-4">
                                                            {editingId ? 'Edit Product' : 'Add New Product'}
                                                  </h2>
                                                  <form onSubmit={handleSubmit} className="space-y-4">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                      <input
                                                                                type="text"
                                                                                placeholder="Product Name"
                                                                                value={formData.name}
                                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                                className="p-3 border rounded-lg"
                                                                                required
                                                                      />
                                                                      <input
                                                                                type="number"
                                                                                placeholder="Price (UGX)"
                                                                                value={formData.price}
                                                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                                                className="p-3 border rounded-lg"
                                                                                required
                                                                      />
                                                            </div>

                                                            <div>
                                                                      <label className="block text-sm font-medium mb-2">Category</label>
                                                                      <select
                                                                                value={formData.category}
                                                                                onChange={(e) => setFormData({ ...formData, category: e.target.value, sizes: [] })}
                                                                                className="w-full p-3 border rounded-lg"
                                                                      >
                                                                                {CATEGORIES.map(cat => (
                                                                                          <option key={cat} value={cat}>{cat}</option>
                                                                                ))}
                                                                      </select>
                                                            </div>

                                                            <div>
                                                                      <label className="block text-sm font-medium mb-2">
                                                                                Available Sizes - Click to select
                                                                      </label>
                                                                      <div className="flex flex-wrap gap-2">
                                                                                {getSizesForCategory(formData.category).map(size => (
                                                                                          <button
                                                                                                    key={size}
                                                                                                    type="button"
                                                                                                    onClick={() => toggleSize(size)}
                                                                                                    className={`px-4 py-2 border-2 rounded-lg font-medium transition ${formData.sizes.includes(size)
                                                                                                              ? 'bg-[#3C2415] text-white border-[#3C2415]'
                                                                                                              : 'bg-white text-gray-700 border-gray-300 hover:border-[#3C2415]'
                                                                                                              }`}
                                                                                          >
                                                                                                    {size}
                                                                                          </button>
                                                                                ))}
                                                                      </div>
                                                                      <p className="text-xs text-gray-500 mt-1">
                                                                                Selected: {formData.sizes.length > 0 ? formData.sizes.join(', ') : 'None'}
                                                                      </p>
                                                            </div>

                                                            <div>
                                                                      <label className="block text-sm font-medium mb-2">Product Image</label>
                                                                      <input
                                                                                type="file"
                                                                                accept="image/*"
                                                                                onChange={handleImageUpload}
                                                                                className="w-full p-3 border rounded-lg"
                                                                                disabled={uploading}
                                                                      />
                                                                      {uploading && <p className="text-[#D4A574] text-sm mt-2">Uploading to Cloudinary...</p>}
                                                                      {imagePreview && (
                                                                                <div className="mt-3">
                                                                                          <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border" />
                                                                                          <p className="text-xs text-green-600 mt-1">✓ Uploaded to Cloudinary</p>
                                                                                </div>
                                                                      )}
                                                            </div>

                                                            <button
                                                                      type="submit"
                                                                      disabled={uploading}
                                                                      className="w-full bg-[#3C2415] text-white py-3 rounded-lg font-bold hover:bg-[#2C1810] disabled:opacity-50"
                                                            >
                                                                      {uploading ? 'Uploading...' : editingId ? 'Update Product' : 'Add Product'}
                                                            </button>
                                                            {editingId && (
                                                                      <button
                                                                                type="button"
                                                                                onClick={resetForm}
                                                                                className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-400"
                                                                      >
                                                                                Cancel Edit
                                                                      </button>
                                                            )}
                                                  </form>
                                        </div>

                                        <div className="bg-white rounded-lg shadow p-6">
                                                  <h2 className="text-xl font-bold mb-4">All Products ({products.length})</h2>
                                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {products.map(product => (
                                                                      <div key={product.id} className="border rounded-lg p-4">
                                                                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-3" />
                                                                                <h3 className="font-bold">{product.name}</h3>
                                                                                <p className="text-gray-600 text-sm">{product.category}</p>
                                                                                <p className="font-bold text-lg text-[#3C2415]">UGX {product.price.toLocaleString()}</p>
                                                                                <p className="text-sm text-gray-500">Sizes: {product.sizes.join(', ')}</p>
                                                                                <div className="flex gap-2 mt-3">
                                                                                          <button
                                                                                                    onClick={() => handleEdit(product)}
                                                                                                    className="flex-1 bg-blue-600 text-white py-2 rounded text-sm font-bold hover:bg-blue-700"
                                                                                          >
                                                                                                    Edit
                                                                                          </button>
                                                                                          <button
                                                                                                    onClick={() => handleDelete(product.id)}
                                                                                                    className="flex-1 bg-red-600 text-white py-2 rounded text-sm font-bold hover:bg-red-700"
                                                                                          >
                                                                                                    Delete
                                                                                          </button>
                                                                                </div>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>

                                        <div className="mt-6 text-center">
                                                  <Link href="/shop" className="text-gray-600 hover:text-black">
                                                            ← Back to Store
                                                  </Link>
                                        </div>
                              </div>
                    </div>
          )
}