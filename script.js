        // Sample product data with image URLs
        const products = [
            {
                id: 1,
                name: "LUXE MacBook Pro 16\"",
                price: 2799,
                specs: "M3 Max Chip, 32GB RAM, 1TB SSD, Liquid Retina XDR",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 2,
                name: "LUXE Dell XPS 13 Plus",
                price: 1599,
                specs: "Intel i7-13700H, 32GB RAM, 1TB SSD, OLED 3.5K",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 3,
                name: "LUXE Gaming Beast RTX",
                price: 2299,
                specs: "RTX 4080, AMD Ryzen 9, 32GB RAM, 2TB NVMe",
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 4,
                name: "LUXE ThinkPad X1 Extreme",
                price: 1999,
                specs: "Intel i9, 64GB RAM, 2TB SSD, 16\" 4K OLED",
                image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 5,
                name: "LUXE Surface Studio 2025",
                price: 2199,
                specs: "Intel i7, 32GB RAM, 1TB SSD, 14.4\" PixelSense",
                image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 6,
                name: "LUXE ASUS ROG Zephyrus",
                price: 1799,
                specs: "RTX 4070, AMD Ryzen 7, 32GB RAM, 1TB SSD",
                image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop&auto=format"
            },
            {
                id: 7,
                name: "LUXE Macbook Air M1 98%",
                price: 559,
                specs: "Apple M1 Chip Chip (8C / 7GPU), RAM/Storage : 8GB | 128GB",
                image: "https://cccomputerkh.com/C-APPLE/airm1-1.jpg"
            },
            {
                id: 8,
                name: "LUXE 2025 Macbook Air 13 M4 Chip",
                price: 899,
                specs: "Apple M4 Chip (10C / 10GPU), 16GB Unified Memory, Storage : 512GB",
                image: "https://cccomputerkh.com/C-APPLE/M4-1.jpg"
            },
            {
                id: 9,
                name: "LUXE 2025 Macbook Air 13 M4 Chip",
                price: 1199,
                specs: "Apple M4 Chip (10C / 10GPU), 16GB Unified Memory, Storage : 256GB",
                image: "https://cccomputerkh.com/C-APPLE/M4-3.jpg"
            },
            {
                id: 10,
                name: "LUXE Apple iMac 24″ M3 DEMO",
                price: 999,
                specs: "Apple M3 8-Core CPU 8-Core GPU,  Memory: 8GB Unified | 256GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/blue-m3.jpg"
            },
            {
                id: 11,
                name: "LUXE iMac M3 24″ Retina 4.5K",
                price: 1449,
                specs: "Apple M3 8-Core CPU 8-Core GPU, 8GB Unified | 256GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/GREEN-M3.jpg"
            },
            {
                id: 12,
                name: "LUXE Mac M3 24″ Retina 4.5K",
                price: 1799,
                specs: "Apple M3 8-Core CPU 10-Core GPU,  Memory: 8GB Unified | 256GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/PIN-M3.jpg"
            },
            {
                id: 13,
                name: "LUXE iMac M3 24″ Retina 4.5K",
                price: 1149,
                specs: "Apple M3 8-Core CPU 10-Core GPU,  Memory: 8GB Unified | 256GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/SILVER-M2.jpg"
            },
            {
                id: 14,
                name: "LUXE iMac 24″ M4 Chip 2024",
                price: 2049,
                specs: " Apple M4 10-Core CPU 10-Core GPU, 24GB Unified | 512GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/MD2U4.jpg"
            },
            {
                id: 15,
                name: "LUXE iMac 24″ M4 Chip 2024",
                price: 2049,
                specs: " Apple M4 10-Core CPU 10-Core GPU, 24GB Unified | 512GB SSD",
                image: "https://cccomputerkh.com/C-APPLE/MD2Q4.jpg"
            },
            {
                id: 16,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: "  Color : Blue, Code: AN/AS/KNxxxA1",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-B.jpg"
            },
            {
                id: 17,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: " Color:Midnight, Code: AN/AS/KNxxxA2",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-M.jpg"
            },
            {
                id: 18,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: " Color : Purple, Code: AN/AS/KNxxxA3",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-P.jpg"
            },
            {
                id: 19,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: " Color : Orange, Code: AN/AS/KNxxxA4",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-O.jpg"
            },
            {
                id: 20,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: " Color:Starligh, Code: AN/AS/KNxxxA4",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-S.jpg"
            },
            {
                id: 21,
                name: "LUXE Apple Air Pods Max",
                price: 539,
                specs: "  Color : Blue, Code: AN/AS/KNxxxA1",
                image: "https://cccomputerkh.com/C-APPLE/Air%20Pods-Max-B.jpg"
            },
            {
                id: 22,
                name: "LUXE Apple AirPods 4 One",
                price: 159,
                specs: "Note : falcon Add $20, Code: AN/AS/KNxxxA4",
                image: "https://cccomputerkh.com/C-APPLE/AirPods4.jpg"
            },
            {
                id: 23,
                name: "LUXE Apple AirPods 4 ANC",
                price: 189,
                specs: "Note : falcon Add $20, Code: AN/AS/KNxxxA4",
                image: "https://cccomputerkh.com/C-APPLE/AirPods4.jpg"
            },
            {
                id: 24,
                name: "LUXE Apple AirPods Pro2 (TypeC)",
                price: 219,
                specs: "Note : falcon Add $20, Code: AN/AS/KNxxxA4",
                image: "https://cccomputerkh.com/C-APPLE/Airpods-Pro2.jpg"
            },
        ];

        let cart = [];

        // Load products
        function loadProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                        <i class="fas fa-laptop fallback-icon"></i>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-specs">${product.specs}</div>
                    <div class="product-price">${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `).join('');
        }

        // Handle image loading errors
        function handleImageError(img) {
            img.style.display = 'none';
            img.parentElement.querySelector('.fallback-icon').style.display = 'block';
        }

        // Navigation
        function showSection(sectionName) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionName).classList.add('active');
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Close mobile menu after selecting a section
            const navLinks = document.getElementById('navLinks');
            const menuBtn = document.querySelector('.mobile-menu-btn i');
            navLinks.classList.remove('mobile-active');
            menuBtn.className = 'fas fa-bars';
        }

        // Theme toggle
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeIcon.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fas fa-sun';
            }
        }

        // Mobile menu functionality
        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuBtn = document.querySelector('.mobile-menu-btn i');
            
            navLinks.classList.toggle('mobile-active');
            
            if (navLinks.classList.contains('mobile-active')) {
                menuBtn.className = 'fas fa-times';
            } else {
                menuBtn.className = 'fas fa-bars';
            }
        }

        // Cart functionality
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartCount();
            showNotification(`${product.name} added to cart!`);
        }

        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.querySelector('.cart-count').textContent = count;
        }

        function openCart() {
            updateCartDisplay();
            document.getElementById('cartModal').style.display = 'block';
        }

        function closeCart() {
            document.getElementById('cartModal').style.display = 'none';
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #718096; padding: 2rem;">Your cart is empty</p>';
                cartTotal.textContent = '0.00';
                return;
            }
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong><br>
                        <small style="color: #718096;">${item.price.toLocaleString()} x ${item.quantity}</small>
                    </div>
                    <div>
                        <button onclick="removeFromCart(${item.id})" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 500;">Remove</button>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toLocaleString();
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartDisplay();
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const confirmed = confirm(`Total: ${total.toLocaleString()}\n\nProceed with payment?`);
            
            if (confirmed) {
                showNotification('Payment successful! Thank you for choosing LUXE!');
                cart = [];
                updateCartCount();
                closeCart();
            }
        }

        // Contact form
        function submitContact(event) {
            event.preventDefault();
            showNotification('Thank you for your message! We will get back to you soon.');
            event.target.reset();
        }

        // Notification system
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) {
                closeCart();
            }
            
            // Close mobile menu when clicking outside
            const navLinks = document.getElementById('navLinks');
            const navContainer = document.querySelector('.nav-container');
            if (!navContainer.contains(event.target) && navLinks.classList.contains('mobile-active')) {
                const menuBtn = document.querySelector('.mobile-menu-btn i');
                navLinks.classList.remove('mobile-active');
                menuBtn.className = 'fas fa-bars';
            }
        }

        // Smooth scroll for navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Add smooth scrolling behavior
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Initialize products
            loadProducts();
            
            // Add entrance animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements for animation
            document.querySelectorAll('.feature-card, .product-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });

        // Keyboard navigation support
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && document.getElementById('cartModal').style.display === 'block') {
                closeCart();
            }
            
            // Close mobile menu with escape key
            if (event.key === 'Escape') {
                const navLinks = document.getElementById('navLinks');
                const menuBtn = document.querySelector('.mobile-menu-btn i');
                navLinks.classList.remove('mobile-active');
                menuBtn.className = 'fas fa-bars';
            }
        });

        // Add loading state for cart operations
        function addToCartWithLoading(productId) {
            const button = event.target;
            const originalText = button.textContent;
            
            button.textContent = 'Adding...';
            button.disabled = true;
            
            setTimeout(() => {
                addToCart(productId);
                button.textContent = originalText;
                button.disabled = false;
            }, 300);
        }