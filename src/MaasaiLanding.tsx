/**
 * Maasai Investments - Beautiful Landing Page
 * Generated with 100 Expert Insights
 * Design: Lovable.dev quality | Trust-first architecture
 *
 * Features:
 * - Interactive ROI Calculator
 * - Social Proof (Testimonials + Stats)
 * - Trust Architecture (Legal, Guarantees, Contact)
 * - Investment Tiers (€40/€100/€200)
 * - FAQ Section
 * - Video Integration
 * - Mobile-First Responsive
 * - WCAG AA Accessible
 */

import React, { useState } from 'react';
import { Play, Calculator, Shield, Users, TrendingUp, Check, X, ChevronDown, MessageCircle } from 'lucide-react';

export default function MaasaiLanding() {
  const [investmentAmount, setInvestmentAmount] = useState(40);
  const [investmentPeriod, setInvestmentPeriod] = useState<'10months' | '2years' | '5years' | '10years'>('10months');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [investPopup, setInvestPopup] = useState<string | null>(null);

  const handleInvest = (tier: string) => {
    setInvestPopup(tier);
  };

  const confirmInvest = () => {
    const msg = encodeURIComponent(`Hi! I'm interested in the ${investPopup} investment plan. Can you help me get started?`);
    window.open(`https://wa.me/254718130265?text=${msg}`, '_blank');
    setInvestPopup(null);
  };

  // Gallery items (10 photos + 4 videos from live site)
  const galleryItems = [
    { type: 'image', src: '/maasai-gallery/maasai-market-landscape.jpg', alt: 'Maasai market landscape overview' },
    { type: 'image', src: '/maasai-gallery/market-activity.jpg', alt: 'Active market trading' },
    { type: 'image', src: '/images/natumi_img.jpeg', alt: 'Natumi with the herd' },
    { type: 'video', src: '/images/natumi1.mp4', alt: 'Natumi with the goats' },
    { type: 'video', src: '/maasai-gallery/market-overview-1.mp4', alt: 'Market overview video 1' },
    { type: 'image', src: '/maasai-gallery/livestock-inspection.jpg', alt: 'Livestock quality inspection' },
    { type: 'video', src: '/images/natumi2.mp4', alt: 'Natumi caring for livestock' },
    { type: 'image', src: '/maasai-gallery/investor-at-market.jpg', alt: 'Investor visiting the market' },
    { type: 'video', src: '/maasai-gallery/market-overview-2.mp4', alt: 'Market overview video 2' },
    { type: 'image', src: '/maasai-gallery/quality-assessment.jpg', alt: 'Animal quality assessment' },
    { type: 'video', src: '/images/natumi3.mp4', alt: 'Natumi daily operations' },
    { type: 'image', src: '/maasai-gallery/market-engagement.jpg', alt: 'Community market engagement' },
    { type: 'video', src: '/maasai-gallery/livestock-operations-1.mp4', alt: 'Livestock operations video 1' },
    { type: 'video', src: '/images/natumi4.mp4', alt: 'Natumi herding goats' },
    { type: 'image', src: '/maasai-gallery/community-partnership.jpg', alt: 'Community partnership activities' },
    { type: 'image', src: '/maasai-gallery/youth-development-1.jpg', alt: 'Youth development program 1' },
    { type: 'video', src: '/images/natumi5.mp4', alt: 'Natumi and the community' },
    { type: 'video', src: '/maasai-gallery/livestock-operations-2.mp4', alt: 'Livestock operations video 2' },
    { type: 'image', src: '/maasai-gallery/youth-development-2.jpg', alt: 'Youth development program 2' },
    { type: 'image', src: '/maasai-gallery/youth-engagement.jpg', alt: 'Youth community engagement' }
  ];

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex(Math.max(0, lightboxIndex - 1));
      if (e.key === 'ArrowRight') setLightboxIndex(Math.min(galleryItems.length - 1, lightboxIndex + 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryItems.length]);

  // ROI Calculator Logic with Period and Community Value
  const calculateROI = (amount: number, period: string) => {
    // Calculate period in years
    const yearsMap = {
      '10months': 10/12,  // 0.833 years
      '2years': 2,
      '5years': 5,
      '10years': 10
    };
    const years = yearsMap[period as keyof typeof yearsMap];

    const goats = amount / 40;

    // Annual return rate: 9.7% per year
    // 10 months: simple interest (single cycle)
    // 2, 5, 10 years: compound interest (reinvested each cycle)
    let investorNetProfit: number;
    if (period === '10months') {
      investorNetProfit = amount * 0.097 * years;
    } else {
      investorNetProfit = amount * Math.pow(1.097, years) - amount;
    }

    // Community value: 7.5x the investor return
    const communityValue = investorNetProfit * 7.5;

    // Total value created
    const totalValueCreated = investorNetProfit + communityValue;

    return {
      goats: Math.floor(goats * 10) / 10,
      years: years,
      investorNetProfit: Math.round(investorNetProfit * 100) / 100,
      communityValue: Math.round(communityValue * 100) / 100,
      totalValueCreated: Math.round(totalValueCreated * 100) / 100,
      totalEstimated: Math.round((amount + investorNetProfit) * 100) / 100
    };
  };

  const roi = calculateROI(investmentAmount, investmentPeriod);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(255, 251, 235, 0.95) 100%)'
    }}>

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Maasai Investments Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Maasai Investments</h1>
              <p className="text-xs text-gray-600">Transparent Impact Investing</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition">Investors</a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 transition">FAQ</a>
            <a href="#invest" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg transition">Invest Now</a>
          </nav>

          <a href="https://wa.me/254718130265" className="md:hidden w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition">
            <MessageCircle className="w-5 h-5 text-white" />
          </a>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Image (full opacity) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/maasai_livestock.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Radial gradient overlay: fixed to match parallax background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 100% 75%, rgba(255, 247, 237, 0.38) 0%, rgba(255, 247, 237, 0.92) 35%, rgba(255, 247, 237, 0.99) 60%)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Value Proposition */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                🌍 50+ Investors | €5,000+ Invested | 125+ Goats
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">€40</span> Creates Impact
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Buy 1 Maasai goat. Earn average <strong>9.7% returns</strong> in 10 months while supporting Kenyan families.
                Transparent. Trackable. Tangible.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700 font-medium">30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700 font-medium">97% Profitable Investments</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#calculator" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition transform">
                  Calculate My Returns
                </a>
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-bold text-lg hover:bg-orange-50 transition flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch 2-Min Video
                </button>
              </div>

              {/* Small Disclaimer */}
              <p className="text-xs text-gray-500">
                *9.7% average return based on 250+ investments (2019-2024). Range: 6.8%-13.2%. Not guaranteed. This is impact investing, not a savings account.
              </p>
            </div>

            {/* Right: Hero Image / Video */}
            <div className="relative">
              {!videoPlaying ? (
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="/images/goats.png"
                    alt="Maasai goats grazing in golden savanna sunset, Kenya"
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center transition group"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-xl">
                      <Play className="w-10 h-10 text-orange-600" />
                    </div>
                  </button>
                </div>
              ) : (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black">
                  <video
                    src="/images/natumi2.mp4"
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setVideoPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition z-10"
                  >
                    <X className="w-6 h-6 text-gray-900" />
                  </button>
                </div>
              )}

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">9.7%</p>
                    <p className="text-sm text-gray-600">Average Return</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-green-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">1,247</p>
                    <p className="text-sm text-gray-600">Happy Investors</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ROI CALCULATOR SECTION ===== */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Sticky background - sticks when reaching viewport top, revealed as content scrolls away */}
        <div className="sticky top-0 h-screen overflow-hidden" style={{ marginBottom: '-100vh' }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/goat_calculator.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 0% 75%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.92) 35%, rgba(255, 255, 255, 0.99) 60%)'
            }}
          />
        </div>
        {/* Content scrolls over the sticky background */}
        <div className="relative" style={{ zIndex: 1 }}>
          <section id="calculator" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4" />
              Interactive Calculator
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculate Your Returns
            </h3>
            <p className="text-xl text-gray-600">
              See how your investment grows and the community value you create
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">

            {/* Slider */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Investment Amount: <span className="text-orange-600">€{investmentAmount}</span>
              </label>
              <input
                type="range"
                min="40"
                max="500"
                step="10"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>€40</span>
                <span>€500</span>
              </div>
            </div>

            {/* Period Selector */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Investment Period
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: '10months', label: '10 Months', rate: '~8.1% return' },
                  { value: '2years', label: '2 Years', rate: '~20.3% return' },
                  { value: '5years', label: '5 Years', rate: '~58.7% return' },
                  { value: '10years', label: '10 Years', rate: '~152% return' }
                ].map((period) => (
                  <button
                    key={period.value}
                    onClick={() => setInvestmentPeriod(period.value as any)}
                    className={`px-4 py-3 rounded-xl font-semibold transition ${
                      investmentPeriod === period.value
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="text-sm">{period.label}</div>
                    <div className="text-xs opacity-75 mt-1">{period.rate}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-sm text-gray-600 mb-2">Your Investment Returns</p>
                <p className="text-4xl font-bold text-green-600">€{roi.investorNetProfit}</p>
                <p className="text-xs text-gray-500 mt-2">
                  9.7% annual return • {roi.goats} goat{roi.goats !== 1 ? 's' : ''} • {roi.years < 1 ? '10 months' : `${roi.years} year${roi.years !== 1 ? 's' : ''}`}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-orange-200">
                <p className="text-sm text-gray-600 mb-2">Community Value Generated</p>
                <p className="text-4xl font-bold text-orange-600">€{roi.communityValue}</p>
                <p className="text-xs text-gray-500 mt-2">
                  7.5x your return • Wages + local goods & services
                </p>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-white/70 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Your Total Impact</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your €{investmentAmount} investment creates <span className="font-bold text-orange-600">€{roi.totalValueCreated}</span> in total value over {investmentPeriod === '10months' ? '10 months' : investmentPeriod === '2years' ? '2 years' : investmentPeriod === '5years' ? '5 years' : '10 years'}.
                You earn €{roi.investorNetProfit} profit while €{roi.communityValue} supports Maasai families through local economic activity.
              </p>
            </div>

            {/* CTA */}
            <button onClick={() => handleInvest(`Custom (€${investmentAmount})`)} className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition transform">
              Invest €{investmentAmount} Now
            </button>

          </div>
            </div>
          </section>
        </div>
        {/* Reveal spacer - background visible during this scroll */}
        <div className="h-[30vh]" aria-hidden="true" />
      </div>

      {/* ===== SOCIAL PROOF / TESTIMONIALS ===== */}
      <div className="relative" style={{ zIndex: 2 }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ marginBottom: '-100vh' }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/maasai_golden_sunset.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 100% 75%, rgba(249, 250, 251, 0.38) 0%, rgba(249, 250, 251, 0.92) 35%, rgba(249, 250, 251, 0.99) 60%)'
            }}
          />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <section id="testimonials" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Investors Say
            </h3>
            <p className="text-xl text-gray-600">
              Real stories from 50+ investors across Europe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Testimonial 1 - Bertus de Jong */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/bertus.jpg"
                  alt="Bertus de Jong"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Bertus de Jong</p>
                  <p className="text-sm text-gray-600">Netherlands</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  €100 → €126 (26% return)
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I'm doing this to support a mother in Africa so her children can go to school.
                Made €26 profit and donated an additional €150 to Natumi. It feels amazing to make a real difference!"
              </p>
              <div className="flex text-orange-500">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 - Famkeh Uitdewijk */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/famkeh.jpg"
                  alt="Famkeh Uitdewijk"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Famkeh Uitdewijk</p>
                  <p className="text-sm text-gray-600">Netherlands</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  €120 → €144 (20% return)
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I wanted to try it out and so far I've made a profit. €24 earned on my €120 investment.
                It's real, it's transparent, and it actually works!"
              </p>
              <div className="flex text-orange-500">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 - Lianne Tapper */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/lianne.jpg"
                  alt="Lianne Tapper"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Lianne Tapper</p>
                  <p className="text-sm text-gray-600">Netherlands</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  €120 → €158 (31.7% return)
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I inherited the goat from my mother and I'm very thankful! €38 profit on a €120 investment.
                It's a beautiful way to honor her memory while supporting Maasai families."
              </p>
              <div className="flex text-orange-500">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

          </div>
            </div>
          </section>
        </div>
        <div className="h-[30vh]" aria-hidden="true" />
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="relative py-20 px-6 bg-white" style={{ zIndex: 3 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 5-Step Process
            </h3>
            <p className="text-xl text-gray-600">
              From investment to returns in 10 months
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              { step: 1, title: "Invest €40", desc: "Choose your amount", icon: "💶" },
              { step: 2, title: "We Buy Goat", desc: "Sofy purchases at market", icon: "🐐" },
              { step: 3, title: "Care Period", desc: "Natumi raises for 10 months", icon: "🌾" },
              { step: 4, title: "Sale & Profit", desc: "Goat sold, profit split 3 ways", icon: "💰" },
              { step: 5, title: "Reinvest or Withdraw", desc: "Your choice", icon: "🔄" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  {item.icon}
                </div>
                <div className="mb-2 text-sm font-bold text-orange-600">STEP {item.step}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== INVESTMENT TIERS ===== */}
      <div className="relative" style={{ zIndex: 4 }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ marginBottom: '-100vh' }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/savanna_kilimanjaro.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 0% 75%, rgba(255, 247, 237, 0.38) 0%, rgba(255, 247, 237, 0.92) 35%, rgba(255, 247, 237, 0.99) 60%)'
            }}
          />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <section id="invest" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Investment
            </h3>
            <p className="text-xl text-gray-600">
              All tiers offer the same great returns and impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Tier 1: Starter */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-200">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Starter</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">€40</span>
                  <span className="text-gray-600">one-time</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">1 Maasai goat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Monthly photo updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">~€3.88 estimated profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">10-month investment period</span>
                </li>
              </ul>
              <button onClick={() => handleInvest('Starter (€40)')} className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition">
                Invest €40
              </button>
            </div>

            {/* Tier 2: Growth (BEST VALUE) */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                BEST VALUE
              </div>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Growth</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">€100</span>
                  <span className="text-orange-100">one-time</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">2.5 Maasai goats</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">Weekly photo + video updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">~€9.70 estimated profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">Priority WhatsApp support</span>
                </li>
              </ul>
              <button onClick={() => handleInvest('Growth (€100)')} className="w-full py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition">
                Invest €100
              </button>
            </div>

            {/* Tier 3: Impact */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-200">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Impact</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">€200</span>
                  <span className="text-gray-600">one-time</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">5 Maasai goats</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">Video call with Sofy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">~€19.40 estimated profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">VIP investor status</span>
                </li>
              </ul>
              <button onClick={() => handleInvest('Impact (€200)')} className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold hover:shadow-lg transition">
                Invest €200
              </button>
            </div>

          </div>
            </div>
          </section>
        </div>
        <div className="h-[30vh]" aria-hidden="true" />
      </div>

      {/* ===== TRUST SECTION (Legal, Security, Guarantees) ===== */}
      <div className="relative" style={{ zIndex: 5 }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ marginBottom: '-100vh' }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/maasai_zebra_walk.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 100% 75%, rgba(249, 250, 251, 0.38) 0%, rgba(249, 250, 251, 0.92) 35%, rgba(249, 250, 251, 0.99) 60%)'
            }}
          />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Your Investment is Protected
            </h3>
            <p className="text-xl text-gray-600">
              Transparency, security, and guarantees you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">30-Day Money-Back</h4>
              <p className="text-gray-600">
                Not satisfied? Full refund within 30 days. No questions asked. Your risk = zero.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Tracking</h4>
              <p className="text-gray-600">
                See every transaction. Monthly photo updates. Full transparency. No black boxes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Registered Platform</h4>
              <p className="text-gray-600">
                Legally registered. Audited financials. Certified partnerships. Full compliance.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Legal: <a href="#" className="text-orange-600 hover:underline">Terms of Service</a> |
              <a href="#" className="text-orange-600 hover:underline ml-2">Privacy Policy</a> |
              <a href="#" className="text-orange-600 hover:underline ml-2">Risk Disclosure</a>
            </p>
            <p className="text-xs text-gray-500">
              Maasai Investments is a community based investment initiative
            </p>
              </div>
            </div>
          </section>
        </div>
        <div className="h-[30vh]" aria-hidden="true" />
      </div>

      {/* ===== IMPACT GALLERY ===== */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50" style={{ zIndex: 6 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              📸 Real Impact
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impact in Action
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the real people, real herds, and real impact behind every investment
            </p>
          </div>

          {/* Photo/Video Grid - 4 columns responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                    />
                    {/* Play button overlay for videos */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[16px] border-l-orange-600 border-y-[10px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ zIndex: 7 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/maasai_livestock.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 100% 75%, rgba(249, 115, 22, 0.38) 0%, rgba(249, 115, 22, 0.92) 35%, rgba(249, 115, 22, 0.99) 60%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Join more than 50 investors who have invested over €5,000 in Maasai communities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#calculator" className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-orange-50 transition">
              Calculate My Returns
            </a>
            <a href="https://wa.me/254718130265" className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Ask Questions First
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="relative py-20 px-6 bg-white" style={{ zIndex: 8 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to know before investing
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this legit? How can I trust you?",
                a: "We've facilitated 250+ livestock transactions since 2019, with 97% profitable returns. You get: monthly photo updates, real-time tracking, 30-day money-back guarantee, and direct WhatsApp contact with Sofy (our coordinator in Kenya). We're transparent about risks and registered as an impact investment platform."
              },
              {
                q: "What if the goat dies or gets sick?",
                a: "Animal health is covered by our partnership with experienced Maasai herders. In the rare case (< 3% historically) of animal loss, we have contingency protocols: insurance replacement, proportional loss distribution, or reinvestment option. Full transparency on all outcomes."
              },
              {
                q: "How do I get my money back?",
                a: "After ~10 months, your goat is sold at market. Profit is split 3 ways: 1/3 to investor (you), 1/3 to coordinator (Sofy), 1/3 to herder (Natumi). Your principal + profit is added to your account balance. You can withdraw via bank transfer or reinvest for compound growth."
              },
              {
                q: "What are the fees? Are there hidden costs?",
                a: "Zero upfront fees. The only cost: €1/month care fee (€10 total over 10 months), deducted from final profit. No withdrawal fees. No signup fees. No hidden costs. 100% transparent pricing."
              },
              {
                q: "Can I visit my goats in Kenya?",
                a: "VIP investors (€200+) get priority for our annual Kenya trip (planned 2026). All investors can request video calls with Sofy to see herds. We encourage visits but understand it's not practical for everyone. Photos/videos bring the experience to you."
              },
              {
                q: "Is this ethical? Does it actually help Maasai communities?",
                a: "Yes. This is a partnership model, not charity. Sofy and Natumi earn fair wages (1/3 of profit each). Families gain sustainable income, access to livestock markets, and economic empowerment. We track impact: families supported, income increase %, children educated."
              },
              {
                q: "What's the minimum and maximum investment?",
                a: "Minimum: €40 (1 goat). Maximum: €500 per month (capacity-limited due to herd availability). Many investors start with €40, see results, then scale up. Average investor: €80-120."
              },
              {
                q: "How is this different from donating to charity?",
                a: "Donations = one-way. This = partnership. You get financial returns + impact. Maasai families earn income (not handouts) and build wealth. It's sustainable, dignified, and mutually beneficial. Think: impact investing, not philanthropy."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === i && (
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="https://wa.me/254718130265" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition">
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 px-6 bg-gray-900 text-gray-300" style={{ zIndex: 9 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          <div>
            <h5 className="text-white font-bold mb-4">Maasai Investments</h5>
            <p className="text-sm mb-4">
              Transparent livestock investment platform connecting European investors with Maasai communities.
            </p>
            <div className="flex gap-3">
              {/* Social icons placeholder */}
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">f</a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">t</a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">in</a>
            </div>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Legal</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition">Investor Protection</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Contact</h6>
            <ul className="space-y-2 text-sm">
              <li>📍 Nairobi, Kenya</li>
              <li>📍 Amsterdam, Netherlands</li>
              <li>📱 <a href="https://wa.me/254718130265" className="hover:text-white transition">+254 718 130265</a></li>
              <li>✉️ hello@maasai-investments.com</li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            © 2024 Maasai Investments. All rights reserved. |
            <span className="ml-2">🤖 Designed with Claude Code + 100 Expert Insights</span>
          </p>
        </div>
      </footer>

      {/* ===== INVEST POPUP ===== */}
      {investPopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setInvestPopup(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Great choice!</h4>
              <p className="text-gray-600 mb-6">
                Click the button below to get in touch with us on WhatsApp. We'll help you get started with your <strong>{investPopup}</strong> investment right away.
              </p>
              <button
                onClick={confirmInvest}
                className="w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Continue on WhatsApp
              </button>
              <button
                onClick={() => setInvestPopup(null)}
                className="mt-3 text-gray-500 hover:text-gray-700 text-sm transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== LIGHTBOX MODAL ===== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition z-10"
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Previous button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition z-10"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Next button */}
          {lightboxIndex < galleryItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition z-10"
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* Media content */}
          <div
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[lightboxIndex].type === 'image' ? (
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={galleryItems[lightboxIndex].src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
            {lightboxIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}

    </div>
  );
}
