import styled from 'styled-components';

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 15%;
  }

  img {
    width: 15%;
  }
`;


export const ImageCard = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' :'#181717')};
  height: 100%;
`;