import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { connect } from "react-redux";
import { JobState } from "../store";
import { RouteComponentProps } from "react-router-dom";
import Template from "../components/layout/Template";
import axios, { AxiosResponse } from "axios";

interface HomeProps extends RouteComponentProps<any> {
  data: JobState[];
}
function Home({ data }: HomeProps) {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    console.log("init");
    fetch();
  }, []);

  const fetch = async () => {
    const response: AxiosResponse = await axios.request({
      method: "get",
      url: `http://localhost:8000/home`,
      data: {
        mapFile: "index.search",
        inData: { USER_ID: "k947114585", USE_YN: "Y" },
      },
    });
    console.log(response.data);
    setData1(response.data);
    return response.data;
  };
  return (
    <Template title={"작업목록"}>
      {data1.map((str: any) => (
        <Box key={str.JOB_ID} data={str} />
      ))}
    </Template>
  );
}

function mapStateToProps(state: JobState[]) {
  return { data: state };
}
export default connect(mapStateToProps, null)(Home);
