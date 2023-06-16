import { GetStarted } from "./heroSection.interface";

export interface FaqSection {
  title: string;
  faqList: FaqItem[];
  getStarted: GetStarted
}

export interface FaqItem {
  question: string;
  answer: string;
}
