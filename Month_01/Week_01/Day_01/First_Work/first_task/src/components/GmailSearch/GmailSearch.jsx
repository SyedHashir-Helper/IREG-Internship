import React from 'react'
import "../../../styles/GmailSearch.css"
import {Row, Col, Button, Divider} from "antd"
import DropDown from '../Dropdown/DropDown'
import DatePickerBox from '../DatePicker/DatePickerBox'
import Selector from '../Selector/Selector'
import InputBox from '../InputBox/InputBox'
import { FaCrown } from 'react-icons/fa';

const inputs = [
    {
        label: "Subject",
        placeholder: "Subject Line"
    },
    {
        label: "From(Sender)",
        placeholder: "Sender"
    },
    {
        label: "Excluded Domains",
        placeholder: "Domains"
    },
]

const GmailSearch = ({setActiveTabkey}) => {
  return (
    <>
        <Col className='gmail-tab'>
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
            
            <Row className='row-padding'>
                <Col className='col-padding' md={24} xs={24}>
                    <DropDown/>
                </Col>
            </Row>

            <Row className='row-padding'>
                <Col md={24} className='col-padding' xs={24}>
                    <DatePickerBox/>
                </Col>
            </Row>

            <Row className='row-padding'>
                {
                    inputs.map((element, index)=>{
                        return (
                            <Col className='col-padding' key={index} md={12} xs={24}>
                                <InputBox
                                    label={element.label}
                                    placeholder={element.placeholder}
                                />
                            </Col>

                        )
                    })
                }
                <Col className='col-padding' md={12} xs={24}>
                    <Selector/>
                </Col>
            </Row>
            
            <Row className='row-padding'>
                Search Query : &nbsp; <a> label:inbox</a>
            </Row>
            <Divider/>
            <Row className='row-padding'>
                <Col md={3} xs={12}>
                    <Button>Close</Button>
                </Col>
                <Col md={18} xs={12}>
                    <Button icon={<FaCrown/>}>
                        Go Premium
                    </Button>
                </Col>
                <Col md={3} xs={12}>
                    <Button type='primary' onClick={()=>{
                        console.log("Hi")
                            setActiveTabkey("2")
                        console.log("Bi")
                    }
                    } style={{
                        borderRadius: "3px"
                    }}>Continue</Button>
                </Col>
            </Row>
        </Col>
    </>
  )
}

export default GmailSearch
