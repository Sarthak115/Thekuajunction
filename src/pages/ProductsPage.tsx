import React from 'react';

const ProductsPage: React.FC = () => {
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

  const products = [
    {
      id: 1,
      name: 'Classic Jaggery Thekua',
      price: '₹200 / 500g',
      description: 'Traditional thekua made with pure jaggery and wheat flour, following age-old recipes from Bihar.',
      image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/5718050/pexels-photo-5718050.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Jaggery', 'Ghee', 'Cardamom'],
      category: 'Traditional'
    },
    {
      id: 2,
      name: 'Coconut Thekua',
      price: '₹250 / 500g',
      description: 'Delicious coconut-flavored thekua with fresh coconut shavings and aromatic spices.',
      image: 'https://images.pexels.com/photos/4198043/pexels-photo-4198043.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Coconut', 'Jaggery', 'Ghee'],
      category: 'Flavored'
    },
    {
      id: 3,
      name: 'Premium Mixed Thekua',
      price: '₹300 / 500g',
      description: 'A premium blend of different thekua varieties with nuts and dry fruits.',
      image: 'https://images.pexels.com/photos/5864032/pexels-photo-5864032.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Mixed Nuts', 'Dry Fruits', 'Jaggery'],
      category: 'Premium'
    },
    {
      id: 4,
      name: 'Sesame Thekua',
      price: '₹220 / 500g',
      description: 'Crunchy thekua enriched with roasted sesame seeds for extra flavor and nutrition.',
      image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/6824505/pexels-photo-6824505.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Sesame Seeds', 'Jaggery', 'Ghee'],
      category: 'Healthy'
    },
    {
      id: 5,
      name: 'Cardamom Special Thekua',
      price: '₹280 / 500g',
      description: 'Aromatic thekua infused with premium cardamom for a royal taste experience.',
      image: 'https://images.pexels.com/photos/5718481/pexels-photo-5718481.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/4198043/pexels-photo-4198043.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Green Cardamom', 'Jaggery', 'Pure Ghee'],
      category: 'Aromatic'
    },
    {
      id: 6,
      name: 'Kheer Thekua',
      price: '₹320 / 500g',
      description: 'Soft and creamy thekua with milk solids, perfect for special occasions.',
      image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/5718050/pexels-photo-5718050.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: ['Wheat Flour', 'Milk Solids', 'Sugar', 'Ghee'],
      category: 'Special'
    }
  ];

  const categories = ['All', 'Traditional', 'Flavored', 'Premium', 'Healthy', 'Aromatic', 'Special'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-bg">
      <section className="px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-accent">Our Products</h1>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Discover our authentic collection of traditional thekuas, handcrafted with love and the finest ingredients from Bihar and Jharkhand.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-card text-text hover:bg-accent hover:text-white border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text">
                  {product.name}
                </h3>
                <p className="text-text mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-accent mb-2">Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-bg text-text px-3 py-1 rounded-full text-sm border border-border"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-accent">
                    {product.price}
                  </p>
                  
                  <button
                    className="bg-accent hover:bg-accent-hover text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold relative overflow-hidden transform hover:scale-105"
                    onClick={addRippleEffect}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-center mb-8 text-accent">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 text-accent">Bulk Order Discount</h3>
              <p className="text-text mb-4">Order 5kg or more and get 15% off on your total purchase!</p>
              <button 
                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors duration-300 relative overflow-hidden"
                onClick={addRippleEffect}
              >
                Learn More
              </button>
            </div>
            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 text-accent">Festival Special</h3>
              <p className="text-text mb-4">Free delivery on orders above ₹500 during festival seasons!</p>
              <button 
                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors duration-300 relative overflow-hidden"
                onClick={addRippleEffect}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;