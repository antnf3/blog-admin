import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Label, { TxtProps } from "./Label";

const StyBox = styled.div`
  background-color: #69db7c;
  max-width: 40rem;
  min-height: 5rem;
  margin-top: -0.8rem;
  border-radius: 4px;
`;

function Box() {
  const [text, setText] = useState<TxtProps[]>([]);
  useEffect(() => {
    const data = [
      { name: "ㅁㅁID1", value: "ADF345671234" },
      { name: "ㅁㅁID2", value: "ADF345671234" },
      { name: "ㅁㅁID3", value: "ADF345671234" },
      { name: "ㅁㅁID4", value: "ADF345671234" },
      { name: "ㅁㅁID5", value: "ADF345671234" },
      { name: "ㅁㅁID6", value: "ADF345671234" },
      { name: "ㅁㅁID7", value: "ADF345671234" },
      { name: "ㅁㅁID8", value: "ADF345671234" },
      { name: "ID9", value: "ADF3434" },
      { name: "ID10", value: "ADF3434" },
      { name: "ID11", value: "ADF3434" },
      { name: "ID12", value: "ADF3434" },
      { name: "ID13", value: "ADF3434" },
      { name: "ID14", value: "ADF3434" },
    ];
    setText(data);
  }, []);

  return (
    <Fragment>
      <h2>sss</h2>
      <StyBox>
        {text.map((tag) => (
          <Label key={tag.name} {...tag} />
        ))}
      </StyBox>
    </Fragment>
  );
}

export default Box;
