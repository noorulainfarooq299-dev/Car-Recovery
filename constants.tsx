
import { Service, Testimonial } from './types';

export const COMPANY_NAME = "Dubai Rapid Car Recovery";
export const TAGLINE = "24/7 Emergency Car Recovery & On-Site Car Repair Across Dubai";
export const PHONE_NUMBER = "+971 50 123 4567";
export const WHATSAPP_LINK = "https://wa.me/971501234567";

export const SERVICES: Service[] = [
  {
    id: 'emergency-recovery',
    title: 'Emergency Car Recovery',
    description: 'Fastest response for breakdowns and accidents across Dubai.',
    longDescription: 'Our recovery fleet is positioned strategically to ensure we reach you in under 30 minutes. We handle all types of vehicle breakdowns and mechanical failures with professional towing equipment.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'engine-repair',
    title: 'Engine Breakdown Repair',
    description: 'On-site diagnosis and repair for engine heating and failure.',
    longDescription: 'Our certified mechanics provide immediate engine troubleshooting on-site. We handle overheating, belt issues, and sensor failures without needing to tow your car to a garage.',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1486006396113-ad73c4c3d231?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'battery-replacement',
    title: 'Car Battery Replacement',
    description: 'Jumpstart or complete battery replacement on your location.',
    longDescription: 'Stuck with a dead battery? We deliver and install premium car batteries on-site. Our technicians carry diagnostic tools to check your alternator health as well.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1620939511593-299308111979?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'flat-tyre',
    title: 'Flat Tyre Replacement',
    description: 'Safe on-site tyre changing and puncture repair service.',
    longDescription: 'We provide quick tyre changes and pressure checks. If you do not have a spare, we can assist with puncture repairs or transport your vehicle to the nearest tyre center.',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1549021444-2826e1157f6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'radiator-repair',
    title: 'Radiator & Cooling Repair',
    description: 'Fixing coolant leaks and radiator issues to prevent overheating.',
    longDescription: 'Engine overheating in Dubai heat is common. We diagnose radiator leaks, thermostat failures, and hose bursts on the spot to get you moving again.',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1597839219216-a773cb2473e4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alternator-repair',
    title: 'Alternator & Starter Repair',
    description: 'On-site electrical repairs for cars that wont start.',
    longDescription: 'If your car is not starting or charging, it might be the alternator or starter motor. Our mechanics can test and often repair or replace these electrical components on the roadside.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'desert-recovery',
    title: 'Desert Recovery',
    description: 'Specialized 4x4 recovery for vehicles stuck in Dubai dunes.',
    longDescription: 'Our specialized off-road recovery team uses high-torque 4x4 trucks to safely extract vehicles from the desert sand without causing frame or transmission damage.',
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fuel-delivery',
    title: 'Emergency Fuel Delivery',
    description: 'Petrol or Diesel delivery when you run out of fuel.',
    longDescription: 'Ran out of fuel on the highway? We deliver high-quality petrol or diesel to your location within minutes to ensure you reach the next service station.',
    iconName: 'Fuel',
    image: 'https://images.unsplash.com/photo-1526614187127-d21741d8021a?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Maktoum",
    rating: 5,
    text: "Excellent service. My car broke down near Dubai Marina at midnight. They arrived in 15 minutes and fixed the battery on the spot.",
    location: "Dubai Marina"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    rating: 5,
    text: "Professional engine repair. I was worried I would need a tow, but the mechanic fixed the coolant leak right there in Business Bay.",
    location: "Business Bay"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    rating: 5,
    text: "The quickest tyre change service I have used in Dubai. Very polite staff and fair pricing with no hidden charges.",
    location: "Al Barsha"
  },
  {
    id: 4,
    name: "Maria Rossi",
    rating: 5,
    text: "Expert desert recovery. We were stuck deep in the dunes and they found us using GPS and got us out safely and quickly.",
    location: "Al Qudra"
  }
];

export const SERVICE_AREAS = [
  "Dubai Marina", "Downtown Dubai", "Jumeirah", "Deira", "Al Barsha", 
  "Business Bay", "Palm Jumeirah", "JVC", "Al Quoz", "Mirdif", "Silicon Oasis"
];

// Added to fix the missing export member generateLocalBusinessSchema in constants.tsx
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": COMPANY_NAME,
  "description": TAGLINE,
  "telephone": PHONE_NUMBER,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Quoz Industrial Area 3",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
});
