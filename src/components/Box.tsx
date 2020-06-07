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

function Box({ data, onFetch, onSearch }: any) {
  const callback = (res: any) => {
    if (res.type === "QUERY_SUCCESS") {
      onSearch();
    }
  };

  const updClick = (jobId: string, useYn: string) => async () => {
    const params = {
      mapFile: "index.update",
      inData: { JOB_ID: jobId, USE_YN: useYn === "N" ? "Y" : "N" },
    };
    const res = await onFetch(params);
    callback(res);
  };

  const delClick = (jobId: string) => async () => {
    const params = {
      mapFile: "regdaemon.delete",
      inData: { JOB_ID: jobId },
    };
    const res = await onFetch(params);
    callback(res);
  };

  return (
    <TmpBoxOutline>
      <TmpBoxHeader title={`${data.BLOG_TYPE_NM} - ${data.TOKEN_NM}`}>
        <StyRunBtn
          icon={faSyncAlt}
          onClick={updClick(data.JOB_ID, data.USE_YN)}
          running={data.USE_YN}
        />
        <Link to={`/${data.JOB_ID}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <FontAwesomeIcon icon={faTrashAlt} onClick={delClick(data.JOB_ID)} />
      </TmpBoxHeader>
      <TmpBoxList>
        {/* {Object.keys(data).map((key) => (
          <Label key={key} name={key} value={data[key]} />
        ))} */}
        <Label name={"쿠팡ID"} value={data.COUPANG_ID} />
        <Label name={"쿠팡SUB_ID"} value={data.SUB_ID} />
        <Label name={"블로그 카테고리"} value={data.BLOG_CATEGORY_NM} />
        <Label name={"상품대분류"} value={data.PRODUCT_NM} />
        <Label name={"상품소분류"} value={data.PD_OPT_NM} />
      </TmpBoxList>
    </TmpBoxOutline>
  );
}

function mapDispatchToProps(dispatch: any) {
  return { onFetch: (params: any) => dispatch(query(params)) };
}

export default connect(null, mapDispatchToProps)(Box);
