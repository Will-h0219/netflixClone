import { CtaBase, InputBase } from "src/app/shared/interfaces/input.interface";

export interface HeroSectionModule {
  title?: string;
  subtitle? : string;
  getStarted?: GetStarted;
}

export interface GetStarted {
  description?: string;
  inputCta: InputBase;
  inputErrors: { [key: string]: string };
  getStartedCta: GetStartedCta;
}

export interface GetStartedCta extends CtaBase {
}
