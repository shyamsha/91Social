import React, { Component, Dispatch, Fragment } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { spaceXHistoryRequest } from "./actions";
import { SpaceXHistory } from "./types";
import { LeftSquareTwoTone, RightSquareTwoTone } from "@ant-design/icons";
import { List, Select, Space, Switch, Input } from "antd";
import ListItems from "./views/ListItems";

const { Option } = Select;
const { Search } = Input;
interface PropsFromState {
  loading: boolean;
  spaceXHistory: SpaceXHistory[];
  error: {
    spaceXHistory: string;
  };
}

interface PropsDispatchFromState {
  onSpaceXHistory: typeof spaceXHistoryRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  limit: number;
  offset: number;
}

class Dashboard extends Component<AllProps, State> {
  state: State = {
    limit: 10,
    offset: 0,
  };

  prev = () => {
    this.setState({ offset: this.state.offset - 10 }, () => {
      if (this.state.offset > 9) {
      }
    });
  };

  next = () => {
    this.setState({ offset: this.state.offset + 10 }, () => {});
  };

  onSearchValue = (value: string) => {};

  componentDidMount() {
    this.props.onSpaceXHistory({
      limit: this.state.limit,
      offset: this.state.offset,
    });
  }
  render() {
    const { loading, spaceXHistory } = this.props;
    return (
      <Fragment>
        <div className="list">
          <div className="container">
            <div className="items">
              <Space>
                <div>
                  <Space>
                    <LeftSquareTwoTone
                      onClick={this.prev}
                      style={{ fontSize: "2rem" }}
                    />
                    <RightSquareTwoTone
                      onClick={this.next}
                      style={{ fontSize: "2rem" }}
                    />
                  </Space>
                </div>
                <div></div>
              </Space>
            </div>
            <div className="enditems">
              <Space>
                <div>
                  <Search
                    placeholder="input search text"
                    onSearch={this.onSearchValue}
                    enterButton
                  />
                </div>
                <div className="switch"></div>
              </Space>
            </div>
          </div>

          <List
            loading={loading}
            itemLayout="vertical"
            dataSource={spaceXHistory !== null ? spaceXHistory : []}
            bordered={true}
            header={<div className="App-header">Toast A Beer</div>}
            renderItem={(item: SpaceXHistory) => (
              <ListItems spaceXHistory={item} />
            )}
          />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps: any = ({ spaceXHistory }: ApplicationState) => ({
  loading: spaceXHistory.loading,
  spaceXHistory: spaceXHistory.spaceXHistory,
  error: spaceXHistory.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSpaceXHistory: (params: { limit: number; offset: number }) =>
    dispatch(spaceXHistoryRequest(params)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Dashboard);
