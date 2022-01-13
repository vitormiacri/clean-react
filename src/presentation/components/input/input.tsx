import React, { useContext, useRef } from 'react';
import Context from '@/presentation/contexts/form/form-context';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = ({ name, placeholder, ...rest }: Props) => {
  const { state, setState } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>();
  const error = state[`${name}Error`];

  return (
    <div
      className={Styles.inputWrap}
      data-testid={`${name}-wrap`}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...rest}
        ref={inputRef}
        title={error}
        placeholder=" "
        name={name}
        data-testid={name}
        readOnly
        onFocus={(e) => {
          e.target.readOnly = false;
        }}
        onChange={(e) => {
          setState({
            ...state,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <label
        title={error}
        data-testid={`${name}-label`}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
