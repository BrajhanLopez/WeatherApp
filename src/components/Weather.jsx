import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const Weather = ({ ws }) => {
    //Math.round(Number(ws.main?.temp)-273.15)
    let gc = Math.round(Number(ws.main?.temp)-273.15)
    let gf = Math.round(gc *9/5 +32)

    const [grad, setgrad] = useState(true)
   
    const wallpaper =[
        'url(https://images.pexels.com/photos/3228675/pexels-photo-3228675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    'url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    'url(https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?cs=srgb&dl=pexels-sid-ali-2028885.jpg&fm=jpg)',
    'url(https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg?cs=srgb&dl=pexels-gianluca-grisenti-4215110.jpg&fm=jpg)',
    'url(https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    'url(https://images.pexels.com/photos/2011367/pexels-photo-2011367.jpeg?cs=srgb&dl=pexels-s-migaj-2011367.jpg&fm=jpg)']
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


    // let ran = Math.floor(Math.random() *wallpaper.length)
    const changewal =() =>{
        let ran = Math.floor(Math.random() *wallpaper.length)
       
        document.querySelector('.c-card').style.backgroundImage = wallpaper[ran]
    }

useEffect(()=>{

changewal()




},[])



    const days = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
    ];

    
 const changetemp = () => {
    //     //grad=ws.main?.temp
     setgrad(!grad)
    //     //(Number(ws.main?.temp)-273.15)*9/5+32
 }



    

    const getLongMonthName = function (date) {
        return monthNames[date];
    }

    const getlongdayname = function (date) {
        return days[date]

    }
    let today = new Date()
    let day = today.getDate()
    let month = getLongMonthName(today.getMonth())
    let anio = today.getFullYear()
    let daycomplete = getlongdayname(today.getDay())
    document.body.style.backgroundColor = '#343C4A';





    return (
        <div >
            <Container>
                <Row className="d-flex justify-content-sm-center align-items-sm-center" style={{ height: '100vh' }}>
                    <Col className=" col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end pe-sm-0 align-self-end align-self-sm-center">

                        <Card className='c-card' style={{ width: '18rem' }}>
                            <div className='c-c ps-2'>
                                <Card.Body>
                                    <Card.Text className='ss'> </Card.Text>
                                    <Card.Title className='ss fw-bold'>{daycomplete.toUpperCase()}</Card.Title>
                                    <Card.Text className='ss'> {day} {month} {anio}</Card.Text>
                                    <Card.Text className='ss'><i className="fa-solid fa-location-dot"></i> {ws.name}, {ws.sys?.country}</Card.Text>
                                    <Card.Text className='ss'> </Card.Text>

                                </Card.Body>
                                <Card.Body>

                                    {/* <i className="fa-cloud-sun-rain"></i> */}
                                    <img className="fa-cloud-sun-rain" src={`http://openweathermap.org/img/wn/${ws.weather?.[0].icon}@2x.png`} alt="" />


                                    <Card.Title className='ss fw-bold c-bbig'>{grad?gc+" °C":gf+" °F"}</Card.Title>
                                    <Card.Title className='ss fw-bold bs-2'>{ws.weather?.[0].description}</Card.Title>
                                </Card.Body>
                            </div>
                        </Card>

                    </Col>
                    <Col className='col-12 col-sm-6 ps-sm-0 d-flex justify-content-center justify-content-sm-start align-self-start align-self-sm-center' >
                        <Card className='c-card2' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Container className='p-0'>
                                    <Row>
                                        <Col className='fw-bold'>
                                            <p>PRESSURE</p>
                                            <p>HUMIDITY</p>
                                            <p>WIND</p>
                                        </Col>
                                        <Col className='text-end'>
                                            <p>{ws.main?.pressure} Hpa</p>
                                            <p>{ws.main?.humidity} %</p>
                                            <p>{ws.wind?.speed} Km/h</p>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className='d-flex justify-content-center'>
                                    <Button onClick={changetemp} variant="primary">Degrees °F/°C</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Weather;