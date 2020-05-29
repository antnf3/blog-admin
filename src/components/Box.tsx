import React from "react";
import Label from "./Label";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TmpBoxHeader from "./layout/TmpBoxHeader";
import TmpBoxOutline from "./layout/TmpBoxOutline";
import TmpBoxList from "./layout/TmpBoxList";
import styled, { keyframes, css } from "styled-components";

interface StyRunBtnProps {
  running: string;
}
const btnRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyRunBtn = styled(FontAwesomeIcon)<StyRunBtnProps>`
  cursor: pointer;
  color: red;
  ${(props) =>
    props.running === "Y" &&
    css`
      animation: ${btnRotate} 2s linear infinite;
    `}
`;

function Box({ data }: any) {
  const click = () => {
    console.log("click");
  };
  return (
    <TmpBoxOutline>
      <TmpBoxHeader title={`${data.BLOG_TYPE_NM} - ${data.TOKEN_NM}`}>
        <Link to="/1234">
          <StyRunBtn icon={faSyncAlt} onClick={click} running={data.USE_YN} />
        </Link>
        <Link to="/1234">
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Link to="/1235">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Link>
      </TmpBoxHeader>
      <TmpBoxList>
        {Object.keys(data).map((key) => (
          <Label key={key} name={key} value={data[key]} />
        ))}
      </TmpBoxList>
    </TmpBoxOutline>
  );
}

export default Box;
