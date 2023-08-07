import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = (props) => {
  return (
    <>
    <Card className="bg-dark text-white" >
      <Card.Img variant="top" src={props.article.urlToImage} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>
          {props.article.description}
        </Card.Text>
        <a href={props.article.url}><Button variant="primary">Read More</Button></a>
      </Card.Body>
    </Card>
    </>
  )
}

export default NewsCard