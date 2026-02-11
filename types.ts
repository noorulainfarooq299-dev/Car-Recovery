
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName: string; // Used to look up the component
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  location: string;
  message: string;
}
