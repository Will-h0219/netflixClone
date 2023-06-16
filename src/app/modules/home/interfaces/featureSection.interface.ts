export interface FeatureSection {
  id: string;
  content: FeatureContent;
  textFirst: boolean;
}

export interface FeatureContent {
  title: string;
  description: string;
  media?: any;
}
