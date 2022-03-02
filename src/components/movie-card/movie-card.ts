import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 300px;
  min-width: 160px;
`;

export const RatingBadge = styled.div`
  width: 36px;
  background: ${({ theme }) => theme.colors.purple[400]};
  height: 24px;
  z-index: 100;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Link = styled.a`
  margin-bottom: 10px;
  transition: 120ms transform ease-in;
  width: fit-content;

  :hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 220px;
  height: 330px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  @media (max-width: 960px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 550px) {
    height: 240px;
    width: 160px;
  }
`;

export const Bottom = styled.div`
  padding: 6px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 400px) {
    max-width: 160px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fedb98;
`;
