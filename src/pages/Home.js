import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';


function Home() {
    return (
        <div>
            <Hero backgroundImage='https://images.creativemarket.com/0.1.0/ps/4842060/300/200/m2/fpc/wm0/b7gu1wczl9x1nvmt6welyrx0ikbldhrnu1eiksc1b7q0cxond0lqgnrkwnnqcsxl-.jpg?1533109913&s=b107a70f973063197b606cefc7200d5e'>
                <h1 style={{color:"black"}}>Employee Directory</h1>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Column size='md-12'>
                        <h1>Welcome to Employee Directory</h1>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}


export default Home;
