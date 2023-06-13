import { CtaBase, InputBase } from "src/app/shared/interfaces/input.interface";

export interface HeroSectionModule {
  title?: string;
  subtitle? : string;
  description?: string;
  getStarted?: GetStarted;
}

export interface GetStarted {
  inputCta: InputBase;
  inputErrors: { [key: string]: string };
  getStartedCta: GetStartedCta;
}

export interface GetStartedCta extends CtaBase {
}
