import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'assets/images/avatar.svg';

const GreetingWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

function Header() {
  return (
    <Wrapper>
      <GreetingWrapper>
        <WelcomeText>Welcome back,</WelcomeText>
        <UserName>Matthew</UserName>
      </GreetingWrapper>
      <Avatar></Avatar>
    </Wrapper>
  );
}

export default Header;
