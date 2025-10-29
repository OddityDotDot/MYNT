"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, Camera, Instagram, Youtube, Tiktok, Mail, Sparkles, Palette, ArrowRight, Star, Shirt, Store, ShoppingCart, CalendarDays, X } from "lucide-react";

const brand = {
  name: "Lauraintechnicolor",
  accentFrom: "from-fuchsia-700",
  accentVia: "via-orange-500",
  accentTo: "to-sky-600",
  lightGradient: "from-white via-fuchsia-50 to-sky-50",
};

const portfolioItems = [
  { id: 1, title: "Editorial — Chromatic Layers", tags: ["Editorial","Color"], img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, title: "Music — Wardrobe Build", tags: ["Music","Styling"], img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, title: "Campaign — Neon Pop", tags: ["Campaign","Retro"], img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1600&auto=format&fit=crop" },
  { id: 4, title: "Studio — Texture Mapping", tags: ["Studio","Beauty"], img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop" },
  { id: 5, title: "Runway — Backstage Pulse", tags: ["Runway","Live"], img: "https://images.unsplash.com/photo-1520976192320-8d08da3a1bdf?q=80&w=1600&auto=format&fit=crop" },
  { id: 6, title: "Concept — Color Theory", tags: ["Concept","Color"], img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
];

const affiliatePicks = [
  { id: "a1", title: "Saturated Satin Skirt", brand: "ColorBurst", url: "#", price: "€59", note: "affiliate" },
  { id: "a2", title: "Statement Platform Heels", brand: "Arcade Fit", url: "#", price: "€89", note: "affiliate" },
  { id: "a3", title: "Candy-Stripe Knit", brand: "Viva Loom", url: "#", price: "€69", note: "affiliate" },
];

const COMMERCE_PROVIDER = 'lemonsqueezy';
const SIMULATE_CHECKOUT = true;

const merchAndRentals = [
  { id: "m1", title: "Technicolor Tee", type: "sale", price: 25, img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop", checkout: { lemonsqueezy: "" } },
  { id: "m2", title: "Sequin Blazer", type: "rent", price: 18, unit: "/day", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" },
  { id: "m3", title: "Logo Cap", type: "sale", price: 19, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop", checkout: { lemonsqueezy: "" } },
];

const socials = [
  { id: "ig", label: "Instagram", url: "https://www.instagram.com/lauraintechnicolor" },
  { id: "tt", label: "TikTok", url: "https://www.tiktok.com/@lauraintechnicolor" },
  { id: "yt", label: "YouTube", url: "https://www.youtube.com/@lauraintechnicolor" },
  { id: "mail", label: "Email", url: "mailto:hello@lauraintechnicolor.example" },
];

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < value ? "fill-yellow-400 stroke-yellow-400" : "stroke-slate-300"}`} />
      ))}
    </div>
  );
}

function RentalModal({ open, onClose, item }: any) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-lg rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Request Rental — {item.title}</CardTitle>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100"><X className="h-4 w-4"/></button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <Input placeholder="Your name" />
            <Input type="email" placeholder="Email" />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Input type="date" placeholder="Start date" />
            <Input type="date" placeholder="End date" />
          </div>
          <Textarea placeholder="Notes about the shoot / production (optional)" />
          <Button className="w-full">Send</Button>
          <p className="text-xs text-slate-500">Demo-only: wire this to your backend or form service.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function SimulatedCheckoutModal({ open, onClose, item, onAddToCart }: any) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Buy — {item.title}</CardTitle>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100"><X className="h-4 w-4"/></button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-4">
            <img src={item.img} alt="" className="w-24 h-24 object-cover rounded-xl"/>
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-slate-600">Price: €{item.price}</div>
            </div>
          </div>
          <Button className="w-full" onClick={onAddToCart}>Add to cart (Demo)</Button>
          <p className="text-xs text-slate-500">This is a demo checkout. Add real LemonSqueezy product links later.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function HeaderNav({ cartCount = 0 }: any) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-2xl bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400 shadow`} />
          <div className="leading-tight">
            <div className="font-black tracking-tight text-lg font-serif">Lauraintechnicolor</div>
            <div className="text-xs text-slate-500">Fashion · Color · Styling</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#shop" className="hover:underline">Webstore</a>
          <a href="#rentals" className="hover:underline">Rentals</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex"><Sparkles className="mr-2 h-4 w-4"/>Book Styling</Button>
          <Button variant="outline"><ShoppingCart className="mr-2 h-4 w-4"/>Cart {cartCount ? <span className="ml-1">({cartCount})</span> : null}</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] font-serif">
            Color-forward styling for <span className="bg-gradient-to-r from-fuchsia-700 via-orange-500 to-sky-600 bg-clip-text text-transparent">bold stories</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-prose">
            I'm Laura — a Helsinki-based creator and stylist. I bring fearless color and playful textures to editorial, music, and live productions.
            Explore selected work, shop my technicolor picks, or book me for your next project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button><Camera className="mr-2 h-4 w-4"/>See Portfolio</Button>
            <Button variant="outline"><Store className="mr-2 h-4 w-4"/>Open Webstore</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Styling</Badge><Badge>Editorial</Badge><Badge>Runway</Badge><Badge>Music</Badge>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/60 via-yellow-200/60 to-cyan-200/60 blur-2xl rounded-3xl"/>
            <img src="https://images.unsplash.com/photo-1520976192320-8d08da3a1bdf?q=80&w=1400&auto=format&fit=crop" alt="Colorful fashion hero" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioGrid({ items }: any) {
  const [filter, setFilter] = React.useState("All");
  const categories = ["All","Editorial","Live","Studio","Beauty","Campaign","Runway","Concept","Color","Retro","Styling"];
  const filtered = items.filter((i: any) => filter === "All" || i.tags.includes(filter));
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Portfolio</h2>
          <p className="text-slate-600">A living gallery of editorials, shows, and campaigns — updated as we go.</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((c) => (
            <Button key={c} variant={filter === c ? "default" : "outline"} onClick={() => setFilter(c)}>{c}</Button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item: any) => (
          <Card key={item.id} className="overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glass">
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover transition-transform duration-300 hover:scale-[1.02]"/>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><Palette className="h-4 w-4"/>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <div className="flex flex-wrap gap-2">{item.tags.map((t: string) => (<Badge key={t}>{t}</Badge>))}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AffiliatePicks() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4"><ShoppingBag className="h-5 w-5"/><h3 className="text-2xl font-semibold tracking-tight">Affiliate Picks</h3></div>
      <p className="text-slate-600 mb-4">Curated links to my favorite colorful pieces. These are external shops; some links are affiliate.</p>
      <div className="grid gap-4">
        {affiliatePicks.map((p) => (
          <Card key={p.id} className="rounded-2xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-slate-600">{p.brand} · {p.note}</div>
                  <div className="mt-1"><Stars value={5}/></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium">{p.price}</div>
                  <Button variant="outline">Shop <ArrowRight className="ml-2 h-4 w-4"/></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <div className="text-sm text-slate-500 mb-2">Embed area (e.g., LTK, Amazon, brand widgets)</div>
        <div className="rounded-2xl border border-dashed p-6 text-center text-slate-500">
          <div className="text-xs mb-2">External shop widget loads here</div>
          <div className="w-full aspect-video bg-slate-100 grid place-items-center rounded-xl">iframe placeholder</div>
        </div>
      </div>
    </div>
  );
}

function MerchRentals({ cartCount, subtotal, setRentalItem, addToCart, openSimulatedCheckout }: any) {
  return (
    <div id="rentals">
      <div className="flex items-center gap-2 mb-4"><Shirt className="h-5 w-5"/><h3 className="text-2xl font-semibold tracking-tight">Merch & Rentals</h3></div>
      <p className="text-slate-600 mb-4">Own a piece of technicolor or rent statement items for shoots and shows.</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {merchAndRentals.map((m) => (
          <Card key={m.id} className="overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glass">
            <img src={m.img} alt={m.title} className="w-full h-44 object-cover"/>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Badge>{m.type === "rent" ? "For Rent" : "For Sale"}</Badge>
                {m.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">€{m.price}{m.unit || ""}</div>
                {m.type === "rent" ? (
                  <Button variant="outline" onClick={() => setRentalItem(m)}>Request</Button>
                ) : (
                  <button onClick={() => openSimulatedCheckout(m)} className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm">Buy (Demo)</button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border p-4 bg-white/60">
        <div className="flex items-center justify-between">
          <div className="font-semibold flex items-center gap-2"><ShoppingCart className="h-4 w-4"/>Cart Summary</div>
          <div className="text-sm">Items: {cartCount} · Subtotal: €{subtotal.toFixed(2)}</div>
        </div>
        <p className="text-xs text-slate-500 mt-2">Connected to LemonSqueezy overlay when real product URLs are provided.</p>
      </div>
    </div>
  );
}

function Shop({ cartCount, subtotal, setRentalItem, addToCart, openSimulatedCheckout }: any) {
  return (
    <section id="shop" className="bg-white/60 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10">
        <AffiliatePicks />
        <MerchRentals cartCount={cartCount} subtotal={subtotal} setRentalItem={setRentalItem} addToCart={addToCart} openSimulatedCheckout={openSimulatedCheckout} />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Lauraintechnicolor — All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [cart, setCart] = React.useState<any[]>([]);
  const [rentalItem, setRentalItem] = React.useState<any>(null);
  const [simulatedItem, setSimulatedItem] = React.useState<any>(null);
  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const subtotal = cart.reduce((n, i) => n + i.qty * i.price, 0);

  const addToCart = (item: any) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { id: item.id, title: item.title, qty: 1, price: item.price }];
    });
  };
  const openSimulatedCheckout = (m: any) => setSimulatedItem(m);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${brand.lightGradient} text-slate-900`}>
      <script src="https://assets.lemonsqueezy.com/lemon.js" defer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Laura",
        alternateName: "Lauraintechnicolor",
        jobTitle: "Fashion Stylist",
        url: "https://lauraintechnicolor.example",
        sameAs: socials.filter(s=>s.url!="#").map(s=>s.url)
      })}} />

      <HeaderNav cartCount={cartCount} />
      <Hero />
      <PortfolioGrid items={portfolioItems} />
      <Shop cartCount={cartCount} subtotal={subtotal} setRentalItem={setRentalItem} addToCart={addToCart} openSimulatedCheckout={openSimulatedCheckout} />

      <section id="contact" className="bg-white/60 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-2xl font-semibold tracking-tight mb-4">Find me online</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {socials.map((s) => (
              <Button key={s.id} variant="outline" onClick={() => window.open(s.url, "_blank")}>
                {s.label}
              </Button>
            ))}
          </div>
          <div className="text-xs text-slate-500">Email for bookings: hello@lauraintechnicolor.example · Domain plan: lauraintechnicolor.com</div>
        </div>
      </section>

      <Footer />

      <RentalModal open={!!rentalItem} item={rentalItem} onClose={() => setRentalItem(null)} />
      <SimulatedCheckoutModal open={!!simulatedItem} item={simulatedItem} onClose={() => setSimulatedItem(null)} onAddToCart={() => { if(simulatedItem){ addToCart(simulatedItem); setSimulatedItem(null);} }} />
    </div>
  );
}
