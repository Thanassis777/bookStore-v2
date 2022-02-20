import React from 'react';
import TextInput from '../../components';
import {Col, Container, Row} from 'react-bootstrap';

const AddBook = () => {
  const model = [
    {
      label: 'ISBN',
      controlId: 'isbn',
    },
    {
      label: 'Title',
      controlId: 'title',
    },
    {
      label: 'Subtitle',
      controlId: 'subtitle',
    },
    {
      label: 'Pages',
      controlId: 'pages',
    },
    {
      label: 'Author',
      controlId: 'author',
    },
    {
      label: 'Description',
      controlId: 'description',
    },
  ];

  return (
    <Container fluid="sm">
      <Row xs="1" sm="2" className="justify-content-center">
        {model.map((item, idx) => (
          <React.Fragment key={idx}>
            <Col xs={6}>
              <TextInput label={item.label} controlId={item.controlId} />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default AddBook;
