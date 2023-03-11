import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    height: 10rem;
    width: 10rem;
  }
`;
