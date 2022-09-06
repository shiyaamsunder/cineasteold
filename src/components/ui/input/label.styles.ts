import styled from "styled-components";

import type { IInputProps } from "./input";

export const StyledLabel = styled.label<Pick<IInputProps, "invalid">>`
  color: ${(p) => (p.invalid ? p.theme.colors.red[400] : "white;")};
  margin: 10px 0px;
  display: block;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
`;
