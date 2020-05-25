import React from "react";
import styled from "styled-components";
import Label from "./Label";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const StyOutBox = styled.div`
  margin: 0 1rem;
`;
const StyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyTitle = styled.h3`
  color: #000;
`;
const StyleHeaderRight = styled.div`
  svg {
    margin: 0 0.4rem;
    font-size: 1.4rem;
  }
`;
const StyBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #69db7c;
  max-width: 35rem;
  min-height: 5rem;
  margin-top: -0.8rem;
  border-radius: 4px;
`;

function Box({ data }: any) {
  const click = () => {
    console.log("click");
  };
  return (
    <StyOutBox>
      <StyHeader>
        <StyTitle>{data.BLOG_NM}</StyTitle>
        <StyleHeaderRight>
          <FontAwesomeIcon
            icon={faSyncAlt}
            onClick={click}
            style={{ cursor: "pointer", color: "red" }}
          />
          <Link to="/1234">
            <FontAwesomeIcon icon={faEdit} />
          </Link>
          <Link to="/1235">
            <FontAwesomeIcon icon={faTrashAlt} />
          </Link>
        </StyleHeaderRight>
      </StyHeader>

      <StyBox>
        {Object.keys(data).map((key) => (
          <Label key={key} name={key} value={data[key]} />
        ))}
      </StyBox>
    </StyOutBox>
  );
}

export default Box;
