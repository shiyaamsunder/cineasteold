import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
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

  :hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 260px;
  height: 380px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const Bottom = styled.div`
  padding: 6px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fedb98;
`;
