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
    <div className={Styles.inputWrap}>
      <input
        {...rest}
        ref={inputRef}
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
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        {placeholder}
      </label>
      <span
        data-testid={`${name}-status`}
        title={error || 'Tudo certo'}
        className={Styles.status}
      >
        {error ? '🔴' : '🔵'}
      </span>
    </div>
  );
};

export default Input;
