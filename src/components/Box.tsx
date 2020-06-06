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
import { connect } from "react-redux";
import { query } from "../store";

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

function Box({ data, onBtnClick }: any) {
  const click = (jobId: string, useYn: string) => async () => {
    const params = {
      mapFile: "index.update",
      inData: { JOB_ID: jobId, USE_YN: useYn === "N" ? "Y" : "N" },
    };
    const res = await onBtnClick(params);
    console.log(res);
  };
  return (
    <TmpBoxOutline>
      <TmpBoxHeader title={`${data.BLOG_TYPE_NM} - ${data.TOKEN_NM}`}>
        <StyRunBtn
          icon={faSyncAlt}
          onClick={click(data.JOB_ID, data.USE_YN)}
          running={data.USE_YN}
        />
        <Link to={`/${data.JOB_ID}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Link to={`/${data.JOB_ID}`}>
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

function mapDispatchToProps(dispatch: any) {
  return { onBtnClick: (params: any) => dispatch(query(params)) };
}

export default connect(null, mapDispatchToProps)(Box);
