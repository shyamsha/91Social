/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Divider, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { SpaceXHistory } from "../types";

interface Props {
  spaceXHistory: SpaceXHistory;
}
export default function ListItems(props: Props) {
  const { spaceXHistory } = props;

  const redirectBeerDetails = () => {
    
  };

  return (
    <div onClick={redirectBeerDetails}>
      <Row className="container">
        <Col span={6}>
          <div className="title">{}</div>
          <div className="subtitle">{}</div>
        </Col>
        <Col span={6}>
          <div className="title">First_Brewed</div>
          <div className="subtitle">{}</div>
        </Col>
        <Col span={6}>
          <div className="title">Yeast</div>
          <div className="subtitle">{}</div>
        </Col>
        <Col span={6}>
          <div className="title">Sample Picture</div>
          <div className="subtitle">
            <Avatar size="large" src={""} />
          </div>
        </Col>
      </Row>
      <Divider
        style={{
          margin: 0,
          height: "0.25rem",
          backgroundColor: "#e4e8f1",
        }}
      />
    </div>
  );
}
