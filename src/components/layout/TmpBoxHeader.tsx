import React, { Fragment } from "react";
import styled from "styled-components";

const StyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyTitle = styled.h3`
  color: #000;
`;
const StyleHeaderRight = styled.div`
  svg {
    margin: 0 0.4rem;
    font-size: 1.4rem;
  }
`;

function TmpBoxHeader({ title, children }: any) {
  return (
    <Fragment>
      <StyHeader>
        <StyTitle>{title}</StyTitle>
        <StyleHeaderRight>{children}</StyleHeaderRight>
      </StyHeader>
    </Fragment>
  );
}

export default TmpBoxHeader;
