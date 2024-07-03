import React from 'react'
import "../../../styles/Configuration.css"
import {Col,Row, Checkbox, Divider, Button} from "antd"

const checks = [
    "To field",
    "From field",
    "CC field",
    "Reply-to field",
    "BCC field",
    "Subject Line",
    "Message Body",
]

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

const Configuration = ({setActiveTabkey}) => {
  return (
    <Col className='configuration-tab'>
        <Row className='row-padding'>
            <Col md={24} xs={24} style={{
                    padding: "0em 0em 1em 0em"
                }}>
                <div className='label'>
                    Extract Email Addresses from:
                </div>
                    Select one or more message fields from which you want to extract email addresses.
            </Col>
        </Row>

        <Checkbox.Group
            style={{
            width: '100%',
            }}
            onChange={onChange}
        >
            <Row>
                {
                    checks.map((element, index)=>{
                        return (
                            <Col md={6} xs={12} className="config-checkbox">
                                <Checkbox value={element}>{element}</Checkbox>
                            </Col>
                        )
                    })
                }
                
           
            </Row>
        </Checkbox.Group>

        <Divider/>

        <Row className="config-buttons">
            <Col>
                <Button
                    onClick={()=>{setActiveTabkey("1")}}
                >Previous</Button>
            </Col>
            <Col>
                <Button type='primary' style={{
                        borderRadius: "3px"
                    }}
                    onClick={()=>{setActiveTabkey("3")}}    
                >
                        Continue
                </Button>
            </Col>
        </Row>
    </Col>
  )
}

export default Configuration
