import React from "react";
import Box from "../components/Box";
import { connect } from "react-redux";
import { JobState } from "../store";
import { RouteComponentProps } from "react-router-dom";
import Template from "../components/layout/Template";

interface HomeProps extends RouteComponentProps<any> {
  data: JobState[];
}
function Home({ data }: HomeProps) {
  return (
    <Template title={"작업목록"}>
      {data.map((str: any) => (
        <Box key={str.JOB_ID} data={str} />
      ))}
    </Template>
  );
}

function mapStateToProps(state: JobState[]) {
  return { data: state };
}
export default connect(mapStateToProps, null)(Home);
