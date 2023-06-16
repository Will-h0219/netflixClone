export interface FaqSection {
  title: string;
  faqList: FaqItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
