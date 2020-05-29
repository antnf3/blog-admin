import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { connect } from "react-redux";
import { JobState, query } from "../store";
import { RouteComponentProps } from "react-router-dom";
import Template from "../components/layout/Template";

interface HomeProps extends RouteComponentProps<any> {
  data: any;
  query: any;
}

function Home({ data, query }: HomeProps) {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const params = {
      mapFile: "index.search",
      inData: { USER_ID: "k947114585", USE_YN: "Y" },
    };
    query(params).then((res: any) => {
      if (res.type === "QUERY_SUCCESS") {
        setListData(res.payload);
      }
    });
  }, []);
  console.log(listData);
  return (
    <Template title={"작업목록"}>
      {listData.map((str: JobState) => (
        <Box key={str.JOB_ID} data={str} />
      ))}
    </Template>
  );
}

function mapStateToProps(state: JobState[]) {
  // console.log(state);
  return { data: state };
}
function mapDispatchToProps(dispatch: any) {
  return { query: (params: any) => dispatch(query(params)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
