import React from "react";
import styled from "styled-components";
import Label from "./Label";

const StyBox = styled.div`
  background-color: #828282;
  min-width: 30rem;
  max-width: 60rem;
  min-height: 5rem;
  max-height: 20rem;
  margin-top: 1rem;
`;

function Box() {
  return (
    <StyBox>
      <Label />
    </StyBox>
  );
}

export default Box;
