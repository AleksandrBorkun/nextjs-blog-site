import styled from "@emotion/styled";

export const BlogGrid = styled.div`
  display: grid;
  margin: 1em auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  max-width: 90%;

  @media (min-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  @media (min-width: 1000px) {
    width: 100%;
    max-width: 1440px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
