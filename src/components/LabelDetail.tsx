import React from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyOutline = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.1rem;
  svg {
    align-self: center;
    font-size: 1.2rem;
  }
`;
const StyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: #69db7c;
  border-radius: 4px;
  min-width: 5rem;
  height: 1.7rem;
  color: #1864ab;
  margin: 0.2rem 0 0 0.2rem;
  padding: 0 0.1rem;
`;

interface TxtProps {
  value: string;
}
function LabelDetail({ value }: TxtProps) {
  return (
    <StyOutline>
      <StyDiv>{value}</StyDiv>
      <FontAwesomeIcon icon={faTimes} />
    </StyOutline>
  );
}

export default LabelDetail;
