import './btn.css'
import { BtnProps, ButtonType } from "./buttonTypes";


function getButtonClass(btnType: ButtonType): string {
  switch (btnType) {
    case ButtonType.ELEVATED:
      return "elevatedBtn";
    case ButtonType.DEPRESSED:
      return "depressedBtn";
    case ButtonType.OUTLINED:
      return "outlinedBtn";
    case ButtonType.TEXT:
      return "textBtn";
    default:
      return "depressedBtn";
  }
}

function Button({ title, onClick, btnType = ButtonType.DEPRESSED }: BtnProps) {
  return (
    <div>
      <button onClick={onClick} className={`${getButtonClass(btnType)} btnClass`}>
        {title}
      </button>
    </div>
  );
}


export default Button;
