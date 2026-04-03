export type CaseStudy = {
  id: string; // used for mapping. Name of md file.
  title: string;
  location: string;
  date: Date;
  content: string;
  subTitle?: string;
  cover?: string;
};

export type CoreValue = {
  cover: string;
  title: string;
  description: string;
  pillarType: string;
};
