import React, { Component, Dispatch, Fragment } from 'react'
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { spaceXPayloadRequest } from './actions';
import { SpaceXPayload } from './types';

interface PropsFromState {
  loading: boolean;
  spaceXPayload: SpaceXPayload[];
  error: {
    spaceXPayload: string;
  };
}

interface PropsDispatchFromState {
  onSpaceXHistory: typeof spaceXPayloadRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  limit: number;
  offset: number;
}

 class Payload extends Component<AllProps,State> {
   state:State={
     limit:10,
     offset:0
   }
  render() {
    const {loading,spaceXPayload} = this.props
    return (
      <Fragment>
        
      </Fragment>
    )
  }
}
const mapStateToProps: any = ({ spaceXPayload }: ApplicationState) => ({
  loading: spaceXPayload.loading,
  spaceXPayload: spaceXPayload.SpaceXPayload,
   error: spaceXPayload.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSpaceXPayload: (params:{limit:number,offset:number}) => dispatch(spaceXPayloadRequest(params)),
  
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Payload)