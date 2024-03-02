import { FunctionComponent, JSX } from "https://esm.sh/preact@10.19.2";
import React from 'https://dev.jspm.io/react@17.0.2';

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
variant:"primary" | "secondary" | "three";
};

const Button: FunctionComponent<ButtonProps> = (props)=>{
  const {variant, children, ...rest } = props;
  return(
    <button class={`button ${variant}`} {...rest}>
     {children}
    </button>
  )
}

export default Button;