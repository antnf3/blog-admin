import React, { Fragment, useEffect, useState } from "react";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TmpBoxHeader from "./layout/TmpBoxHeader";
import TmpBoxOutline from "./layout/TmpBoxOutline";
import TmpBoxList from "./layout/TmpBoxList";
import LabelDetail from "./LabelDetail";
import { connect } from "react-redux";
import { query } from "../store";

const category = { COUPANG_ID: "쿠팡아이디" };

function BoxDetail(props: any) {
  const { list } = props;

  console.log(list);

  return (
    <Fragment>
      <Fragment>
        <TmpBoxOutline>
          <TmpBoxHeader title={list[0].title}>
            <Link id="navLink3" to="/12364">
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </TmpBoxHeader>

          <TmpBoxList bgColor={"#f1f3f5"}>
            {list[0].data.map((id: any) => (
              <LabelDetail key={id.COUPANG_ID} value={id.COUPANG_ID} />
            ))}
          </TmpBoxList>
        </TmpBoxOutline>
      </Fragment>
    </Fragment>
  );
}

export default BoxDetail;
