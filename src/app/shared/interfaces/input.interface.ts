export interface CtaBase {
  name: string;
  label: string;
}

export interface InputBase extends CtaBase {
  type?: string;
  placeholder?: string;
}
