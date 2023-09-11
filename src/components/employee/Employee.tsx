import { Col, Row } from "antd";
import React from "react";

export class Employee extends React.Component {
    
    render(): React.ReactNode {
        return (
        
        <>
        
        <Row>
            <Col span={12}>Test</Col>
            <Col span={12}>User</Col>
        </Row>

        </>
        )
    }
}