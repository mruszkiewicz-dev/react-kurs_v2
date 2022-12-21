import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  margin-left: 100px;
  padding: 10px;
  width: 500px;
  position: relative;
  top: 20px;
`;

const StyledLinkRemove = styled.a`
  padding: 20px;
  text-decoration: underline;
  color: black;
`;

const StyledLinkP = styled.a`
  text-decoration: underline;
  text-transform: uppercase;
  color: black;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledWrapperButton = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const data = {
  id: 1,
  title: 'My best note ever',
  date: '3 days',
  avarat: null,
  link: 'http://www.tarlo.pl',
  content:
    'Born and raised in Illinois, Davis left his studies at the Juilliard School in New York City and made his professional debut as a member of saxophonist Charlie Parker s bebop quintet from 1944 to 1948. Shortly after, he recorded the Birth of the Cool sessions for Capitol Records, which were instrumental to the development of cool jazz. In the early 1950s, Miles Davis recorded some of the earliest hard bop music while on Prestige Records but did so haphazardly due to a heroin addiction. After a widely acclaimed comeback performance at the Newport Jazz Festival in 1955, he signed a long-term contract with Columbia Records and recorded the 1957 album Round About Midnight.[2] It was his first work with saxophonist John Coltrane and bassist Paul Chambers, key members of the sextet he led into the early 1960s. During this period, he alternated between orchestral jazz collaborations with arranger Gil Evans, such as the Spanish-influenced Sketches of Spain (1960), and band recordings, such as Milestones (1958) and Kind of Blue (1959).',
};

const Details = ({ pageType }) => (
  <StyledWrapper>
    <Heading big>{data.title}</Heading>
    <Paragraph bold>Created - {data.date}</Paragraph>
    <Paragraph>{data.content}</Paragraph>
    {pageType !== 'note' && (
      <StyledLinkP bold href={data.link}>
        Open this {pageType}
      </StyledLinkP>
    )}
    <StyledWrapperButton>
      <Button activeColor={pageType}>CLOSE / SAVE</Button>
      <StyledLinkRemove href="a">remove note</StyledLinkRemove>
    </StyledWrapperButton>
  </StyledWrapper>
);
export default Details;
