import React, { useEffect } from "react";
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

  return (
    <Template title={"작업목록"}>
      {data?.arrList.map((str: JobState) => (
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
