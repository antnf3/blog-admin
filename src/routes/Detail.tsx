import React from "react";
import Template from "../components/layout/Template";
import BoxDetail from "../components/BoxDetail";
import { connect } from "react-redux";
import { JobState } from "../store";
import { RouteComponentProps } from "react-router-dom";

interface DetailProps extends RouteComponentProps<any> {
  jobId: string;
}

function Detail({ jobId }: DetailProps) {
  return (
    <Template title={"작업등록"}>
      <BoxDetail id={jobId}></BoxDetail>
    </Template>
  );
}

function mapStateToProps(state: JobState[], ownProps: any) {
  return { jobId: ownProps.match.params.id };
}

export default connect(mapStateToProps)(Detail);
