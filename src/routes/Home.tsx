import React, { Fragment } from "react";
import Box from "../components/Box";
import { connect } from "react-redux";
import { JobState } from "../store";
import { RouteComponentProps } from "react-router-dom";

interface HomeProps extends RouteComponentProps<any> {
  data: JobState[];
}
function Home({ data }: HomeProps) {
  return (
    <Fragment>
      {data.map((str: any) => (
        <Box key={str.JOB_ID} data={str} />
      ))}
    </Fragment>
  );
}

function mapStateToProps(state: JobState[]) {
  return { data: state };
}
export default connect(mapStateToProps, null)(Home);
