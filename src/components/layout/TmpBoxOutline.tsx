import React from "react";
import styled from "styled-components";

const StyOutBox = styled.div`
  margin: 0 1rem;
`;

function TmpBoxOutline({ children }: any) {
  return <StyOutBox>{children}</StyOutBox>;
}

export default TmpBoxOutline;
