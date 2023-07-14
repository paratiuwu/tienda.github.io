// Lista de productos disponibles
const products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 15 },
    { name: 'Producto 3', price: 20 },
    { name: 'Producto 4', price: 12 },
  ];
  
  // Carrito de compras
  let cartItems = [];
  
  // Función para agregar un producto al carrito
  function addToCart(productName) {
    const product = products.find(item => item.name === productName);
    if (product) {
      cartItems.push(product);
      alert(`¡${product.name} se agregó al carrito!`);
      updateCart();
    } else {
      alert('Producto no encontrado');
    }
  }
  
  // Función para actualizar el contenido del carrito de compras
  function updateCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';
  
    if (cartItems.length === 0) {
      cart.innerHTML = 'El carrito está vacío';
    } else {
      cartItems.forEach(item => {
        const newItem = document.createElement('div');
        newItem.textContent = `${item.name} - $${item.price}`;
        cart.appendChild(newItem);
      });
    }
  }
  
  // Función para calcular el total de la compra
  function calculateTotal() {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    return total;
  }
  
  // Función para realizar el pago
  function checkout() {
    const total = calculateTotal();
    if (total > 0) {
      alert(`Total a pagar: $${total}`);
      cartItems = [];
      updateCart();
    } else {
      alert('El carrito está vacío. Agrega productos antes de pagar.');
    }
  }
  
  // Función para mostrar/ocultar la descripción de un producto
  function toggleDescription(element) {
    const description = element.querySelector('.description');
    description.classList.toggle('show');
  }
  
  // Función para aplicar descuento a los productos
  function applyDiscount(discountPercentage) {
    const discountedPrices = products.map(product => {
      const discountedPrice = product.price * (1 - discountPercentage / 100);
      return { ...product, price: discountedPrice };
    });
  
    products.splice(0, products.length, ...discountedPrices);
    updateProductPrices();
  }
  
  // Función para actualizar los precios de los productos
  function updateProductPrices() {
    const productElements = document.querySelectorAll('.product');
    productElements.forEach((element, index) => {
      const priceElement = element.querySelector('.price');
      priceElement.textContent = `$${products[index].price.toFixed(2)}`;
    });
  }
  
  // Actualizar el contenido del carrito al cargar la página
  window.addEventListener('load', updateCart);
  

