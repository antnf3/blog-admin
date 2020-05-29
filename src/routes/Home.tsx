import React, { useEffect, useCallback } from "react";
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
  // console.log(data);
  // const [data1, setData1] = useState([]);
  // useEffect(() => {
  //   console.log("init");
  //   fetch();
  // }, []);

  useEffect(() => {
    query();
  }, []);

  // const fetch = async () => {
  //   const response: AxiosResponse = await axios.request({
  //     method: "get",
  //     url: `http://localhost:8000/home`,
  //     data: {
  //       mapFile: "index.search",
  //       inData: { USER_ID: "k947114585", USE_YN: "Y" },
  //     },
  //   });
  //   console.log(response.data);
  //   setData1(response.data);
  //   return response.data;
  // };
  return (
    <Template title={"작업목록"}>
      {data?.arrList.map((str: any) => (
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
  return { query: () => dispatch(query()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
