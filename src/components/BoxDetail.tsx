import React, { Fragment } from "react";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TmpBoxHeader from "./layout/TmpBoxHeader";
import TmpBoxOutline from "./layout/TmpBoxOutline";
import TmpBoxList from "./layout/TmpBoxList";
import LabelDetail from "./LabelDetail";

const data1 = [
  ["adfewrwer", "afdf3424", "dsfs254234", "dsfs24234"],
  ["234dsfsdf", "23423423", "342423"],
];

function BoxDetail() {
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
    // <Fragment>
    //   <TmpBoxOutline>
    //     <TmpBoxHeader title={"아이디"}>
    //       <Link id="navLink3" to="/12364">
    //         <FontAwesomeIcon icon={faEdit} />
    //       </Link>
    //     </TmpBoxHeader>

    //     <TmpBoxList bgColor={"#f1f3f5"}>
    //       <LabelDetail value={"2"} />
    //     </TmpBoxList>
    //   </TmpBoxOutline>
    // </Fragment>
  );
}

export default BoxDetail;
