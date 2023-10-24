import React from 'react';

import * as S from './styles';

type TextAreaProps = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ label, ...rest }: TextAreaProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor="">{label}</S.Label>
      <S.TextArea {...rest}></S.TextArea>
    </S.Wrapper>
  );
};
