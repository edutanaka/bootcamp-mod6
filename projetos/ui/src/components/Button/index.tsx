import React from 'react';

interface ButtonProps {
  /**
   * atributo do button
   */
  disabled?: boolean;
  /**
   * children que irá ser renderizado
   */
  children: React.ReactNode
}


export default function Button({ disabled, children }: ButtonProps) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  )
}