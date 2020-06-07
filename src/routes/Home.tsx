import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { connect } from "react-redux";
import { JobState, query } from "../store";
import { RouteComponentProps } from "react-router-dom";
import Template from "../components/layout/Template";
import Loading from "../components/layout/Loading";

interface HomeProps extends RouteComponentProps<any> {
  state: any;
  query: any;
}

function Home({ state, query }: HomeProps) {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const params = {
      mapFile: "index.search",
      inData: { USER_ID: "k947114585", USE_YN: "Y" },
    };

    const res = await query(params);
    if (res.type === "QUERY_SUCCESS") {
      setListData(res.payload.data);
    }
  };

  if (!state || state.loading) {
    return <Loading />;
  }
  return (
    <Template title={"작업목록"}>
      {listData.map((str: JobState) => (
        <Box key={str.JOB_ID} data={str} onSearch={() => search()} />
      ))}
    </Template>
  );
}

function mapStateToProps(state: any) {
  // console.log(state);
  return { state };
}
function mapDispatchToProps(dispatch: any) {
  return { query: (params: any) => dispatch(query(params)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
