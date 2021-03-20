import React, { memo } from 'react';
import Spinner from '@/presentation/components/spinner/spinner';
import Styles from './form-status-styles.scss';

const Footer: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
};

export default memo(Footer);
