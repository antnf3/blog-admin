import React from "react";
import styled from "styled-components";

interface BoxProps {
  bgColor: string;
}
const StyBox = styled.div<BoxProps>`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#69db7c")};
  max-width: 35rem;
  min-width: 20rem;
  min-height: 2.2rem;
  max-height: 12rem;
  margin-top: -0.8rem;
  border-radius: 4px;
  overflow-y: auto;
`;
function TmpBoxList({ bgColor, children }: any) {
  return <StyBox bgColor={bgColor}>{children}</StyBox>;
}

export default TmpBoxList;
