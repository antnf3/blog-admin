import React from "react";
import styled from "styled-components";

const StyDiv = styled.div`
  display: inline-block;
  font-size: 0.9rem;
  background-color: #1864ab;
  border-radius: 4px;
  min-width: 6rem;
  min-height: 1.5rem;
  color: #fff;
  text-align: center;
  margin: 0.2rem 0 0 0.2rem;
  padding: 0 0.1rem;
`;

export interface TxtProps {
  name: string;
  value: string;
}
function Label({ name, value }: TxtProps) {
  return (
    <StyDiv>
      {name}: {value}
    </StyDiv>
  );
}

export default Label;
