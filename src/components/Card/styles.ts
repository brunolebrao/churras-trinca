import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  min-width: 300px;
  height: auto;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #666;
  font-weight: 900;
`;

export const CardDate = styled.span`
  font-size: 1.5rem;
`;

export const CardBody = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-direction: column;
`;

export const CardCategory = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const CardAmount = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
