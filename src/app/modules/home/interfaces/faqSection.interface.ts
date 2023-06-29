import { GetStarted } from "./heroSection.interface";

export interface FaqSection {
  title: string;
  faqList: FaqItem[];
  getStarted: GetStarted
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
