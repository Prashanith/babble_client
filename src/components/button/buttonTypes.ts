export enum ButtonType {
  ELEVATED = "elevatedBtn",
  DEPRESSED = "depressedBtn",
  TEXT = "textBtn",
  OUTLINED = "outlinedBtn",
}

export interface BtnProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: ButtonType;
}
