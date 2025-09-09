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
            {
                id: 25,
                name: "LUXE Asus VivoBook 16 M1605YA-MB702W",
                price: 549,
                specs: "Ryzen™ 5 7430U 6-Cores 12-Threads, RAM : 16GB = 24GB = $30, M.2 : 512GB PCIe 4.0",
                image: "https://cccomputerkh.com/C-ASUS/X1605VA-A.jpg"
            },
            {
                id: 26,
                name: "LUXE Asus VivoBook 16 M1605YA-MB702W",
                price: 749,
                specs: " Intel® Core™ i7 1255U Processor, RAM : 8GB = 16GB = $20, Storage : 512GB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/F1605ZA.jpg"
            },
            {
                id: 27,
                name: "LUXE Asus VivoBook S15 | K5504VA",
                price: 599,
                specs: " 13Th Gen Intel® Core™ i5-13500H, 8GB LPDDR5 | M.2 : 512GB PCIe 4.0, GPU : Intel® Iris Xe Graphics",
                image: "https://cccomputerkh.com/C-ASUS/K5504.jpg"
            },
            {
                id: 28,
                name: "LUXE Asus VivoBook 16 M1605YA-MB702W",
                price: 549,
                specs: " Intel® Core™ i5 13420H Processor, RAM : 8GB DDR4 = 16GB = $20",
                image: "https://cccomputerkh.com/C-ASUS/X1502VA.jpg"
            },
            {
                id: 29,
                name: "LUXE ASUS VivoBook X15 | X1504VA-NJ1860",
                price: 449,
                specs: "Intel® Core™ i5 1334U Processor, RAM : 8GB = 12GB = $10",
                image: "https://cccomputerkh.com/C-ASUS/F1504VA.jpg"
            },
            {
                id: 30,
                name: "LUXE ASUS VivoBook X15 | X1504VA",
                price: 349,
                specs: "Intel® Core™ i3 1315U Processor, RAM : 4GB = 8GB = $10",
                image: "https://cccomputerkh.com/C-ASUS/X1504VA.jpg"
            },
            {
                id: 31,
                name: "LUXE ASUS VivoBook X15 | X1504VA",
                price: 749,
                specs: "Intel® Core™ i3 1315U Processor, RAM : 8GB = 16GB = $10",
                image: "https://cccomputerkh.com/C-ASUS/V3607VM.jpg"
            },
            {
                id: 32,
                name: "LUXE ASUS VivoBook Go 15 OLED | E1504FA",
                price: 559,
                specs: "AMD Ryzen 5-7520U Processor, RAM : 16GB / 512GB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/e1504.jpg"
            },
            {
                id: 33,
                name: "LUXE ASUS VivoBook Go 15 FHD | E1504FA",
                price: 499,
                specs: "AMD Ryzen 5-7520U Processor, RAM : 16GB / 512GB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/e1504-1.jpg"
            },
            {
                id: 34,
                name: "LUXE ASUS ROG Strix G17 | G713PI",
                price: 1499,
                specs: "AMD Ryzen 9 7845Hx 12-Core 24-Thread, RAM : 16GB (DDR5) = 32GB = $40, Storage : 512GB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/G713Pi.jpg"
            },
            {
                id: 35,
                name: "LUXE ASUS ROG Strix G17 | G713PI",
                price: 1599,
                specs: "AMD Ryzen 9 7845Hx 12-Core 24-Thread, RAM : 16GB (DDR5) = 32GB = $40, Storage : 1TB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/G614JU-I5.jpg"
            },
            {
                id: 36,
                name: "LUXE ASUS ROG Strix G17 | G713PI",
                price: 1699,
                specs: "AMD Ryzen 9 7845Hx 12-Core 24-Thread, RAM : 32GB (DDR5) = 64GB = $70, Storage : 1TB M.2 PCIe",
                image: "https://cccomputerkh.com/C-ASUS/G614JU-N3252W.jpg"
            },
            {
                id: 37,
                name: "LUXE ROG Strix G16 | G615JHR-S5097W",
                price: 1439,
                specs: "14th Gen Intel® Core™ i7-14650HX, RAM : 16GB (DDR5) = 32GB = $60, Storage : 1TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ASUS/G615JHR.jpg"
            },
            {
                id: 38,
                name: "LUXE ROG Strix G16 | G615JMR-RV163W",
                price: 1559,
                specs: "14th Gen Intel® Core™ i7-14650HX, RAM : 32GB (DDR5) = 64GB = $90, Storage : 1TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ASUS/G615JMR.jpg"
            },
            {
                id: 39,
                name: "LUXE ROG Strix G16 | G615LP-S5132W",
                price: 1899,
                specs: "Intel® Core™ Ultra 9 Processor 275HX, RAM : 16GB (DDR5) = 32GB = $60, Storage : 1TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ASUS/G615LP.jpg"
            },
            {
                id: 40,
                name: "LUXE Dell Alienware M16 R2 | CPO",
                price: 1299,
                specs: "CPU : Intel® Core™ Ultra 7 155H 4.8 GHz, RAM : 16GB DDR5 (Upto 32GB add 50$), Storage : 1TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ALIENWARE/AM16.jpg"
            },
            {
                id: 41,
                name: "LUXE Dell Alienware X16 R2",
                price: 1699,
                specs: "CPU : Intel® Core™ Ultra 7 155H 4.8 GHz, RAM : 16GB LPDDR5X 7467MT/s, Storage : 1TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ALIENWARE/X16-R2.jpg"
            },
            {
                id: 42,
                name: "LUXE Alienware 18 Area 51 GAMING",
                price: 3349,
                specs: "CPU : Intel Core Ultra 9 275HX (24C/24T), RAM : 32GB DDR5 = 64GB add 90$, Storage : 2TB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-ALIENWARE/Aura18-4.jpg"
            },
            {
                id: 43,
                name: "LUXE LENOVO LEGION R7000P 2025",
                price: 1149,
                specs: " Intel® Core™ i7-14650HX 16-C 24-T, RAM : 32GB DDR5 = 64GB = $90, Storage : 1TB M.2 PCIe",
                image: "https://cccomputerkh.com/C-LENOVO/R7000P-AD10R.jpg"
            },
            {
                id: 44,
                name: "LUXE LENOVO LEGION Y7000P",
                price: 1289,
                specs: " Ryzen™ 9 8940HX 16-Cores, 32-Threads, RAM : 16GB DDR5 = 32GB = $50, Storage : 1TB M.2 PCIe",
                image: "https://cccomputerkh.com/C-LENOVO/LEGEN-5.jpg"
            },
            {
                id: 45,
                name: "LUXE LENOVO LOQ-15ARP9 | GAMING",
                price: 1049,
                specs: "- Ryzen™ 7 7435HS 8-Cores, 16-Threads, RAM : 16GB DDR5 = 32GB = $40, Storage : 512GB M.2 PCIe 4.0",
                image: "https://cccomputerkh.com/C-LENOVO/LOQ-A.jpg"
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
