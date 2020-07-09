import React, {useCallback, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import RatingForm from '../RatingForm/RatingForm';
import RatingBarChart from '../RatingBarChart/RatingBarChart';
import './App.css';


const App = () => {

    const [chartDataArray, setChartDataArray] = useState([
        {
            name: '1 star', people: 0
        },
        {
            name: '2 star', people: 0
        },
        {
            name: '3 star', people: 0
        },
        {
            name: '4 star', people: 0
        },
        {
            name: '5 star', people: 0
        },
    ]);

    const onceDataArrayUpdated = useCallback((dataArray) => {
        var counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

        dataArray.forEach(function (item, index, array) {
            counts[item.rating] = counts[item.rating] + 1;
        });

        setChartDataArray([
            {
                name: '1 star', people: counts[1]
            },
            {
                name: '2 star', people: counts[2]
            },
            {
                name: '3 star', people: counts[3]
            },
            {
                name: '4 star', people: counts[4]
            },
            {
                name: '5 star', people: counts[5]
            },
        ]);
    }, []);


    return (
        <div className='App'>
            <Container fluid>
                <Row>
                    <Col  md={true}>
                        <h2>Rate our service</h2>
                        <RatingForm data-testid="rating-form" onceDataArrayUpdated={onceDataArrayUpdated}/>
                    </Col>
                    <Col  md={true}>
                        <h2>Chart</h2>
                        <Row className="rating-bar-chart-row-container align-items-center">
                            <RatingBarChart data-testid="rating-bar-chart" data={chartDataArray}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
