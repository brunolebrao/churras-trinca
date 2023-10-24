import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  min-width: 400px;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: #666;
  font-weight: 900;
`;

export const CardDate = styled.span`
  font-size: 1.5rem;
`;

export const CardBody = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-start; */
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
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

export const CardPeople = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPeopleName = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export const CardPeopleAmount = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #666;
  margin: 1rem 0;
`;
