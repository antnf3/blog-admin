import React, { Fragment } from "react";
import styled from "styled-components";

const StySpan = styled.div`
  display: inline-block;
  font-size: 0.9rem;
  background-color: green;
  border-radius: 4px;
  width: 8rem;
  margin: 0.2rem;
`;
function Label() {
  return (
    <Fragment>
      <StySpan>ㅁㅁID: ASF343312</StySpan>
      <StySpan>ㅁㅁID: ASF343312</StySpan>
    </Fragment>
  );
}

export default Label;
