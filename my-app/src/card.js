import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './card.css'

export default function CardComp(props){
    return (
      <div id='myCard'>
        <Card  className="col-lg-4 card" style={{ width: '25rem' }} >
         <Card.Img className='image' src={props.link} variant="top"  />
           <Card.Body >
           <Card.Title className='cardBody'>{props.title}</Card.Title>
            <Card.Text className='text'>
               {props.text}
             </Card.Text>
              <Button className='button' variant="outline-dark">Add</Button>
             </Card.Body>
            </Card>




          




</div>
    );
}