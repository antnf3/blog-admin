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
  const { data, onFetch } = props;
  console.log(data);

  const data1 = [
    ["adfewrwer", "afdf3424", "dsfs254234", "dsfs24234"],
    ["234dsfsdf", "23423423", "342423"],
  ];

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const search = async () => {
      const params = {
        mapFile: "coupangInfo.search_coupangid tistory.search_token",
        inData: { USER_ID: "k947114585", BLOG_TYPE: "01" },
      };

      const res = await onFetch(params);
      if (res.type === "QUERY_SUCCESS") {
        console.log(res.payload.data);
        setListData(() => {
          return res.payload.data;
        });
      }
    };
    search();
  }, [onFetch]);

  return (
    <Fragment>
      {data1.map((data, i) => (
        <Fragment key={i}>
          <TmpBoxOutline>
            <TmpBoxHeader title={"아이디"}>
              <Link id="navLink3" to="/12364">
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </TmpBoxHeader>

            <TmpBoxList bgColor={"#f1f3f5"}>
              {data.map((id: any) => (
                <LabelDetail key={id} value={id} />
              ))}
            </TmpBoxList>
          </TmpBoxOutline>
        </Fragment>
      ))}
    </Fragment>
  );
}

function mapStateToProps(state: any, ownProps: any) {
  // console.log(state);
  const oneJob = state?.arrList.data.filter(
    (job: any) => job.JOB_ID === ownProps.id
  );
  return { data: oneJob };
}

function mapDispatchToProps(dispatch: any) {
  return { onFetch: (params: any) => dispatch(query(params)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxDetail);
