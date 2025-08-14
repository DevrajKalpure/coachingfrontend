import React, { useState } from 'react';
import './ResumePage.css'; // We will update this CSS file next

const pricingPlans = [
    {
        title: 'Resume',
        price: '1499',
        features: [
            '3-5 Days Delivery',
            'International Acceptance',
            'ATS-Compatible',
            'Unlimited Revisions',
            '6 Month Support',
        ],
    },
    {
        title: 'Cover Letter',
        price: '599',
        features: [
            '3-5 Days Delivery',
            'Job & Role Specific Content',
            'Global Standard Followed',
            'ATS Compatible',
            '6 Months Support',
        ],
    },
    {
        title: 'LinkedIn',
        price: '1399',
        features: [
            '3-5 Days Delivery',
            'Search Engine Optimized',
            'Global Standard Followed',
            'Unlimited Revisions',
            '6 Month Support',
        ],
    },
];

const comboPlans = [
    {
        title: 'Starter Pack',
        subtitle: 'Resume + Cover Letter',
        price: '1899',
        originalPrice: '2098',
        features: [
            'Everything in Resume Plan',
            'Everything in Cover Letter Plan',
            'Cohesive Personal Branding',
            'Includes ~10% Discount',
            '6 Month Support',
        ],
        isCombo: true,
    },
    {
        title: 'Ultimate Career Kit',
        subtitle: 'Resume + Cover Letter + LinkedIn',
        price: '2999',
        originalPrice: '3497',
        features: [
            'Complete Professional Makeover',
            'All Individual Plan Features Included',
            'Fully Optimized Digital & Paper Presence',
            'Includes ~15% Discount',
            'Priority 6 Month Support',
        ],
        isCombo: true,
        isFeatured: true,
    },
    {
        title: 'Pro Online Presence',
        subtitle: 'Resume + LinkedIn',
        price: '2599',
        originalPrice: '2898',
        features: [
            'Everything in Resume Plan',
            'Everything in LinkedIn Plan',
            'Synced & Optimized Profiles',
            'Includes ~10% Discount',
            '6 Month Support',
        ],
        isCombo: true,
    },
];

 const handlePayment = () => {
        alert("Payment gateway integration needed! This is a placeholder.");
    };
    
// Reusable Pricing Card Component with corrected structure
const PricingCard = ({ title, subtitle, price, originalPrice, features, isCombo, isFeatured }) => (
    <div className={`plan ${isCombo ? 'combo' : ''} ${isFeatured ? 'featured' : ''}`}>
        {isFeatured && <div className="featured-banner">Best Value</div>}
        
        {/* The header is now in its own container to prevent overlap */}
        <div className="plan-top">
            <div className="plan-header">
                {title}
                {subtitle && <span className="subtitle">{subtitle}</span>}
            </div>
        </div>

        {/* The price circle is positioned between the header and body */}
        <div className="price-circle">
            ₹{price}
            {originalPrice && <span className="original-price"><s>₹{originalPrice}</s></span>}
        </div>

        <div className="plan-body">
            <ul className="plan-features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="buy-button" onClick={handlePayment}>BUY NOW</button>
        </div>
    </div>
);


function ResumePage() {
    const [activeTab, setActiveTab] = useState('plans'); // 'plans' or 'combo'

    const plansToDisplay = activeTab === 'plans' ? pricingPlans : comboPlans;

    return (
        // The container class now changes based on the active tab
        <div className={`pricing-container ${activeTab}-active`}>
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'plans' ? 'active' : ''}`}
                    onClick={() => setActiveTab('plans')}
                >
                    Plans
                </button>
                <button
                    className={`tab-button ${activeTab === 'combo' ? 'active' : ''}`}
                    onClick={() => setActiveTab('combo')}
                >
                    Combo
                </button>
            </div>

            <div className="plans-wrapper">
                {plansToDisplay.map((plan, index) => (
                    <PricingCard
                        key={index}
                        title={plan.title}
                        subtitle={plan.subtitle}
                        price={plan.price}
                        originalPrice={plan.originalPrice}
                        features={plan.features}
                        isCombo={plan.isCombo}
                        isFeatured={plan.isFeatured}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResumePage;