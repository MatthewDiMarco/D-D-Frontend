import React from 'react';
import styled from '@emotion/styled';

const Header = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
`

const HeaderRight = styled.div`
  float: right;
`

const Link = styled.a`
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;

  :hover {
      background-color: #ddd;
  }
`

const LinkTitle = styled(Link)`
  font-size: 25px;
  font-weight: bold;
`

interface BannerProps {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <Header>
      <LinkTitle href="/">DnD App</LinkTitle>
      <HeaderRight>
        <Link href="/" css={Link}>Home</Link>
        <Link href="/about" css={Link}>About</Link>
      </HeaderRight>
    </Header>
  );
};

export default Banner;