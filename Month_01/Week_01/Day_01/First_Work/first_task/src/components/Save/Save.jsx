import React from 'react'
import {Col,Row, Checkbox, Divider, Button} from "antd"
import "../../../styles/Save.css"
import InputBox from '../InputBox/InputBox'

const Save = ({setActiveTabkey}) => {
  return (
    <Col className='save-tab'>
        <Row className='row-padding'>
            <Col md={24} xs={24} style={{
                    padding: "0em 0em 1em 0em"
                }}>
                <div className='label'>
                    Search Emails in Gmail
                </div>
                    Extract email messages that match the following search criteria in Gmail
            </Col>
        </Row>

        <Row className="row-padding col-padding">
            <InputBox 
                label={"Workflow Name"}
                placeholder={"Workflow Name"}
            />
            <label className='clr-gray'>
                The workflow name will be used as the name of your Google Sheet as well.
            </label>
        </Row>

        <Divider />

        <Row className='justifyCenter'>
            <Col md={16} >
                <Button 
                    onClick={()=>{setActiveTabkey("2")}}
                className='btn-padding'>Previous</Button>
            </Col>
            <Col md={8}>
                <Row className='justifyCenter'>
                    <Col md={12} className='col-padding'>
                        <Button type='primary' style={{
                                borderRadius: "3px",
                                backgroundColor: ""
                            }}>
                                Save Workflow
                        </Button>
                    </Col>
                    <Col md={12} className='col-padding'>
                        <Button type='primary' style={{
                                borderRadius: "3px"
                            }}>
                                Save & Run Workflow
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Col>
  )
}

export default Save
