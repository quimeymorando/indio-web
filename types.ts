export interface PricingFeature {
  text: string;
  icon: 'check' | 'cross';
}

export interface PricingPlan {
  eyebrow?: string;
  title: string;
  price: string;
  currency: string;
  subtitle: string;
  features: PricingFeature[];
}

export interface BrandLogo {
  id: number;
  name: string;
  url: string;
}