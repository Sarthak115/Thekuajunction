import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Truck, CreditCard, MapPin } from 'lucide-react';

const Order: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Classic Jaggery Thekua', price: 200, quantity: 1, weight: '500g' },
    { id: 2, name: 'Coconut Thekua', price: 250, quantity: 2, weight: '500g' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const addRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-bg">
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-accent">Place Your Order</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                Delivery Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-text font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-text font-semibold mb-2">Complete Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your complete delivery address"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-semibold mb-2">PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter PIN code"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    Payment Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent"
                      />
                      <span className="text-text">Cash on Delivery (COD)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent"
                      />
                      <span className="text-text">Online Payment (UPI/Card)</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 relative overflow-hidden"
                  onClick={addRippleEffect}
                >
                  Place Order - ₹{total}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <ShoppingCart className="w-8 h-8" />
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-bg rounded-lg p-4 border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-text">{item.name}</h3>
                        <p className="text-sm text-text opacity-75">{item.weight}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-text">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-bold text-accent">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-text">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-text">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Shipping:
                  </span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-sm text-green-600">🎉 Free shipping on orders above ₹500!</p>
                )}
                <div className="flex justify-between text-xl font-bold text-accent border-t border-border pt-3">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 bg-bg rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-accent mb-2">Delivery Information</h4>
                <ul className="text-sm text-text space-y-1">
                  <li>• Estimated delivery: 3-5 business days</li>
                  <li>• Free delivery on orders above ₹500</li>
                  <li>• Cash on Delivery available</li>
                  <li>• Fresh products guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;