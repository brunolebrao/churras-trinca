import styled from 'styled-components';

export const Collapsible = styled.div`
  padding: 6px;
  background-color: #eeeeee;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background-color: #dddddd;
  padding: 6px;
  cursor: pointer;
`;
export const Arrows = styled.div`
  img {
    width: 1.5rem;
  }
`;
export const Title = styled.div`
  width: 1.5rem;
  font-weight: 900;
  width: 100%;
`;

export const CollapsibleChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 6px;
  width: 100%;
`;
