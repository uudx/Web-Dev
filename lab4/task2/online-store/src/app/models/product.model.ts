/**
 * Product Interface
 * Defines the structure for product data in the online store
 */
export interface Product {
  /** Unique identifier for the product */
  id: number;

  /** Product name */
  name: string;

  /** Short product description (2-3 sentences) */
  description: string;

  /** Product price in KZT (Kazakhstani Tenge) */
  price: number;

  /** Rating from 1 to 5 (can be decimal, e.g., 4.7) */
  rating: number;

  /** URL or local path to the main product image */
  image: string;

  /** Array of image URLs for the gallery (minimum 3) */
  images: string[];

  /** Direct URL to the product page on kaspi.kz */
  link: string;

  /** Optional: Product category */
  category?: string;

  /** Optional: Number of reviews */
  reviewCount?: number;

  /** Optional: Availability status */
  inStock?: boolean;
}

/**
 * Product Category Enum
 * Predefined categories for products
 */
export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  SMARTPHONES = 'Smartphones',
  LAPTOPS = 'Laptops',
  TABLETS = 'Tablets',
  ACCESSORIES = 'Accessories',
  HOME_APPLIANCES = 'Home Appliances',
  GAMING = 'Gaming'
}

/**
 * Sample Product Data
 * Real products from kaspi.kz
 */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256GB',
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and a powerful 48MP camera system. Experience exceptional performance and stunning photography capabilities.',
    price: 699890,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h53/84077225574430.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/h53/84077225574430.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h53/84077225607198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h53/84077225639966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h53/84077225672734.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138363/',
    category: 'Smartphones',
    reviewCount: 2847,
    inStock: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 256GB',
    description: 'The ultimate Galaxy experience with Galaxy AI, 200MP camera, and integrated S Pen. Revolutionary AI features help you communicate, create, and search like never before.',
    price: 599990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84932699750430.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84932699750430.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h21/84932699783198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd0/h21/84932699815966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h21/84932699848734.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-seryi-116004138/',
    category: 'Smartphones',
    reviewCount: 1523,
    inStock: true
  },
  {
    id: 3,
    name: 'MacBook Air 15" M3 8GB/256GB',
    description: 'Supercharged by the M3 chip, the 15-inch MacBook Air delivers incredible performance and up to 18 hours of battery life in a thin and light design. Perfect for work and creativity.',
    price: 749990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/84378856136734.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/84378856136734.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h66/h41/84378856169502.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h41/84378856202270.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h61/h41/84378856235038.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-8-gb-ssd-256-gb-macos-mc9d4-115961778/',
    category: 'Laptops',
    reviewCount: 892,
    inStock: true
  },
  {
    id: 4,
    name: 'Sony PlayStation 5 Slim',
    description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with haptic feedback, and an all-new generation of incredible PlayStation games.',
    price: 299990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695637022.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695637022.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf2/h03/84526695669790.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hef/h03/84526695702558.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hee/h03/84526695735326.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696609/',
    category: 'Gaming',
    reviewCount: 3421,
    inStock: true
  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2nd Gen',
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Audio and Personalized Spatial Audio with dynamic head tracking for immersive sound.',
    price: 129990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/h07/84108189663262.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/ha5/h07/84108189696030.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/ha6/h07/84108189728798.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-113677409/',
    category: 'Accessories',
    reviewCount: 4567,
    inStock: true
  },
  {
    id: 6,
    name: 'iPad Pro 12.9" M2 256GB Wi-Fi',
    description: 'The ultimate iPad experience with the M2 chip, 12.9-inch Liquid Retina XDR display, and superfast wireless connectivity. Perfect for creative professionals.',
    price: 699990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc5/64824043978782.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h12/hc5/64824043978782.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/hc5/64824044011550.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/hc5/64824044044318.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/hc5/64824044077086.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-256gb-wi-fi-seryi-107276421/',
    category: 'Tablets',
    reviewCount: 1234,
    inStock: true
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch 6 Classic 47mm',
    description: 'Meet the watch that knows you best. Advanced sleep coaching, body composition analysis, and rotating bezel for intuitive navigation. Your wellness journey starts here.',
    price: 149990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h52/84425162612766.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h52/84425162612766.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h52/84425162645534.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h16/h52/84425162678302.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h17/h52/84425162711070.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-classic-47-mm-chernyi-113333517/',
    category: 'Accessories',
    reviewCount: 876,
    inStock: true
  },
  {
    id: 8,
    name: 'Dyson V15 Detect Absolute',
    description: 'The most powerful, intelligent Dyson vacuum with laser illumination that reveals microscopic dust. Up to 60 minutes of fade-free power and advanced whole-machine filtration.',
    price: 449990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hf3/64344255774750.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd4/hf3/64344255774750.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/hf3/64344255807518.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd6/hf3/64344255840286.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd7/hf3/64344255873054.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-104530657/',
    category: 'Home Appliances',
    reviewCount: 654,
    inStock: true
  },
  {
    id: 9,
    name: 'Xiaomi Redmi Note 13 Pro 8GB/256GB',
    description: 'Featuring a stunning 200MP main camera, 120Hz AMOLED display, and 67W turbo charging. Exceptional value with flagship-level features at an affordable price.',
    price: 129990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/84932671447070.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/84932671447070.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/hc1/84932671479838.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h16/hc1/84932671512606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h17/hc1/84932671545374.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-chernyi-115994620/',
    category: 'Smartphones',
    reviewCount: 2134,
    inStock: true
  },
  {
    id: 10,
    name: 'LG OLED C4 55" 4K Smart TV',
    description: 'Experience perfect black and infinite contrast with self-lit OLED pixels. α9 AI Processor 4K Gen7 delivers stunning picture quality and immersive sound.',
    price: 899990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h64/84932671578142.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/h64/84932671578142.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/h64/84932671610910.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h64/84932671643678.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h64/84932671676446.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lg-oled-c4-55-oled55c4rla-116004142/',
    category: 'Home Appliances',
    reviewCount: 432,
    inStock: true
  },
  {
    id: 11,
    name: 'Canon EOS R6 Mark II Body',
    description: 'Professional full-frame mirrorless camera with 24.2MP sensor, 40fps continuous shooting, and advanced autofocus. Perfect for photography and video professionals.',
    price: 1299990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hf0/84932671709214.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf5/hf0/84932671709214.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/hf0/84932671741982.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf7/hf0/84932671774750.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/hf0/84932671807518.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/canon-eos-r6-mark-ii-body-116004145/',
    category: 'Electronics',
    reviewCount: 198,
    inStock: true
  },
  {
    id: 12,
    name: 'Apple Watch Series 9 45mm',
    description: 'Smarter, brighter, and more powerful. The S9 SiP enables a magical new way to interact with your watch without touching the screen. Advanced health and fitness features.',
    price: 229990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h0d/84205856006174.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd0/h0d/84205856006174.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h0d/84205856038942.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd2/h0d/84205856071710.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd3/h0d/84205856104478.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyi-113398437/',
    category: 'Accessories',
    reviewCount: 1567,
    inStock: true
  }
];
