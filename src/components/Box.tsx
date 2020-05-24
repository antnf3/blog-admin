import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Label, { TxtProps } from "./Label";

const StyOutBox = styled.div`
  margin: 0 1rem;
`;
const StyTitle = styled.h2`
  color: #000;
  font-size: 1.8rem;
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

const data = [
  {
    JOB_ID: "123",
    COUPANG_ID: "2323",
    SUB_ID: "ANDERSON",
    TOKEN_SEQ: 7,
    TOKEN_NM: "",
    BLOG_TYPE: "6",
    BLOG_TYPE_NM: "쇼핑2",
    BLOG_NM: "네이버",
    BLOG_CATEGORY: "ㅇㄴㄹㄴ",
    BLOG_CATEGORY_NM: "33342",
    PRODUCT_ID: "4523423424",
    PRODUCT_NM: "국내쇼핑",
    PD_OPT: "1022",
    DAILY_LIMIT_CNT: 200,
    DAILY_INTERVAL_MM: 10,
    USE_YN: "Y",
  },
];

function Box() {
  const [text, setText] = useState<any>({});
  useEffect(() => {
    setText(data[0]);
  }, []);

  return (
    <StyOutBox>
      <StyTitle>sss</StyTitle>
      <StyBox>
        {Object.keys(text).map((key) => (
          <Label key={key} name={key} value={text[key]} />
        ))}
      </StyBox>
    </StyOutBox>
  );
}

export default Box;
