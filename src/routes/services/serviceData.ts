export interface ServiceImage {
    url: string;
    alt: string;
    caption?: string;
}

export interface ServiceBenefit {
    title: string;
    description: string;
    icon?: string;
}

export interface ServicePricing {
    amount: number;
    currency: string;
    duration?: string;
    description?: string;
}

export interface ServiceTestimonial {
    quote: string;
    author: string;
    date?: string;
}

export interface ServiceDetails {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    cardImages?: ServiceImage[];
    modalImages?: ServiceImage[];
    benefits?: ServiceBenefit[];
    includes?: string[];
    prerequisites?: string[];
    pricing?: ServicePricing[];
    testimonials?: ServiceTestimonial[];
    faq?: { question: string; answer: string }[];
    recommendations?: string[];
    duration?: string;
    location?: string;
    availability?: string;
    customizations?: string[];
    tags?: string[];
    ritualItems?: string[];
    energeticProperties?: string[];
    chakraAlignment?: string[];
    moonPhaseRecommendations?: string[];
    elementalAffinity?: string[];
    ctaText?: string;
    ctaLink?: string;
}

export const services: ServiceDetails[] = [
    {
        id: 'general-wizardry',
        title: 'General Wizardry',
        shortDescription: 'Personalized mystical guidance and ritual crafting for your unique journey.',
        fullDescription: "Embark on a transformative journey through the mystical realms with our bespoke wizardry services. Each session is carefully crafted to align with your personal energy and intentions, creating a unique magical experience that resonates with your soul\u0027s purpose.",
        cardImages: [
            {
                url: '/images/wizardry-preview.jpg',
                alt: 'Mystical artifacts and crystals'
            }
        ],
        modalImages: [
            {
                url: '/images/wizardry-full.jpg',
                alt: 'Full ritual setup',
                caption: 'Sacred space creation with personalized elements'
            }
        ],
        benefits: [
            {
                title: 'Energy Alignment',
                description: 'Deep resonance with your personal frequency',
                icon: '✨'
            },
            {
                title: 'Ritual Mastery',
                description: 'Learn ancient and modern magical practices',
                icon: '🔮'
            }
        ],
        includes: [
            'Custom ritual design',
            'Spiritual guidance',
            'Energy work',
            'Sacred space creation'
        ],
        pricing: [
            {
                amount: 222,
                currency: 'USD',
                duration: '2 hours',
                description: 'Full ritual experience'
            }
        ],
        energeticProperties: [
            'Etheric attunement',
            'Chakra balancing',
            'Aura cleansing'
        ],
        moonPhaseRecommendations: [
            'New Moon: Intention setting',
            'Full Moon: Power amplification'
        ],
        elementalAffinity: [
            'Air: Mental clarity',
            'Fire: Transformation',
            'Water: Emotional healing',
            'Earth: Grounding'
        ],
        tags: ['mystical', 'transformative', 'personal', 'spiritual'],
        ctaText: 'Begin Your Magical Journey',
        ctaLink: '/contact'
    },
    {
        id: 'harm-reduction',
        title: 'Harm Reduction',
        shortDescription: 'Expert guidance in navigating altered states with grace and wisdom.',
        fullDescription: 'Our harm reduction services provide comprehensive support for those exploring consciousness expansion. We offer evidence-based practices combined with spiritual wisdom to ensure safe and meaningful experiences.',
        benefits: [
            {
                title: 'Safety First',
                description: 'Expert risk assessment and mitigation strategies',
                icon: '🛡️'
            },
            {
                title: 'Integration Support',
                description: 'Process and integrate your experiences effectively',
                icon: '🌱'
            }
        ],
        includes: [
            'Substance education',
            'Integration support',
            'Risk assessment',
            'Safety protocols'
        ],
        prerequisites: [
            'Initial consultation',
            'Health screening',
            'Intention setting session'
        ],
        pricing: [
            {
                amount: 333,
                currency: 'USD',
                duration: '3 hours',
                description: 'Full guidance session'
            }
        ],
        tags: ['safety', 'education', 'support', 'integration'],
        ctaText: 'Start Your Safe Journey',
        ctaLink: '/contact'
    },
    {
        id: 'trip-sitting',
        title: 'Trip Sitting',
        shortDescription: 'Compassionate presence and support during your transformative experiences.',
        fullDescription: 'Our experienced guides provide a safe and nurturing container for your journey into expanded states of consciousness. We combine traditional wisdom with modern harm reduction practices to ensure a profound and protected space for your exploration.',
        benefits: [
            {
                title: '24/7 Support',
                description: 'Continuous presence and guidance throughout your journey',
                icon: '🌟'
            },
            {
                title: 'Safe Container',
                description: 'Carefully prepared environment for optimal experience',
                icon: '🏠'
            }
        ],
        includes: [
            '24/7 support',
            'Safe space creation',
            'Emergency protocols',
            'Integration guidance'
        ],
        duration: '8-12 hours',
        location: 'Your space or our sacred venue',
        availability: '24/7 by appointment',
        customizations: [
            'Music selection',
            'Aromatherapy',
            'Lighting design',
            'Comfort items'
        ],
        pricing: [
            {
                amount: 555,
                currency: 'USD',
                duration: 'Full journey',
                description: 'Complete sitting service'
            }
        ],
        tags: ['support', 'safety', 'guidance', 'presence'],
        ctaText: 'Book Your Guide',
        ctaLink: '/contact'
    }
];
