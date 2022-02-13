import React from 'react';
import './Home.scss';
import {Col, Container, Row} from 'react-bootstrap';
import {BsBookFill, BsKey, BsBasket} from 'react-icons/bs';

const ICON_SIZE = '2.5rem';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <div className="bgImage">
          <h1>You are in the right place to get the right books and get right to amusement.</h1>
        </div>
      </Row>
      <Row className="align-items-center justify-content-evenly infoSection">
        <Col xs={12}>
          <h3>Peace of Mind, Guaranteed</h3>
        </Col>
        <Col className="items" xs={4}>
          <BsBookFill size={ICON_SIZE} />
          <p>Immediate access to content</p>
        </Col>
        <Col className="items" id="secondItem" xs={4}>
          <BsKey size={ICON_SIZE} />
          <p>Perpetual access rights to content</p>
        </Col>
        <Col className="items" xs={4}>
          <BsBasket size={ICON_SIZE} />
          <p>Quick and efficient order process</p>
        </Col>
      </Row>
      <Row className="justify-content-center independence">
        <Col xs="auto">
          <h5>WHY INDEPENDENCE MATTERS</h5>
          <p>
            Think about the last good book you read. Did it make you feel more connected to others?
            Maybe it served as a welcome escape. Maybe it helped you rediscover the beauty in life.
            Did it surprise you?
          </p>
          <p>
            As an independent bookstore, we strive to offer the same variety and richness of
            experience as the books on our shelves. And because the only people we’re beholden to
            are our customers and ourselves, we can focus on what really matters — promoting diverse
            perspectives, upholding the free exchange of ideas, championing the enduring power of
            books, and bolstering the great community of readers and authors we’re lucky to be a
            part of.
          </p>
          <p>
            Thank you for supporting these lofty goals. Your choice sustains a family business, and
            allows us to follow our passion for getting the right books into the right hands, 365
            days a year.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
