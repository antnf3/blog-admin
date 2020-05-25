import React from "react";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TmpBoxHeader from "./layout/TmpBoxHeader";
import TmpBoxOutline from "./layout/TmpBoxOutline";
import TmpBoxList from "./layout/TmpBoxList";
import LabelDetail from "./LabelDetail";

function BoxDetail() {
  return (
    <TmpBoxOutline>
      <TmpBoxHeader title={"아이디"}>
        <Link id="navLink3" to="/12364">
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </TmpBoxHeader>

      <TmpBoxList bgColor={"#fff"}>
        <LabelDetail name={"1"} value={"2"} />
        <LabelDetail name={"1"} value={"2"} />
        <LabelDetail name={"1"} value={"2"} />
        <LabelDetail name={"1"} value={"2"} />
        <LabelDetail name={"1"} value={"2"} />
        <LabelDetail name={"1"} value={"2"} />
      </TmpBoxList>
    </TmpBoxOutline>
  );
}

export default BoxDetail;
