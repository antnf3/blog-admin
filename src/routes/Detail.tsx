import React, { useEffect, useState } from "react";
import Template from "../components/layout/Template";
import BoxDetail from "../components/BoxDetail";
import { connect } from "react-redux";
import { JobState, query } from "../store";
import { RouteComponentProps } from "react-router-dom";

interface DetailProps extends RouteComponentProps<any> {
  jobId: string;
  onFetch: any;
}

function Detail({ jobId, onFetch }: DetailProps) {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    const search = async () => {
      const params = {
        mapFile: "coupangInfo.search_coupangid tistory.search_token",
        inData: { USER_ID: "k947114585", BLOG_TYPE: "01" },
      };

      const res = await onFetch(params);
      if (res.type === "QUERY_SUCCESS") {
        console.log(res.payload.data);
        setList([{ title: "쿠팡아이디", data: res.payload.data[0] }]);
      }
    };
    search();
  }, [onFetch]);

  if (list.length === 0) {
    return null;
  }
  return (
    <Template title={"작업등록"}>
      <BoxDetail id={jobId} list={list}></BoxDetail>
    </Template>
  );
}

function mapStateToProps(state: JobState[], ownProps: any) {
  console.log(state);
  return { jobId: ownProps.match.params.id };
}

function mapDispatchToProps(dispatch: any) {
  return { onFetch: (params: any) => dispatch(query(params)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
