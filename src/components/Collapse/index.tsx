import React from 'react';
import { useCollapse } from 'react-collapsed';

import * as S from './styles';

type CollapseProps = {
  children?: React.ReactNode;
  title?: string;
};

export const Collapse = ({ children, title }: CollapseProps) => {
  const { isExpanded, getCollapseProps, getToggleProps } = useCollapse();
  return (
    <S.Collapsible>
      <S.Header {...getToggleProps()}>
        <S.Arrows>
          {isExpanded ? (
            <img src="/img/arrow-down.png" alt="arrow-down" />
          ) : (
            <img src="/img/arrow-top.png" alt="arrow-top" />
          )}
        </S.Arrows>
        <S.Title>{title}</S.Title>
      </S.Header>
      <div {...getCollapseProps()}>
        <S.CollapsibleChildren>{children}</S.CollapsibleChildren>
      </div>
    </S.Collapsible>
  );
};
