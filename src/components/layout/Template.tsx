import React, { ReactNode } from "react";
import styled from "styled-components";

const StyOutLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

interface TemplateProps {
  title: string;
  children: ReactNode;
}
function Template({ title, children }: TemplateProps) {
  return (
    <StyOutLine>
      <h1>{title}</h1>
      <StyBody>{children}</StyBody>
    </StyOutLine>
  );
}

export default Template;
