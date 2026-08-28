/**
 * DATA-DRIVEN NAVIGATION CONFIGURATION
 * 
 * Single source of truth for the entire website's navigation hierarchy.
 * Exactly matches the menu items and order requested from dubai-curtains.ae.
 */

export interface NavBadge {
  text: string;
  variant?: "gold" | "rose" | "emerald" | "charcoal" | "blue";
  pulse?: boolean;
}

export interface PromoCard {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  href: string;
  image?: string;
  badge?: NavBadge;
}

export interface SubMenuItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  badge?: NavBadge;
  iconName?: string;
  featured?: boolean;
  children?: SubMenuItem[];
}

export interface MegaMenuColumn {
  id: string;
  heading: string;
  headingHref?: string;
  iconName?: string;
  description?: string;
  items: SubMenuItem[];
}

export interface MegaMenuTab {
  id: string;
  label: string;
  iconName?: string;
  badge?: NavBadge;
  description?: string;
  columns?: MegaMenuColumn[];
  items?: SubMenuItem[];
  promoCard?: PromoCard;
}

export interface MegaMenuConfig {
  layout: "columns" | "tabs" | "hybrid";
  columns?: MegaMenuColumn[];
  tabs?: MegaMenuTab[];
  promoCard?: PromoCard;
  footerLinks?: Array<{ title: string; href: string; iconName?: string }>;
}

export interface DropdownConfig {
  items: SubMenuItem[];
}

export interface NavItem {
  id: string;
  title: string;
  href: string;
  type: "link" | "dropdown" | "mega-menu";
  badge?: NavBadge;
  isExternal?: boolean;
  dropdown?: DropdownConfig;
  megaMenu?: MegaMenuConfig;
}

export interface TopBarConfig {
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  location: string;
  hours: string;
  announcement?: {
    text: string;
    highlight?: string;
    href?: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface NavigationConfig {
  brand: {
    name: string;
    tagline: string;
    logoText: string;
    logoSubtitle: string;
    logoImage?: string;
    logoImageWhite?: string;
  };
  topBar: TopBarConfig;
  mainNav: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  brand: {
    name: "Easy Blinds & Curtains",
    tagline: "Luxury Window Couture & Bespoke Living",
    logoText: "EASY BLINDS & CURTAINS",
    logoSubtitle: "DUBAI • BESPOKE CURTAINS & BLINDS",
    logoImage: "/EasyBlindscurtain_logo-palm.png",
    logoImageWhite: "/EasyBlindscurtain_logo-palm-white.png",
  },
  topBar: {
    phone: "+971 444 319 50",
    phoneRaw: "+97144431950",
    whatsapp: "+971 50 834 9761",
    whatsappRaw: "+971508349761",
    email: "info@easyblindsandcurtains.ae",
    location: "Palm Jebel Ali & Dubai, UAE",
    hours: "Mon - Sun: 9:00 AM - 9:00 PM",
    announcement: {
      text: "Complimentary 24-Hour Home Measurement & Van Visit to Palm Jebel Ali & UAE",
      highlight: "Book Free Visit",
      href: "/book-a-free-appointment",
    },
    cta: {
      label: "Book Free Measurement",
      href: "/book-a-free-appointment",
    },
  },
  mainNav: [
    {
      id: "home",
      title: "Home",
      href: "/",
      type: "link",
    },
    {
      id: "about-us",
      title: "About Us",
      href: "/about-us",
      type: "link",
    },
    {
      id: "care-package",
      title: "Care Package",
      href: "/care-package",
      type: "link",
      badge: {
        text: "NEW",
        variant: "rose",
        pulse: true,
      },
    },
    {
      id: "curtains",
      title: "Curtains",
      href: "/curtains",
      type: "mega-menu",
      megaMenu: {
        layout: "tabs",
        tabs: [
          {
            id: "shop-all-curtains",
            label: "Shop All Curtains",
            iconName: "Scissors",
            description: "Explore our complete range of bespoke drapery crafted with world-class fabrics.",
            columns: [
              {
                id: "popular-curtains",
                heading: "Popular Categories",
                items: [
                  {
                    id: "blackout-curtains",
                    title: "Blackout Curtains",
                    href: "/blackout-curtains",
                    description: "100% light-blocking fabrics for superior privacy and deep sleep.",
                    badge: { text: "Best Seller", variant: "gold" },
                    iconName: "Moon",
                  },
                  {
                    id: "sheers-curtains",
                    title: "Sheer Curtains",
                    href: "/sheers-curtains",
                    description: "Airy, luminous drapery providing graceful daylight diffusion.",
                    badge: { text: "Trending", variant: "emerald" },
                    iconName: "Sun",
                  },
                  {
                    id: "motorised-curtains",
                    title: "Motorised Curtains",
                    href: "/motorised-curtains",
                    description: "Smart automation integrated with Alexa, Google Home & Apple.",
                    badge: { text: "Smart Tech", variant: "charcoal" },
                    iconName: "Cpu",
                  },
                  {
                    id: "thermal-curtains",
                    title: "Thermal Curtains",
                    href: "/thermal-curtains",
                    description: "Energy-saving insulation to protect interiors from UAE summer heat.",
                    iconName: "ShieldAlert",
                  },
                ],
              },
              {
                id: "specialized-curtains",
                heading: "Specialty & Formats",
                items: [
                  {
                    id: "roman-curtains",
                    title: "Roman Curtains",
                    href: "/roman-curtains",
                    description: "Clean tailored folds merging soft curtains with blind functionality.",
                    iconName: "Layers",
                  },
                  {
                    id: "panel-curtains",
                    title: "Panel Curtains",
                    href: "/panel-curtains",
                    description: "Sleek sliding panels ideal for large patio doors and dividers.",
                    iconName: "Columns2",
                  },
                  {
                    id: "childrens-curtains",
                    title: "Children's Curtains",
                    href: "/childrens-curtains",
                    description: "Playful patterns with blackout lining and cord-free safety.",
                    iconName: "Smile",
                  },
                  {
                    id: "medical-curtains",
                    title: "Medical Curtains",
                    href: "/medical-curtains",
                    description: "Anti-bacterial, flame-retardant hospital cubicle drapery.",
                    iconName: "Cross",
                  },
                  {
                    id: "mosquito-nets-mesh",
                    title: "Mosquito Nets & Mesh",
                    href: "/mosquito-nets-mesh",
                    description: "Discreet breathable insect barrier systems.",
                    iconName: "Grid",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Complimentary Fabric Sampling",
              subtitle: "At Your Doorstep",
              description: "Book our mobile design van loaded with 1,000+ luxury velvet, linen, and silk swatches.",
              buttonText: "Request Free Van Visit",
              href: "/book-a-free-appointment",
              badge: { text: "Free Service", variant: "gold", pulse: true },
            },
          },
          {
            id: "curtains-styles",
            label: "Curtains Styles",
            iconName: "Scissors",
            description: "Choose your pleat header and track tailoring aesthetic.",
            columns: [
              {
                id: "heading-styles",
                heading: "Heading & Pleat Styles",
                items: [
                  {
                    id: "wave-curtain",
                    title: "Wave Curtains",
                    href: "/wave-curtain",
                    description: "Modern, fluid, uniform ripple fold curves.",
                    badge: { text: "Contemporary", variant: "gold" },
                    iconName: "Waves",
                  },
                  {
                    id: "eyelet-curtains",
                    title: "Eyelet Curtains",
                    href: "/eyelet-curtains",
                    description: "Metallic rings creating neat, bold, modern vertical folds.",
                    iconName: "CircleDot",
                  },
                  {
                    id: "pinch-pleat-curtains",
                    title: "Triple Pinch Pleat Curtains",
                    href: "/pinch-pleat-curtains",
                    description: "Classic luxury tailoring with crisp gathered triple pleats.",
                    iconName: "ListFilter",
                  },
                  {
                    id: "double-pleat-curtains",
                    title: "Double Pinch Pleat Curtains",
                    href: "/double-pleat-curtains",
                    description: "Refined balance of traditional elegance and minimal stack.",
                    iconName: "AlignJustify",
                  },
                ],
              },
              {
                id: "hanging-styles",
                heading: "Mounting & Track Types",
                items: [
                  {
                    id: "pencil-pleat-curtains",
                    title: "Pencil Pleat Curtains",
                    href: "/pencil-pleat-curtains",
                    description: "Tightly gathered tape heading for timeless versatility.",
                    iconName: "Menu",
                  },
                  {
                    id: "hook-type-curtain",
                    title: "Hook Type Curtains",
                    href: "/hook-type-curtain",
                    description: "Adjustable header hooks for concealed recessed ceiling tracks.",
                    iconName: "Anchor",
                  },
                  {
                    id: "ring-type-curtain",
                    title: "Ring Type Curtains",
                    href: "/ring-type-curtain",
                    description: "Decorative finials paired with custom handcrafted rings.",
                    iconName: "Circle",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Custom Header Guide",
              subtitle: "Find Your Perfect Pleat",
              description: "Our interior masters help you match the right pleat style to your ceiling height and room vibe.",
              buttonText: "Pleat Consultation",
              href: "/in-home-measuring",
            },
          },
          {
            id: "curtains-accessories",
            label: "Curtain Accessories",
            iconName: "Sparkle",
            description: "High-end hardware, automated tracks, tiebacks, and styling elements.",
            columns: [
              {
                id: "hardware",
                heading: "Hardware & Tracks",
                items: [
                  {
                    id: "poles-tracks",
                    title: "Poles & Motorized Tracks",
                    href: "/poles-tracks",
                    description: "Silent glide motorized and manual tracks engineered for quiet durability.",
                    iconName: "Minus",
                  },
                  {
                    id: "cushions-accessories",
                    title: "Cushions & Soft Furnishings",
                    href: "/cushions-accessories",
                    description: "Matching bespoke cushions, bolsters, and accent fabrics.",
                    iconName: "Square",
                  },
                  {
                    id: "finishing-touches",
                    title: "Finishing Touches & Tiebacks",
                    href: "/finishing-touches",
                    description: "Handcrafted tassel tiebacks, brass holdbacks, and trims.",
                    iconName: "Gem",
                  },
                ],
              },
              {
                id: "inspirations",
                heading: "Design & Corporate",
                items: [
                  {
                    id: "curtain-fabrics",
                    title: "Curtain Fabrics Catalog",
                    href: "/curtain-fabrics",
                    description: "Linen, velvet, jacquard, dimout, and organic cotton textures.",
                    iconName: "Palette",
                  },
                  {
                    id: "smart-curtains-solutions",
                    title: "Smart Home Solutions",
                    href: "/smart-curtains-solutions",
                    description: "Somfy, Tuya, and Zigbee motorized curtain rails with app scheduling.",
                    iconName: "Smartphone",
                  },
                  {
                    id: "corporate-curtains",
                    title: "Corporate & Hospitality Drapes",
                    href: "/corporate-blinds-and-curtains-solutions",
                    description: "Bespoke contract installations for offices, luxury hotels & embassies.",
                    iconName: "Building2",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Somfy Smart Motorization",
              subtitle: "Whisper-Quiet Motors",
              description: "Automate your drapery with timed schedules, sun sensors, and smart voice triggers.",
              buttonText: "Explore Smart Tracks",
              href: "/smart-curtains-solutions",
              badge: { text: "5-Yr Warranty", variant: "emerald" },
            },
          },
        ],
        footerLinks: [
          { title: "View Full Curtains Gallery", href: "/our-works", iconName: "Image" },
          { title: "Fabric Swatch Request", href: "/shop", iconName: "Palette" },
          { title: "24-Hour Installation Guarantee", href: "/in-home-measuring", iconName: "Clock" },
        ],
      },
    },
    {
      id: "blinds",
      title: "Blinds",
      href: "/blinds",
      type: "mega-menu",
      megaMenu: {
        layout: "tabs",
        tabs: [
          {
            id: "shop-all-blinds",
            label: "Shop All Blinds",
            iconName: "SlidersHorizontal",
            description: "Precision-engineered blinds crafted for UAE light control and sleek modern interiors.",
            columns: [
              {
                id: "popular-blinds",
                heading: "All Blind Varieties",
                items: [
                  {
                    id: "roller-blinds",
                    title: "Roller Blinds",
                    href: "/roller-blinds",
                    description: "Minimalist, sleek, and durable fabric rollers with smooth chain or motor operation.",
                    badge: { text: "Top Rated", variant: "gold" },
                    iconName: "Maximize2",
                  },
                  {
                    id: "blackout-blinds",
                    title: "Blackout Blinds",
                    href: "/blackout-blinds",
                    description: "Complete light blockage for bedrooms, cinemas, and meeting rooms.",
                    iconName: "Moon",
                  },
                  {
                    id: "motorised-blinds",
                    title: "Motorised Blinds",
                    href: "/motorised-blinds",
                    description: "Effortless one-touch remote and smartphone automated blinds.",
                    badge: { text: "Smart", variant: "charcoal" },
                    iconName: "Cpu",
                  },
                  {
                    id: "roman-blinds",
                    title: "Roman Blinds",
                    href: "/roman-blinds",
                    description: "Soft decorative horizontal pleating combining luxury drape with blind practicality.",
                    iconName: "Layers",
                  },
                ],
              },
              {
                id: "innovative-blinds",
                heading: "Specialty & Dual Shades",
                items: [
                  {
                    id: "zebra-blinds",
                    title: "Zebra Blinds",
                    href: "/zebra-blinds",
                    description: "Alternating sheer and solid stripes for precise dual daylight adjustment.",
                    badge: { text: "Trending", variant: "emerald" },
                    iconName: "Grid",
                  },
                  {
                    id: "duplex-blinds",
                    title: "Duplex Blinds",
                    href: "/duplex-blinds",
                    description: "Day-and-night dual roller cassettes for multi-layer lighting moods.",
                    iconName: "Copy",
                  },
                  {
                    id: "vertical-blinds",
                    title: "Vertical Blinds",
                    href: "/vertical-blinds",
                    description: "180-degree rotating louvers ideal for floor-to-ceiling panoramic glass.",
                    iconName: "Columns3",
                  },
                  {
                    id: "venetian-blinds-all",
                    title: "Venetian Blinds",
                    href: "/venetian-blinds",
                    description: "Horizontal slat blinds offering classic tilt-and-raise daylight management.",
                    iconName: "AlignJustify",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Precision Custom Sizing",
              subtitle: "Zero Measurement Risk",
              description: "Our certified technicians laser-measure your windows for a 100% guaranteed flawless fit.",
              buttonText: "Book Laser Measurement",
              href: "/in-home-measuring",
              badge: { text: "Guaranteed Fit", variant: "gold" },
            },
          },
          {
            id: "blinds-by-style",
            label: "Blinds by Material",
            iconName: "Component",
            description: "Explore natural wood, anodized aluminium, and high-performance technical fabrics.",
            columns: [
              {
                id: "materials",
                heading: "Material Selection",
                items: [
                  {
                    id: "wooden-venetian-blinds",
                    title: "Wooden Venetian Blinds",
                    href: "/wooden-venetian-blinds",
                    description: "Authentic premium basswood slats with rich warm grain stains.",
                    badge: { text: "Natural", variant: "gold" },
                    iconName: "TreePine",
                  },
                  {
                    id: "aluminium-venetian-blinds",
                    title: "Aluminium Venetian Blinds",
                    href: "/aluminium-venetian-blinds",
                    description: "Lightweight, sleek moisture-resistant metallic slats for kitchens and bathrooms.",
                    iconName: "Shield",
                  },
                  {
                    id: "solar-screen-blinds",
                    title: "Solar Screen Blinds",
                    href: "/roller-blinds",
                    description: "UV-filtering solar mesh that maintains outside view while cutting UAE heat.",
                    iconName: "SunDim",
                  },
                ],
              },
              {
                id: "hardware-acc",
                heading: "Finishing & Valances",
                items: [
                  {
                    id: "blinds-accessories",
                    title: "Blinds Accessories & Cassettes",
                    href: "/accessories",
                    description: "Matching fabric-wrapped pelmets, bottom bars, and wand controllers.",
                    iconName: "Tool",
                  },
                  {
                    id: "child-safety-blinds",
                    title: "Child-Safe Cordless Systems",
                    href: "/in-home-measuring",
                    description: "Spring-loaded and motorized systems ensuring 100% child safety.",
                    iconName: "ShieldCheck",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Premium Basswood Collection",
              subtitle: "Handcrafted Luxury",
              description: "Crafted from sustainably sourced hardwoods with UV-resistant scratch coatings.",
              buttonText: "View Wood Finishes",
              href: "/wooden-venetian-blinds",
            },
          },
          {
            id: "blinds-by-room",
            label: "Blinds by Room",
            iconName: "Home",
            description: "Tailored window coverings curated for specific room environments.",
            columns: [
              {
                id: "residential-rooms",
                heading: "Living Spaces",
                items: [
                  {
                    id: "bedroom-blind",
                    title: "Bedroom Blinds",
                    href: "/bedroom-blind",
                    description: "Maximum room darkening and acoustic insulation for peaceful rest.",
                    iconName: "BedDouble",
                  },
                  {
                    id: "kids-room-blinds",
                    title: "Kids' Room Blinds",
                    href: "/kids-room-blinds",
                    description: "Safe, cheerful blackout treatments built with wipe-clean durable surfaces.",
                    iconName: "Smile",
                  },
                  {
                    id: "kitchen-blinds",
                    title: "Kitchen Blinds",
                    href: "/kitchen-blinds",
                    description: "Waterproof, wipeable, fire-retardant moisture-resistant solutions.",
                    iconName: "Utensils",
                  },
                  {
                    id: "living-room-blinds",
                    title: "Living Room Blinds",
                    href: "/blinds-by-room",
                    description: "Elegant sheer rollers, motorized zebra shades, and warm wood drapes.",
                    iconName: "Sofa",
                  },
                ],
              },
              {
                id: "commercial-spaces",
                heading: "Specialty Spaces",
                items: [
                  {
                    id: "balcony-patio-blinds",
                    title: "Balcony & Sunroom Blinds",
                    href: "/blinds",
                    description: "Heavy-duty outdoor zip-screens and heat reflective solar fabrics.",
                    iconName: "Sun",
                  },
                  {
                    id: "office-workspaces",
                    title: "Office & Study Blinds",
                    href: "/office-blinds-and-curtains",
                    description: "Anti-glare screen fabrics designed to eliminate computer screen reflections.",
                    iconName: "Laptop",
                  },
                ],
              },
            ],
            promoCard: {
              title: "Room-by-Room Consultation",
              subtitle: "Tailored Lighting Design",
              description: "Book an in-home designer to assess sunlight angle, privacy requirements, and decor matching.",
              buttonText: "Schedule Room Visit",
              href: "/in-home-measuring",
            },
          },
        ],
        footerLinks: [
          { title: "Explore Full Blinds Catalog", href: "/blinds", iconName: "SlidersHorizontal" },
          { title: "Smart Home Integration Info", href: "/smart-curtains-solutions", iconName: "Cpu" },
          { title: "Free 48-Hour Fitting Service", href: "/in-home-measuring", iconName: "Clock" },
        ],
      },
    },
    {
      id: "commercial",
      title: "Commercial",
      href: "/office-blinds-and-curtains",
      type: "dropdown",
      dropdown: {
        items: [
          {
            id: "office-blinds",
            title: "Office Blinds & Curtains",
            href: "/office-blinds-and-curtains",
            description: "High-durability anti-glare window coverings for executive towers & co-working spaces.",
            iconName: "Building",
            badge: { text: "Corporate", variant: "charcoal" },
          },
          {
            id: "hospital-blinds",
            title: "Hospital & Medical Facilities",
            href: "/hospital-blinds-curtains",
            description: "Antimicrobial, hygiene-certified, flame-retardant cubicle tracks and curtains.",
            iconName: "Hospital",
          },
          {
            id: "school-blinds",
            title: "Schools & Educational Institutes",
            href: "/school-blinds-curtains",
            description: "Child-safe, robust, fire-rated blackout blinds for auditoriums and classrooms.",
            iconName: "GraduationCap",
          },
          {
            id: "hotel-blinds",
            title: "Hotels & Luxury Restaurants",
            href: "/hotel-blinds-curtains",
            description: "Bespoke 5-star acoustic hospitality drapery, sheer cascades, and motorized suites.",
            iconName: "Hotel",
            badge: { text: "Hospitality", variant: "gold" },
          },
          {
            id: "government-projects",
            title: "Government & Sovereign Projects",
            href: "/government-projects-blinds-curtains",
            description: "Certified civil contract delivery conforming to Dubai civil defense specifications.",
            iconName: "Landmark",
          },
          {
            id: "gym-curtains",
            title: "Gyms & Wellness Centres",
            href: "/gym-curtains",
            description: "Heavy-duty sound-dampening partitions and privacy dividers.",
            iconName: "Dumbbell",
          },
          {
            id: "corporate-solutions",
            title: "Corporate Turnkey Solutions",
            href: "/corporate-blinds-and-curtains-solutions",
            description: "Dedicated account managers, bulk trade pricing, and expedited project execution.",
            iconName: "Briefcase",
          },
        ],
      },
    },
    {
      id: "help",
      title: "Help",
      href: "/in-home-measuring",
      type: "dropdown",
      dropdown: {
        items: [
          {
            id: "in-home-measuring",
            title: "In-Home Free Measuring",
            href: "/in-home-measuring",
            description: "Our certified technicians bring fabrics and laser-measure your windows for free.",
            iconName: "Ruler",
            badge: { text: "Free", variant: "emerald" },
          },
          {
            id: "book-appointment",
            title: "Book Free Appointment",
            href: "/book-a-free-appointment-with-easy-blinds-curtains-in-dubai",
            description: "Schedule a date and time that suits you for our mobile consultation van.",
            iconName: "Calendar",
            badge: { text: "Instant", variant: "gold" },
          },
          {
            id: "care-package-info",
            title: "Care & Maintenance Guide",
            href: "/care-package",
            description: "Professional cleaning tips, fabric protection, and maintenance care plans.",
            iconName: "HeartHandshake",
          },
          {
            id: "faqs-help",
            title: "Frequently Asked Questions",
            href: "/faqs",
            description: "Instant answers on installation times, motor compatibility, and warranty.",
            iconName: "HelpCircle",
          },
          {
            id: "contact-help",
            title: "Contact & Showroom",
            href: "/contact",
            description: "Speak directly with our Dubai styling specialists or visit our premises.",
            iconName: "PhoneCall",
          },
        ],
      },
    },
    {
      id: "flooring",
      title: "Flooring",
      href: "/flooring",
      type: "link",
    },
    {
      id: "furniture",
      title: "Furniture",
      href: "/furniture",
      type: "link",
    },
    {
      id: "our-works",
      title: "Our Works",
      href: "/our-works",
      type: "link",
    },
    {
      id: "faqs",
      title: "FAQs",
      href: "/faqs",
      type: "link",
    },
  ],
};
