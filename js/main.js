const products = [
            // ELECTRONICS (9 Products)
            { id: 1, name: "iPhone 15 Pro Max (256 GB) - Natural Titanium", brand: "Apple", category: "Electronics", hsn: "8517", price: 134900, mrp: 159900, rating: 4.9, reviews: "6,420", assured: true, badge: "FLAGSHIP #1", bankOffer: "₹4,000 Instant Bank Off", specs: "A17 Pro Chip • 48MP Pro Camera • Titanium Frame", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80" },
            { id: 2, name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)", brand: "Samsung", category: "Electronics", hsn: "8517", price: 109999, mrp: 134999, rating: 4.8, reviews: "4,890", assured: true, badge: "GALAXY AI", bankOffer: "Free Galaxy Buds Offer", specs: "Galaxy AI • 200MP Quad Telephoto • S-Pen Included", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80" },
            { id: 3, name: "Apple MacBook Air M3 (13.6-inch, 16GB, 512GB SSD)", brand: "Apple", category: "Electronics", hsn: "8471", price: 114900, mrp: 134900, rating: 4.9, reviews: "3,120", assured: true, badge: "M3 SUPERCHIP", bankOffer: "No-Cost EMI Available", specs: "Apple M3 8-Core • Liquid Retina • 18 Hrs Battery", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80" },
            { id: 13, name: "ASUS ROG Strix G16 Gaming Laptop (i7 14th Gen, RTX 4060)", brand: "ASUS", category: "Electronics", hsn: "8471", price: 94990, mrp: 124990, rating: 4.8, reviews: "1,650", assured: true, badge: "RTX 4060", bankOffer: "Use MART2000 for ₹2000 Off", specs: "165Hz FHD+ Display • 16GB DDR5 • 1TB NVMe SSD", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80" },
            { id: 17, name: "Sony PlayStation 5 Slim Console (1TB SSD Disc Edition)", brand: "Sony", category: "Electronics", hsn: "9504", price: 49990, mrp: 54990, rating: 4.9, reviews: "7,840", assured: true, badge: "GAMING HOT", bankOffer: "Includes DualSense Wireless Controller", specs: "4K 120Hz Gaming • Ray Tracing • Ultra-High Speed SSD", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=700&q=80" },
            { id: 18, name: "Apple iPad Pro M4 (11-inch, Ultra Retina XDR, 256GB Wi-Fi)", brand: "Apple", category: "Electronics", hsn: "8471", price: 92900, mrp: 99900, rating: 4.9, reviews: "2,150", assured: true, badge: "OLED XDR", bankOffer: "₹5,000 Instant HDFC Cashback", specs: "Apple M4 Chip • Tandem OLED • Apple Pencil Pro Ready", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80" },
            { id: 19, name: "OnePlus 12 5G (Flowy Emerald, 16GB RAM, 512GB Storage)", brand: "OnePlus", category: "Electronics", hsn: "8517", price: 61999, mrp: 69999, rating: 4.7, reviews: "5,430", assured: true, badge: "100W SUPERVOOC", bankOffer: "Exchange Bonus up to ₹6,000", specs: "Snapdragon 8 Gen 3 • 4th Gen Hasselblad Camera", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80" },
            { id: 20, name: "Canon EOS R50 Mirrorless Vlogging Camera (RF-S 18-45mm)", brand: "Canon", category: "Electronics", hsn: "8525", price: 64990, mrp: 75995, rating: 4.8, reviews: "1,390", assured: true, badge: "4K CREATOR", bankOffer: "Free 64GB SD Card + Camera Bag", specs: "24.2MP APS-C Sensor • 4K 30p Video • Dual Pixel AF", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80" },
            { id: 21, name: "DJI Mini 4 Pro Fly More Combo Drone with RC 2 Screen", brand: "DJI", category: "Electronics", hsn: "8806", price: 89990, mrp: 112990, rating: 4.9, reviews: "980", assured: true, badge: "PRO AERIAL", bankOffer: "No-Cost EMI up to 12 Months", specs: "4K/60fps HDR True Vertical • Omnidirectional Obstacle Sensing", image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=700&q=80" },

            // FASHION (5 Products)
            { id: 6, name: "Manyavar Men Royal Silk Embroidered Wedding Sherwani Kurta", brand: "Manyavar", category: "Fashion", hsn: "6203", price: 2999, mrp: 5999, rating: 4.6, reviews: "2,190", assured: true, badge: "WEDDING EDIT", bankOffer: "Festive Combo Deal", specs: "Art Silk • Mandarin Collar • Includes Churidar", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=700&q=80" },
            { id: 7, name: "Biba Women Designer Zari Embroidered Anarkali Suit Set", brand: "Biba", category: "Fashion", hsn: "6204", price: 2199, mrp: 4599, rating: 4.5, reviews: "3,450", assured: true, badge: "LUXE ETHNIC", bankOffer: "Myntra Luxe Bestseller", specs: "Pure Georgette • Dupatta Included • Festive Edit", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80" },
            { id: 11, name: "Levi's Men 511 Slim Fit Vintage Indigo Denim Trucker Jacket", brand: "Levi's", category: "Fashion", hsn: "6201", price: 2399, mrp: 4799, rating: 4.6, reviews: "2,310", assured: true, badge: "FLAT 50% OFF", bankOffer: "Flat 50% Season Off", specs: "100% Cotton Denim • Button Flap Chest Pockets", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80" },
            { id: 22, name: "Fabindia Pure Kanjeevaram Zari Woven Banarasi Silk Saree", brand: "Fabindia", category: "Fashion", hsn: "5007", price: 4499, mrp: 8999, rating: 4.8, reviews: "2,870", assured: true, badge: "HANDLOOM SILK", bankOffer: "Silk Mark Certified Authentic", specs: "Pure Mulberry Silk • Rich Gold Zari Pallu • With Blouse Piece", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80" },
            { id: 23, name: "Raymond Men Tailored Fit Italian Wool Tuxedo Blazer", brand: "Raymond", category: "Fashion", hsn: "6203", price: 4999, mrp: 9999, rating: 4.7, reviews: "1,560", assured: true, badge: "EXECUTIVE LUXE", bankOffer: "Free Garment Cover Included", specs: "Superfine Merino Wool Blend • Satin Peak Lapel", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80" },

            // FOOTWEAR (5 Products)
            { id: 5, name: "Nike Air Zoom Pegasus 40 Men's Marathon Running Shoes", brand: "Nike", category: "Footwear", hsn: "6404", price: 6495, mrp: 11895, rating: 4.7, reviews: "4,310", assured: true, badge: "PRO RUNNER", bankOffer: "Extra ₹500 Off on UPI", specs: "Dual Zoom Air Units • Breathable Engineered Mesh", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80" },
            { id: 9, name: "Puma Unisex Motorsport Classic White Leather Sneakers", brand: "Puma", category: "Footwear", hsn: "6403", price: 2799, mrp: 5999, rating: 4.4, reviews: "4,890", assured: true, badge: "BESTSELLER", bankOffer: "Flat 53% Discount", specs: "SoftFoam+ Sockliner • High-Grip Rubber Outsole", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=700&q=80" },
            { id: 15, name: "Adidas Ultraboost Light Pro Marathon Running Shoes", brand: "Adidas", category: "Footwear", hsn: "6404", price: 7999, mrp: 15999, rating: 4.8, reviews: "1,940", assured: true, badge: "50% DEAL", bankOffer: "Flat 50% Marathon Deal", specs: "Continental Rubber Grip • Primeknit+ Upper", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=700&q=80" },
            { id: 24, name: "New Balance 550 Retro Court Leather Lifestyle Sneakers", brand: "New Balance", category: "Footwear", hsn: "6403", price: 6999, mrp: 12999, rating: 4.8, reviews: "2,240", assured: true, badge: "STREET ICON", bankOffer: "100% Authentic Sneaker Vault", specs: "Premium Perforated Leather • Vintage EVA Midsole", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80" },
            { id: 25, name: "ASICS Gel-Kayano 30 Stability Long-Distance Running Shoes", brand: "ASICS", category: "Footwear", hsn: "6404", price: 8499, mrp: 15999, rating: 4.9, reviews: "1,670", assured: true, badge: "4D GUIDANCE", bankOffer: "Extra 10% Off with BHARAT10", specs: "FF Blast Plus Eco Cushioning • PureGEL Rearfoot Tech", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80" },

            // ACCESSORIES (5 Products)
            { id: 4, name: "Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones", brand: "Sony", category: "Accessories", hsn: "8518", price: 24990, mrp: 34990, rating: 4.8, reviews: "5,210", assured: true, badge: "INDUSTRY ANC", bankOffer: "10% Off with BHARAT10", specs: "8 Microphones ANC • 30 Hours Battery • Multipoint", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80" },
            { id: 8, name: "Fossil Gen 6 Stainless Steel Touchscreen Smartwatch", brand: "Fossil", category: "Accessories", hsn: "9102", price: 11995, mrp: 24995, rating: 4.5, reviews: "1,980", assured: true, badge: "52% OFF", bankOffer: "52% Mega Price Drop", specs: "Wear OS by Google • SpO2 & Heart Rate • Fast Charge", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80" },
            { id: 14, name: "Ray-Ban Aviator Classic Polarized Green G-15 Sunglasses", brand: "Ray-Ban", category: "Accessories", hsn: "9004", price: 5490, mrp: 8990, rating: 4.7, reviews: "2,870", assured: true, badge: "POLARIZED", bankOffer: "Authenticity Certificate", specs: "100% UV Protection • Gold Metal Frame • Made in Italy", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80" },
            { id: 26, name: "Tissot PRX Powermatic 80 Swiss Automatic Luxury Watch", brand: "Tissot", category: "Accessories", hsn: "9102", price: 48500, mrp: 66500, rating: 4.9, reviews: "1,120", assured: true, badge: "SWISS MADE", bankOffer: "2-Year International Warranty", specs: "80-Hour Power Reserve • Sapphire Crystal • Waffle Dial", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80" },
            { id: 27, name: "Samsung Galaxy Watch 6 Classic LTE (47mm, Rotating Bezel)", brand: "Samsung", category: "Accessories", hsn: "9102", price: 21999, mrp: 40999, rating: 4.8, reviews: "3,410", assured: true, badge: "LTE SMART", bankOffer: "46% Off + Free Strap", specs: "Sapphire Crystal • ECG & BP Monitor • Wear OS", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=700&q=80" },

            // HOME & KITCHEN (4 Products)
            { id: 10, name: "Philips Digital Rapid-Air Fryer HD9252/90 (4.1 Liter)", brand: "Philips", category: "Home", hsn: "8516", price: 6799, mrp: 11995, rating: 4.7, reviews: "6,100", assured: true, badge: "HEALTHY FRY", bankOffer: "2-Year Brand Warranty", specs: "Up to 90% Less Fat • 7 Presets • Touch Panel", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80" },
            { id: 12, name: "Morphy Richards 15-Bar Espresso & Cappuccino Coffee Maker", brand: "Morphy Richards", category: "Home", hsn: "8516", price: 4999, mrp: 9499, rating: 4.5, reviews: "1,420", assured: true, badge: "CAFE PRO", bankOffer: "Free Barista Tamper", specs: "Milk Frother Nozzle • Dual Stainless Filter", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80" },
            { id: 16, name: "Dyson V12 Detect Slim Laser Cordless Vacuum Cleaner", brand: "Dyson", category: "Home", hsn: "8508", price: 39900, mrp: 54900, rating: 4.9, reviews: "1,180", assured: true, badge: "LASER DETECT", bankOffer: "₹2,000 Off with MART2000", specs: "Laser Dust Detection • 60 Min Run Time • HEPA Filter", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80" },
            { id: 28, name: "LG 55-Inch C3 4K Ultra HD Smart OLED evo WebOS TV", brand: "LG", category: "Home", hsn: "8528", price: 98990, mrp: 149990, rating: 4.9, reviews: "2,640", assured: true, badge: "4K OLED EVO", bankOffer: "Free Wall Mount & Installation", specs: "Dolby Vision & Atmos • 120Hz G-Sync • α9 AI Processor", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80" }
        ];

        // Interactive Hero Carousel Data
        const heroSlides = [
            {
                badge: "Flagship Tech Fest",
                title: "iPhone 15 Pro Max, PS5 Slim & MacBook M3 at Up to ₹25,000 Off",
                desc: "Get Instant 10% Coupon Discount (BHARAT10), No-Cost EMI & Official GST Tax Invoice immediately upon checkout.",
                btnText: "Shop Flagship Tech",
                category: "Electronics",
                bg: "from-slate-950 via-indigo-950 to-slate-900",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
            },
            {
                badge: "Myntra Luxe Designer Edit",
                title: "Festive Kanjeevaram Silk, Sherwanis & Denim at Min 50% OFF",
                desc: "Curated collections from Manyavar, Fabindia, Biba & Raymond with Express Doorstep Delivery.",
                btnText: "Explore Luxury Fashion",
                category: "Fashion",
                bg: "from-rose-950 via-purple-950 to-slate-950",
                image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
            },
            {
                badge: "Athletic & Pro Audio",
                title: "Nike Pegasus, New Balance 550, Sony XM5 & Dyson Deals",
                desc: "Apply Promo Code MART2000 for Flat ₹2,000 Off on premium electronics, smart TVs and sneakers.",
                btnText: "Explore Pro Sneakers",
                category: "Footwear",
                bg: "from-slate-950 via-emerald-950 to-slate-900",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
            }
        ];

        let currentSlide = 0;
        let cart = [];
        let wishlist = [];
        let compareList = [];
        let selectedBrands = new Set();
        let orders = JSON.parse(localStorage.getItem('shopBharatEnterpriseOrders') || '[]');
        let activeCategory = 'All';
        let wishlistOnly = false;
        let appliedCoupon = null;
        let currentReceiptOrder = null;
        let currentViewMode = 'grid';

        function formatINR(num) {
            return '₹' + Math.round(num).toLocaleString('en-IN');
        }

        // Convert Number to Indian Currency Words for GST Invoice
        function numberToWordsINR(num) {
            num = Math.round(num);
            if (num === 0) return "Zero Rupees Only";
            const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
            const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            function inWords(n) {
                if (n < 20) return a[n];
                const digit = n % 10;
                return b[Math.floor(n / 10)] + (digit ? '-' + a[digit] : ' ');
            }
            let str = '';
            const crore = Math.floor(num / 10000000);
            num %= 10000000;
            const lakh = Math.floor(num / 100000);
            num %= 100000;
            const thousand = Math.floor(num / 1000);
            num %= 1000;
            const hundred = Math.floor(num / 100);
            const rest = num % 100;

            if (crore > 0) str += inWords(crore) + 'Crore ';
            if (lakh > 0) str += inWords(lakh) + 'Lakh ';
            if (thousand > 0) str += inWords(thousand) + 'Thousand ';
            if (hundred > 0) str += inWords(hundred) + 'Hundred ';
            if (rest > 0) str += (str !== '' ? 'and ' : '') + inWords(rest);
            return 'Rupees ' + str.trim() + ' Only';
        }

        // Hero Slider Functions
        function renderHeroSlide() {
            const s = heroSlides[currentSlide];
            document.getElementById('heroSlideBadge').innerHTML = `<i class="fa-solid fa-fire"></i> ${s.badge}`;
            document.getElementById('heroSlideTitle').innerText = s.title;
            document.getElementById('heroSlideDesc').innerText = s.desc;
            document.getElementById('heroSlideImg').src = s.image;
            document.getElementById('heroSlideBg').className = `absolute inset-0 bg-gradient-to-r ${s.bg} transition-all duration-500`;
            const btn = document.getElementById('heroSlideBtn');
            btn.onclick = () => setCategory(s.category);
            btn.innerHTML = `<span>${s.btnText}</span><i class="fa-solid fa-arrow-right"></i>`;

            document.getElementById('heroDots').innerHTML = heroSlides.map((_, idx) => `
                <button onclick="goToHeroSlide(${idx})" class="h-2 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/40'}"></button>
            `).join('');
        }

        function changeHeroSlide(delta) {
            currentSlide = (currentSlide + delta + heroSlides.length) % heroSlides.length;
            renderHeroSlide();
        }

        function goToHeroSlide(idx) {
            currentSlide = idx;
            renderHeroSlide();
        }

        setInterval(() => changeHeroSlide(1), 5500);

        // Populate Brand Checkboxes Dynamically
        function initBrandFilters() {
            const brands = [...new Set(products.map(p => p.brand))];
            const container = document.getElementById('brandFilterList');
            container.innerHTML = brands.map(brand => {
                const count = products.filter(p => p.brand === brand).length;
                return `
                    <label class="flex items-center justify-between cursor-pointer hover:bg-slate-50 px-1.5 py-1 rounded">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" value="${brand}" onchange="toggleBrandFilter('${brand}')" class="brand-checkbox accent-indigo-600 rounded">
                            <span class="font-semibold text-slate-700">${brand}</span>
                        </div>
                        <span class="text-[10px] text-slate-400 font-mono-num">(${count})</span>
                    </label>
                `;
            }).join('');
        }

        function toggleBrandFilter(brand) {
            if (selectedBrands.has(brand)) selectedBrands.delete(brand);
            else selectedBrands.add(brand);
            applyFilters();
        }

        // Grid / Compact View Mode
        function setGridView(mode) {
            currentViewMode = mode;
            const grid = document.getElementById('productGrid');
            const gridBtn = document.getElementById('gridViewBtn');
            const compactBtn = document.getElementById('compactViewBtn');

            if (mode === 'compact') {
                grid.className = "grid grid-cols-1 md:grid-cols-2 gap-5";
                compactBtn.className = "px-2.5 py-1 rounded-lg bg-white text-slate-900 shadow-xs text-xs font-bold transition";
                gridBtn.className = "px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 text-xs font-bold transition";
            } else {
                grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5";
                gridBtn.className = "px-2.5 py-1 rounded-lg bg-white text-slate-900 shadow-xs text-xs font-bold transition";
                compactBtn.className = "px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 text-xs font-bold transition";
            }
            applyFilters();
        }

        // Live Search Autocomplete Dropdown
        function handleSearchInput() {
            const q = document.getElementById('searchInput').value.trim().toLowerCase();
            document.getElementById('clearSearchBtn').classList.toggle('hidden', q.length === 0);
            applyFilters();

            const dropdown = document.getElementById('searchDropdown');
            if (q.length < 1) {
                dropdown.classList.add('hidden');
                return;
            }

            const matches = products.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.brand.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.specs.toLowerCase().includes(q)
            ).slice(0, 6);

            if (matches.length === 0) {
                dropdown.classList.add('hidden');
                return;
            }

            dropdown.innerHTML = matches.map(p => `
                <div onclick="openQuickView(${p.id}); hideSearchDropdown();" class="flex items-center gap-3 px-4 py-2.5 hover:bg-indigo-50/70 cursor-pointer border-b border-slate-100 last:border-none">
                    <img src="${p.image}" class="w-10 h-10 rounded-lg object-cover border">
                    <div class="flex-1 min-w-0">
                        <p class="text-xs font-extrabold text-slate-900 truncate">${p.name}</p>
                        <p class="text-[10px] text-slate-500">${p.brand} • in ${p.category}</p>
                    </div>
                    <span class="text-xs font-black font-mono-num text-indigo-700">${formatINR(p.price)}</span>
                </div>
            `).join('');
            dropdown.classList.remove('hidden');
        }

        function hideSearchDropdown() {
            document.getElementById('searchDropdown').classList.add('hidden');
        }

        function clearSearch() {
            document.getElementById('searchInput').value = '';
            document.getElementById('clearSearchBtn').classList.add('hidden');
            hideSearchDropdown();
            applyFilters();
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#searchInput') && !e.target.closest('#searchDropdown')) {
                hideSearchDropdown();
            }
        });

        // Main Filter & Product Grid Renderer
        function applyFilters() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const sortBy = document.getElementById('sortSelect').value;
            const maxPrice = parseInt(document.getElementById('priceSlider').value, 10);
            const minRating = parseFloat(document.querySelector('input[name="ratingFilter"]:checked').value);
            const minDiscount = parseInt(document.querySelector('input[name="discountFilter"]:checked').value, 10);

            document.getElementById('priceRangeLabel').innerText = formatINR(maxPrice);

            let filtered = products.filter(p => {
                const discountPct = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                const matchCat = activeCategory === 'All' || p.category === activeCategory;
                const matchSearch = p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.specs.toLowerCase().includes(query);
                const matchPrice = p.price <= maxPrice;
                const matchRating = p.rating >= minRating;
                const matchDiscount = discountPct >= minDiscount;
                const matchBrand = selectedBrands.size === 0 || selectedBrands.has(p.brand);
                const matchWish = !wishlistOnly || wishlist.includes(p.id);
                return matchCat && matchSearch && matchPrice && matchRating && matchDiscount && matchBrand && matchWish;
            });

            if (sortBy === 'lowToHigh') filtered.sort((a, b) => a.price - b.price);
            if (sortBy === 'highToLow') filtered.sort((a, b) => b.price - a.price);
            if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
            if (sortBy === 'discount') {
                filtered.sort((a, b) => ((b.mrp - b.price) / b.mrp) - ((a.mrp - a.price) / a.mrp));
            }

            document.getElementById('productCountBadge').innerText = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
            const grid = document.getElementById('productGrid');

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full bg-white rounded-3xl p-14 text-center border border-slate-200">
                        <i class="fa-solid fa-magnifying-glass-minus text-5xl text-slate-300 mb-3"></i>
                        <h3 class="font-extrabold text-lg text-slate-800">No matching products found</h3>
                        <p class="text-xs text-slate-500 mt-1">Try resetting your brand, discount or price range filters.</p>
                        <button onclick="resetAllFilters()" class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl">Reset All Filters</button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(p => {
                const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                const isWish = wishlist.includes(p.id);
                const isCompared = compareList.includes(p.id);
                const inCartItem = cart.find(c => c.id === p.id);
                const emiMonthly = Math.round(p.price / 6);

                return `
                    <div class="product-card bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400 flex flex-col overflow-hidden group">
                        <!-- Image Container -->
                        <div class="relative h-56 bg-slate-100 overflow-hidden cursor-pointer" onclick="openQuickView(${p.id})">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=700&q=80'" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                            <div class="absolute top-3 left-3 flex flex-col gap-1">
                                <span class="bg-emerald-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-lg shadow">
                                    ${discount}% OFF
                                </span>
                                ${p.badge ? `<span class="bg-slate-950/90 text-amber-300 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">${p.badge}</span>` : ''}
                            </div>

                            <!-- Wishlist & Compare Floating Buttons -->
                            <div class="absolute top-3 right-3 flex flex-col gap-1.5">
                                <button onclick="event.stopPropagation(); toggleWishlist(${p.id})" title="Save to Wishlist" class="w-8 h-8 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-md transition">
                                    <i class="${isWish ? 'fa-solid text-rose-500' : 'fa-regular text-slate-600'} fa-heart text-xs"></i>
                                </button>
                                <button onclick="event.stopPropagation(); toggleCompare(${p.id})" title="Compare Specs" class="w-8 h-8 rounded-full ${isCompared ? 'bg-indigo-600 text-white' : 'bg-white/95 text-slate-600 hover:bg-white'} flex items-center justify-center shadow-md transition">
                                    <i class="fa-solid fa-scale-balanced text-[11px]"></i>
                                </button>
                            </div>

                            <div class="absolute bottom-2.5 left-3 bg-slate-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1">
                                <i class="fa-solid fa-shield-halved"></i> Mart Assured
                            </div>
                            <div class="absolute bottom-2.5 right-3 bg-white/95 text-slate-800 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs opacity-0 group-hover:opacity-100 transition">
                                <i class="fa-regular fa-eye mr-1"></i>Quick View
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                            <div>
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">${p.brand}</span>
                                    <div class="flex items-center gap-1">
                                        <span class="bg-emerald-700 text-white text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                            ${p.rating} <i class="fa-solid fa-star text-[8px]"></i>
                                        </span>
                                        <span class="text-[10px] text-slate-400 font-medium">(${p.reviews})</span>
                                    </div>
                                </div>
                                <h3 onclick="openQuickView(${p.id})" class="font-bold text-slate-900 text-sm mt-1.5 line-clamp-2 hover:text-indigo-600 cursor-pointer leading-snug">${p.name}</h3>
                                <p class="text-[11px] text-slate-500 mt-1 truncate">${p.specs}</p>
                            </div>

                            <div class="pt-2 border-t border-slate-100">
                                <div class="flex items-baseline justify-between gap-2">
                                    <div class="flex items-baseline gap-2">
                                        <span class="text-lg font-black font-mono-num text-slate-900">${formatINR(p.price)}</span>
                                        <span class="text-xs font-mono-num text-slate-400 line-through">${formatINR(p.mrp)}</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-slate-500">EMI ${formatINR(emiMonthly)}/m</span>
                                </div>
                                <p class="text-[11px] text-emerald-700 font-bold mt-0.5 truncate">
                                    <i class="fa-solid fa-tag mr-1"></i>${p.bankOffer}
                                </p>

                                <!-- Action Buttons -->
                                <div class="grid grid-cols-2 gap-2 mt-3">
                                    ${inCartItem ? `
                                        <div class="bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-between px-2 py-1.5">
                                            <button onclick="changeQty(${p.id}, -1)" class="w-6 h-6 rounded-lg bg-white shadow-xs font-extrabold text-xs text-indigo-700">-</button>
                                            <span class="text-xs font-black font-mono-num text-indigo-900">${inCartItem.qty} in Cart</span>
                                            <button onclick="changeQty(${p.id}, 1)" class="w-6 h-6 rounded-lg bg-white shadow-xs font-extrabold text-xs text-indigo-700">+</button>
                                        </div>
                                    ` : `
                                        <button onclick="addToCart(${p.id})" class="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold py-2.5 px-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                                            <i class="fa-solid fa-cart-plus"></i> Add Cart
                                        </button>
                                    `}
                                    <button onclick="buyNow(${p.id})" class="bg-slate-900 hover:bg-indigo-700 text-white font-extrabold py-2.5 px-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                                        <i class="fa-solid fa-bolt text-amber-400"></i> Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function setCategory(cat) {
            activeCategory = cat;
            wishlistOnly = false;
            document.getElementById('navCategorySelect').value = cat;
            document.getElementById('sectionHeading').innerText = cat === 'All' ? 'All Storefront Products' : `${cat} Department`;

            document.querySelectorAll('.cat-pill').forEach(btn => {
                if (btn.dataset.cat === cat) {
                    btn.className = "cat-pill bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition flex items-center gap-1.5 shadow-xs";
                } else {
                    btn.className = "cat-pill text-slate-200 hover:bg-slate-700/80 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5";
                }
            });
            applyFilters();
        }

        function resetAllFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('clearSearchBtn').classList.add('hidden');
            document.getElementById('sortSelect').value = 'popular';
            document.getElementById('priceSlider').value = 160000;
            document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;
            document.querySelector('input[name="discountFilter"][value="0"]').checked = true;
            selectedBrands.clear();
            document.querySelectorAll('.brand-checkbox').forEach(cb => cb.checked = false);
            setCategory('All');
        }

        // Compare Engine
        function toggleCompare(id) {
            const idx = compareList.indexOf(id);
            if (idx > -1) {
                compareList.splice(idx, 1);
                showToast("Removed from Compare list");
            } else {
                if (compareList.length >= 4) {
                    showToast("Maximum 4 products can be compared at once!");
                    return;
                }
                compareList.push(id);
                showToast("Added to Compare tray ⚖️");
            }
            updateCompareUI();
            applyFilters();
        }

        function clearCompare() {
            compareList = [];
            updateCompareUI();
            applyFilters();
        }

        function updateCompareUI() {
            document.getElementById('compareBadge').innerText = compareList.length;
            const bar = document.getElementById('compareFloatingBar');
            if (compareList.length === 0) {
                bar.classList.add('hidden');
                return;
            }
            bar.classList.remove('hidden');
            document.getElementById('compareBarCount').innerText = compareList.length;
            document.getElementById('compareBarThumbs').innerHTML = compareList.map(id => {
                const p = products.find(item => item.id === id);
                return `<img src="${p.image}" title="${p.name}" class="w-8 h-8 rounded-lg object-cover border border-amber-400">`;
            }).join('');
        }

        function openCompareModal() {
            const container = document.getElementById('compareTableContainer');
            if (compareList.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12">
                        <i class="fa-solid fa-scale-balanced text-4xl text-slate-300 mb-3"></i>
                        <p class="font-extrabold text-slate-800">No products selected for comparison</p>
                        <p class="text-xs text-slate-500 mt-1">Click the scale icon on any product card to compare up to 4 items side-by-side.</p>
                    </div>
                `;
            } else {
                const items = compareList.map(id => products.find(p => p.id === id));
                container.innerHTML = `
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="border-b">
                                <th class="p-3 w-36 bg-slate-50 font-extrabold text-slate-600 uppercase">Feature</th>
                                ${items.map(p => `
                                    <th class="p-3 min-w-[200px] align-top">
                                        <div class="relative">
                                            <img src="${p.image}" class="w-full h-36 object-cover rounded-xl border mb-2">
                                            <button onclick="toggleCompare(${p.id}); openCompareModal();" class="absolute top-2 right-2 bg-rose-600 text-white w-6 h-6 rounded-full text-xs">×</button>
                                        </div>
                                        <span class="text-[10px] font-extrabold text-indigo-600 uppercase">${p.brand}</span>
                                        <p class="font-extrabold text-slate-900 text-xs mt-0.5 line-clamp-2">${p.name}</p>
                                    </th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">Deal Price</td>
                                ${items.map(p => `<td class="p-3 font-black font-mono-num text-base text-indigo-700">${formatINR(p.price)} <span class="text-xs text-slate-400 line-through font-normal">${formatINR(p.mrp)}</span></td>`).join('')}
                            </tr>
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">Customer Rating</td>
                                ${items.map(p => `<td class="p-3 font-bold text-amber-600">${p.rating} ★ <span class="text-slate-400 font-normal">(${p.reviews} reviews)</span></td>`).join('')}
                            </tr>
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">Key Specs</td>
                                ${items.map(p => `<td class="p-3 text-slate-700 font-medium">${p.specs}</td>`).join('')}
                            </tr>
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">Bank / Promo Offer</td>
                                ${items.map(p => `<td class="p-3 text-emerald-700 font-bold">${p.bankOffer}</td>`).join('')}
                            </tr>
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">HSN & GST</td>
                                ${items.map(p => `<td class="p-3 font-mono-num text-slate-600">HSN ${p.hsn} (18% GST Incl.)</td>`).join('')}
                            </tr>
                            <tr>
                                <td class="p-3 bg-slate-50 font-bold">Action</td>
                                ${items.map(p => `
                                    <td class="p-3">
                                        <button onclick="addToCart(${p.id}); closeCompareModal();" class="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold py-2 rounded-xl text-xs">
                                            Add to Cart
                                        </button>
                                    </td>
                                `).join('')}
                            </tr>
                        </tbody>
                    </table>
                `;
            }
            document.getElementById('compareModal').classList.remove('hidden');
        }

        function closeCompareModal() {
            document.getElementById('compareModal').classList.add('hidden');
        }

        // Quick View Modal with EMI Calculator
        function openQuickView(id) {
            const p = products.find(item => item.id === id);
            if (!p) return;
            const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
            document.getElementById('qvCategory').innerText = `${p.category} • HSN Code: ${p.hsn} • Indian Mart Assured`;
            document.getElementById('quickViewBody').innerHTML = `
                <div class="rounded-2xl overflow-hidden bg-slate-100 border h-80 sm:h-96 relative">
                    <img src="${p.image}" class="w-full h-full object-cover">
                    <span class="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-lg">${discount}% OFF</span>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center gap-2">
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-2.5 py-0.5 rounded">${p.brand}</span>
                        <span class="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">${p.rating} ★ (${p.reviews} Verified Buyers)</span>
                    </div>
                    <h2 class="text-xl font-extrabold text-slate-900 leading-snug">${p.name}</h2>
                    <p class="text-xs font-semibold text-slate-700 bg-slate-100 p-3 rounded-xl border border-slate-200">${p.specs}</p>
                    <div class="flex items-baseline gap-3">
                        <span class="text-3xl font-black font-mono-num text-slate-900">${formatINR(p.price)}</span>
                        <span class="text-sm font-mono-num text-slate-400 line-through">${formatINR(p.mrp)}</span>
                        <span class="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">${p.bankOffer}</span>
                    </div>

                    <!-- Instant No-Cost EMI Breakdown -->
                    <div class="bg-indigo-50/70 border border-indigo-100 p-3 rounded-xl space-y-1.5">
                        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-900 block">
                            <i class="fa-solid fa-calculator mr-1"></i> Instant No-Cost EMI Plans (0% Interest):
                        </span>
                        <div class="grid grid-cols-3 gap-2 text-center text-xs">
                            <div class="bg-white p-1.5 rounded-lg border border-indigo-100">
                                <span class="text-[10px] text-slate-400 block">3 Months</span>
                                <strong class="font-mono-num text-slate-900">${formatINR(p.price / 3)}/mo</strong>
                            </div>
                            <div class="bg-white p-1.5 rounded-lg border border-indigo-100">
                                <span class="text-[10px] text-slate-400 block">6 Months</span>
                                <strong class="font-mono-num text-indigo-700">${formatINR(p.price / 6)}/mo</strong>
                            </div>
                            <div class="bg-white p-1.5 rounded-lg border border-indigo-100">
                                <span class="text-[10px] text-slate-400 block">12 Months</span>
                                <strong class="font-mono-num text-slate-900">${formatINR(p.price / 12)}/mo</strong>
                            </div>
                        </div>
                    </div>

                    <div class="text-xs space-y-1 text-slate-600">
                        <p><i class="fa-solid fa-truck-fast text-indigo-600 mr-1.5"></i> Express Delivery to <strong>${document.getElementById('headerLocation').innerText.trim()}</strong></p>
                        <p><i class="fa-solid fa-file-invoice text-emerald-600 mr-1.5"></i> Includes Official 18% GST Tax Invoice (CGST + SGST)</p>
                    </div>
                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button onclick="addToCart(${p.id}); closeQuickView();" class="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 rounded-xl text-xs transition">
                            <i class="fa-solid fa-cart-plus mr-1"></i> ADD TO CART
                        </button>
                        <button onclick="closeQuickView(); buyNow(${p.id});" class="bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-xl text-xs transition">
                            <i class="fa-solid fa-bolt mr-1"></i> BUY NOW
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('quickViewModal').classList.remove('hidden');
        }

        function closeQuickView() {
            document.getElementById('quickViewModal').classList.add('hidden');
        }

        // Wishlist Logic
        function toggleWishlist(id) {
            const idx = wishlist.indexOf(id);
            if (idx > -1) {
                wishlist.splice(idx, 1);
                showToast("Removed from Wishlist");
            } else {
                wishlist.push(id);
                showToast("Saved to Wishlist ❤️");
            }
            document.getElementById('wishlistBadge').innerText = wishlist.length;
            applyFilters();
        }

        function toggleWishlistFilter() {
            wishlistOnly = !wishlistOnly;
            document.getElementById('sectionHeading').innerText = wishlistOnly ? 'My Saved Wishlist ❤️' : 'All Storefront Products';
            applyFilters();
        }

        // Cart & Promo Engine
        function addToCart(id) {
            const product = products.find(p => p.id === id);
            const existing = cart.find(c => c.id === id);
            if (existing) existing.qty += 1;
            else cart.push({ ...product, qty: 1 });
            updateCartUI();
            applyFilters();
            showToast(`${product.brand} added to Cart!`);
        }

        function buyNow(id) {
            const existing = cart.find(c => c.id === id);
            if (!existing) addToCart(id);
            openCheckoutModal();
        }

        function changeQty(id, delta) {
            const item = cart.find(c => c.id === id);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
            updateCartUI();
            applyFilters();
        }

        function removeFromCart(id) {
            cart = cart.filter(c => c.id !== id);
            updateCartUI();
            applyFilters();
        }

        function copyCouponCode(code) {
            navigator.clipboard?.writeText(code);
            showToast(`Coupon ${code} copied! Apply it in Cart.`);
        }

        function quickApplyCoupon(code) {
            document.getElementById('couponInput').value = code;
            applyCoupon();
        }

        function applyCoupon() {
            const code = document.getElementById('couponInput').value.trim().toUpperCase();
            const feedback = document.getElementById('couponFeedback');
            feedback.classList.remove('hidden');

            if (code === 'BHARAT10') {
                appliedCoupon = { code: 'BHARAT10', type: 'percent', value: 10 };
                feedback.className = "text-[11px] font-bold text-emerald-600";
                feedback.innerText = "✓ BHARAT10 applied! 10% instant savings unlocked.";
            } else if (code === 'MEGA500') {
                appliedCoupon = { code: 'MEGA500', type: 'flat', value: 500 };
                feedback.className = "text-[11px] font-bold text-emerald-600";
                feedback.innerText = "✓ MEGA500 applied! Flat ₹500 discount unlocked.";
            } else if (code === 'MART2000') {
                appliedCoupon = { code: 'MART2000', type: 'flat', value: 2000 };
                feedback.className = "text-[11px] font-bold text-emerald-600";
                feedback.innerText = "✓ MART2000 applied! Flat ₹2,000 VIP discount unlocked.";
            } else {
                appliedCoupon = null;
                feedback.className = "text-[11px] font-bold text-rose-600";
                feedback.innerText = "Invalid coupon. Use BHARAT10, MEGA500 or MART2000.";
            }
            updateCartUI();
        }

        function getCartTotals() {
            const mrpTotal = cart.reduce((s, i) => s + i.mrp * i.qty, 0);
            const subTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
            let couponSaving = 0;
            if (appliedCoupon && subTotal > 0) {
                couponSaving = appliedCoupon.type === 'percent'
                    ? Math.round(subTotal * (appliedCoupon.value / 100))
                    : Math.min(appliedCoupon.value, Math.max(0, subTotal - 500));
            }
            const finalPayable = Math.max(0, subTotal - couponSaving);
            return { mrpTotal, subTotal, couponSaving, finalPayable };
        }

        function updateCartUI() {
            const totalQty = cart.reduce((s, i) => s + i.qty, 0);
            const { mrpTotal, subTotal, couponSaving, finalPayable } = getCartTotals();

            document.getElementById('cartBadge').innerText = totalQty;
            document.getElementById('navCartTotal').innerText = formatINR(finalPayable);

            const container = document.getElementById('cartItemsContainer');
            const footer = document.getElementById('cartFooter');

            if (cart.length === 0) {
                appliedCoupon = null;
                container.innerHTML = `
                    <div class="text-center py-20">
                        <i class="fa-solid fa-bag-shopping text-5xl text-slate-300 mb-3"></i>
                        <p class="font-extrabold text-slate-700">Your Indian Mart cart is empty</p>
                        <p class="text-xs text-slate-400 mt-1">Add smartphones, fashion or sneakers to begin checkout.</p>
                    </div>
                `;
                footer.classList.add('hidden');
                return;
            }

            footer.classList.remove('hidden');
            container.innerHTML = cart.map(item => `
                <div class="flex gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200 items-center">
                    <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover bg-white border">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-xs text-slate-900 truncate">${item.name}</h4>
                        <p class="text-sm font-black font-mono-num text-indigo-700 mt-0.5">${formatINR(item.price)} <span class="text-[11px] font-normal text-slate-400 line-through">${formatINR(item.mrp)}</span></p>
                        <div class="flex items-center gap-2 mt-2">
                            <button onclick="changeQty(${item.id}, -1)" class="w-6 h-6 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold text-xs">-</button>
                            <span class="text-xs font-extrabold font-mono-num px-1">${item.qty}</span>
                            <button onclick="changeQty(${item.id}, 1)" class="w-6 h-6 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold text-xs">+</button>
                            <button onclick="removeFromCart(${item.id})" class="ml-auto text-rose-500 hover:text-rose-700 text-xs font-bold">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            document.getElementById('cartMRP').innerText = formatINR(mrpTotal);
            document.getElementById('cartDiscount').innerText = '-' + formatINR(mrpTotal - subTotal);

            const couponRow = document.getElementById('couponRow');
            if (couponSaving > 0 && appliedCoupon) {
                couponRow.classList.remove('hidden');
                document.getElementById('appliedCouponName').innerText = appliedCoupon.code;
                document.getElementById('cartCouponDiscount').innerText = '-' + formatINR(couponSaving);
            } else {
                couponRow.classList.add('hidden');
            }

            document.getElementById('cartTotal').innerText = formatINR(finalPayable);
            document.getElementById('checkoutPayable').innerText = formatINR(finalPayable);
        }

        function toggleCart(show) {
            document.getElementById('cartDrawer').classList.toggle('hidden', !show);
        }

        // Checkout & UPI Verification
        function openCheckoutModal() {
            if (cart.length === 0) {
                showToast("Your cart is empty!");
                return;
            }
            toggleCart(false);
            const { finalPayable } = getCartTotals();
            document.getElementById('checkoutPayable').innerText = formatINR(finalPayable);
            document.getElementById('checkoutQrImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=upi://pay?pa=indianmart@icici&pn=IndianMart&am=${finalPayable}`;
            document.getElementById('checkoutModal').classList.remove('hidden');
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function fillDemoCustomer() {
            document.getElementById('custName').value = "Aman Dhakar";
            document.getElementById('custPhone').value = "9876543210";
            document.getElementById('custEmail').value = "aman.dhakar@indianmart.in";
            document.getElementById('custAddress').value = "Plot 42, Cyber Park, City Center";
            document.getElementById('custCity').value = "Gwalior, MP";
            document.getElementById('custPin').value = "474001";
            showToast("Shipping Address Auto-Filled!");
        }

        function verifyUpiId() {
            const val = document.getElementById('upiIdInput').value.trim();
            if (!val.includes('@')) {
                showToast("Enter a valid UPI ID containing '@'");
                return;
            }
            document.getElementById('upiVerifyStatus').classList.remove('hidden');
            showToast("UPI ID Verified Successfully!");
        }

        function togglePaymentUI() {
            const mode = document.querySelector('input[name="paymentMode"]:checked').value;
            document.getElementById('upiInteractiveBox').classList.toggle('hidden', !mode.includes('UPI'));
        }

        // Order Confirmation & Official Invoice Generation
        function confirmOrder(e) {
            e.preventDefault();
            const btn = document.getElementById('confirmOrderBtn');
            const originalHTML = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>PROCESSING SECURE ORDER & GENERATING GST INVOICE...</span>`;

            setTimeout(() => {
                const name = document.getElementById('custName').value.trim();
                const phone = document.getElementById('custPhone').value.trim();
                const email = document.getElementById('custEmail').value.trim() || 'N/A';
                const address = document.getElementById('custAddress').value.trim();
                const city = document.getElementById('custCity').value.trim();
                const pin = document.getElementById('custPin').value.trim();
                const b2bEnabled = document.getElementById('b2bGstToggle').checked;
                const company = b2bEnabled ? document.getElementById('custCompany').value.trim() : '';
                const gstin = b2bEnabled ? document.getElementById('custGstin').value.trim().toUpperCase() : '';
                const payMode = document.querySelector('input[name="paymentMode"]:checked').value;

                const { couponSaving, finalPayable } = getCartTotals();
                const orderId = 'IM-' + Math.floor(10000000 + Math.random() * 90000000);
                const txnId = 'TXN' + Math.floor(1000000000 + Math.random() * 9000000000);
                const dateStr = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

                const newOrder = {
                    orderId,
                    txnId,
                    dateStr,
                    customer: { name, phone, email, company, gstin, fullAddress: `${address}, ${city} - ${pin}` },
                    payMode,
                    payStatus: payMode.includes('COD') ? 'PAY ON DELIVERY (COD)' : 'PAID & VERIFIED',
                    items: [...cart],
                    couponSaving,
                    grandTotal: finalPayable
                };

                orders.unshift(newOrder);
                localStorage.setItem('shopBharatEnterpriseOrders', JSON.stringify(orders));
                updateOrdersBadge();

                cart = [];
                appliedCoupon = null;
                updateCartUI();
                applyFilters();

                btn.disabled = false;
                btn.innerHTML = originalHTML;
                closeCheckoutModal();
                renderOfficialReceipt(newOrder);
                showToast("Order Confirmed! Official GST Tax Invoice Ready.");
            }, 800);
        }

        function renderOfficialReceipt(order) {
            currentReceiptOrder = order;
            document.getElementById('recOrderId').innerText = order.orderId;
            document.getElementById('recTxnId').innerText = order.txnId;
            document.getElementById('recDate').innerText = order.dateStr;

            document.getElementById('recCustName').innerText = order.customer.name;
            const b2bEl = document.getElementById('recCustB2B');
            if (order.customer.company || order.customer.gstin) {
                b2bEl.classList.remove('hidden');
                b2bEl.innerText = `${order.customer.company || 'B2B Buyer'} • GSTIN: ${order.customer.gstin || 'N/A'}`;
            } else {
                b2bEl.classList.add('hidden');
            }

            document.getElementById('recCustAddress').innerText = order.customer.fullAddress;
            document.getElementById('recCustPhone').innerText = `Mobile: +91 ${order.customer.phone}`;

            document.getElementById('recPayMode').innerText = order.payMode;
            const statusEl = document.getElementById('recPayStatus');
            statusEl.innerText = order.payStatus;
            statusEl.className = order.payStatus.includes('PAID')
                ? 'font-extrabold px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800'
                : 'font-extrabold px-2 py-0.5 rounded text-[11px] bg-amber-100 text-amber-800';

            document.getElementById('recQrCode').src = `https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=IndianMart-Invoice-${order.orderId}-INR-${order.grandTotal}`;

            document.getElementById('recItemsList').innerHTML = order.items.map((item, idx) => `
                <tr>
                    <td class="py-2.5 px-2 font-bold text-slate-500">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-bold text-slate-900">${item.name}</td>
                    <td class="py-2.5 px-2 text-center font-mono-num text-slate-600">${item.hsn || '8517'}</td>
                    <td class="py-2.5 px-2 text-center font-bold">${item.qty}</td>
                    <td class="py-2.5 px-2 text-right font-mono-num">${formatINR(item.price)}</td>
                    <td class="py-2.5 px-2 text-right font-mono-num font-extrabold text-slate-900">${formatINR(item.price * item.qty)}</td>
                </tr>
            `).join('');

            const taxable = Math.round(order.grandTotal / 1.18);
            const totalGst = order.grandTotal - taxable;
            const halfGst = Math.round(totalGst / 2);

            document.getElementById('recTaxable').innerText = formatINR(taxable);
            document.getElementById('recCgst').innerText = formatINR(halfGst);
            document.getElementById('recSgst').innerText = formatINR(totalGst - halfGst);

            const recCouponRow = document.getElementById('recCouponRow');
            if (order.couponSaving > 0) {
                recCouponRow.classList.remove('hidden');
                document.getElementById('recCouponVal').innerText = '-' + formatINR(order.couponSaving);
            } else {
                recCouponRow.classList.add('hidden');
            }

            document.getElementById('recGrandTotal').innerText = formatINR(order.grandTotal);
            document.getElementById('recAmountWords').innerText = numberToWordsINR(order.grandTotal);
            document.getElementById('receiptModal').classList.remove('hidden');
        }

        function closeReceiptModal() {
            document.getElementById('receiptModal').classList.add('hidden');
        }

        function shareOrderWhatsApp() {
            if (!currentReceiptOrder) return;
            const o = currentReceiptOrder;
            const text = `*Indian Mart Official Order Invoice*%0AOrder ID: *${o.orderId}*%0ATransaction ID: ${o.txnId}%0ACustomer: ${o.customer.name}%0AGrand Total: *${formatINR(o.grandTotal)}* (${o.payStatus})%0AStatus: Order Confirmed & Dispatched!`;
            window.open(`https://wa.me/?text=${text}`, '_blank');
        }

        // My Orders Modal
        function updateOrdersBadge() {
            const badge = document.getElementById('ordersCountBadge');
            badge.innerText = orders.length;
            badge.classList.toggle('hidden', orders.length === 0);
        }

        function openOrdersModal() {
            const container = document.getElementById('ordersListContainer');
            if (orders.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-14">
                        <i class="fa-solid fa-receipt text-5xl text-slate-300 mb-3"></i>
                        <p class="font-extrabold text-slate-700">No Orders Placed Yet</p>
                        <p class="text-xs text-slate-500 mt-1">Place an order to track shipments and download your GST Invoice PDF.</p>
                    </div>
                `;
            } else {
                container.innerHTML = orders.map((o, idx) => `
                    <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b pb-2.5">
                            <div>
                                <span class="font-black text-sm text-indigo-700 font-mono-num">${o.orderId}</span>
                                <span class="ml-2 text-[11px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded">${o.payStatus}</span>
                                <p class="text-xs text-slate-500 mt-0.5">${o.dateStr} • Shipped to: <strong>${o.customer.name}</strong></p>
                            </div>
                            <div class="text-right">
                                <span class="text-base font-black font-mono-num text-slate-900 block">${formatINR(o.grandTotal)}</span>
                                <button onclick="closeOrdersModal(); renderOfficialReceipt(orders[${idx}]);" class="mt-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-xs transition">
                                    <i class="fa-solid fa-file-invoice mr-1"></i> View / Print Receipt
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-2 pt-1 text-[11px] font-bold text-center">
                            <div class="text-emerald-600"><i class="fa-solid fa-circle-check block mb-0.5"></i>Confirmed</div>
                            <div class="text-emerald-600"><i class="fa-solid fa-file-circle-check block mb-0.5"></i>GST Billed</div>
                            <div class="text-indigo-600"><i class="fa-solid fa-truck-fast block mb-0.5"></i>In Transit</div>
                            <div class="text-slate-400"><i class="fa-regular fa-circle block mb-0.5"></i>Out for Delivery</div>
                        </div>
                    </div>
                `).join('');
            }
            document.getElementById('ordersModal').classList.remove('hidden');
        }

        function closeOrdersModal() {
            document.getElementById('ordersModal').classList.add('hidden');
        }

        // Custom Location Modal Functions
        function openLocationModal() {
            document.getElementById('locationModal').classList.remove('hidden');
        }

        function closeLocationModal() {
            document.getElementById('locationModal').classList.add('hidden');
        }

        function setLocation(locStr) {
            document.getElementById('headerLocation').innerHTML = `${locStr} <i class="fa-solid fa-chevron-down text-[9px] text-amber-400"></i>`;
            closeLocationModal();
            showToast(`Delivery location set to ${locStr}`);
        }

        function applyCustomLocation() {
            const val = document.getElementById('customLocationInput').value.trim();
            if (val) setLocation(val);
        }

        // Countdown Timer
        let totalSeconds = 4 * 3600 + 59 * 60 + 42;
        setInterval(() => {
            if (totalSeconds > 0) totalSeconds--;
            const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');
            document.getElementById('countdownTimer').innerText = `${hrs}:${mins}:${secs}`;
        }, 1000);

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMsg').innerText = msg;
            toast.classList.remove('translate-y-24', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 2500);
        }

        // Initialize Storefront
        renderHeroSlide();
        initBrandFilters();
        applyFilters();
        updateCartUI();
        updateOrdersBadge();
