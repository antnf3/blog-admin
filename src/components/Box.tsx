import React from "react";
import Label from "./Label";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TmpBoxHeader from "./layout/TmpBoxHeader";
import TmpBoxOutline from "./layout/TmpBoxOutline";
import TmpBoxList from "./layout/TmpBoxList";

function Box({ data }: any) {
  const click = () => {
    console.log("click");
  };
  return (
    <TmpBoxOutline>
      <TmpBoxHeader title={data.BLOG_NM}>
        <Link to="/1234">
          <FontAwesomeIcon
            icon={faSyncAlt}
            onClick={click}
            style={{ cursor: "pointer", color: "red" }}
          />
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
