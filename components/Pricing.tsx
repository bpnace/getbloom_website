import React, { useState } from 'react';
import Link from 'next/link';

interface PricingFeature {
  id: number;
  name: string;
  includedIn: ('starter' | 'professional' | 'enterprise')[];
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}

const pricingFeatures: PricingFeature[] = [
  { id: 1, name: 'Basic Analytics', includedIn: ['starter', 'professional', 'enterprise'] },
  { id: 2, name: 'Up to 1,000 visitors/month', includedIn: ['starter', 'professional', 'enterprise'] },
  { id: 3, name: 'Basic Marketing Tools', includedIn: ['starter', 'professional', 'enterprise'] },
  { id: 4, name: 'Email Support', includedIn: ['starter', 'professional', 'enterprise'] },
  { id: 5, name: 'Advanced Analytics', includedIn: ['professional', 'enterprise'] },
  { id: 6, name: 'Up to 10,000 visitors/month', includedIn: ['professional', 'enterprise'] },
  { id: 7, name: 'Full Marketing Suite', includedIn: ['professional', 'enterprise'] },
  { id: 8, name: 'Phone Support', includedIn: ['professional', 'enterprise'] },
  { id: 9, name: 'Custom Reporting', includedIn: ['enterprise'] },
  { id: 10, name: 'Unlimited visitors', includedIn: ['enterprise'] },
  { id: 11, name: 'Dedicated Account Manager', includedIn: ['enterprise'] },
  { id: 12, name: '24/7 Priority Support', includedIn: ['enterprise'] },
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses just getting started.',
    monthlyPrice: 19,
    yearlyPrice: 190,
    currency: '$',
    features: ['Basic Analytics', 'Up to 1,000 visitors/month', 'Basic Marketing Tools', 'Email Support'],
    ctaText: 'Get Started',
    ctaLink: '/signup?plan=starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Great for growing businesses that need more power.',
    monthlyPrice: 49,
    yearlyPrice: 490,
    currency: '$',
    features: [
      'Everything in Starter, plus:',
      'Advanced Analytics',
      'Up to 10,000 visitors/month',
      'Full Marketing Suite',
      'Phone Support',
    ],
    highlighted: true,
    ctaText: 'Start Free Trial',
    ctaLink: '/signup?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with advanced needs.',
    monthlyPrice: 99,
    yearlyPrice: 990,
    currency: '$',
    features: [
      'Everything in Professional, plus:',
      'Custom Reporting',
      'Unlimited visitors',
      'Dedicated Account Manager',
      '24/7 Priority Support',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact',
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-20 bg-white px-6 md:px-12 lg:px-20" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your business. No hidden fees or long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-4 ${isAnnual ? 'text-gray-500' : 'text-gray-900 font-medium'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              aria-pressed={isAnnual}
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-4 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual Billing <span className="text-blue-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-white border border-gray-200 shadow'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.currency}
                  {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2 mt-1">
                      <circle cx="10" cy="10" r="10" fill="#EBF5FF" />
                      <path d="M6 10L9 13L14 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink}
                className={`block w-full py-3 px-6 text-center font-bold rounded-full ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                } transition-colors`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 