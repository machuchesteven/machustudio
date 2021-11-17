import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDrag, DndProvider, useDrop } from 'react-dnd'
import ReactDOM from 'react-dom'
import { HTML5Backend } from 'react-dnd-html5-backend'

// const ItemTypes = {
//   'CARD': "Card"
// }



const Card = ({ isDragging, text }) => {
  const [{ opacity, variant }, dragRef] = useDrag(
    () => ({
      type: "Card",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.6 : 1,
        variant: monitor.isDragging() ? "success" : "outline-primary"
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ opacity }} className="my-2">
      <Button variant={variant} >
        {text}
      </Button>
    </div>
  )
}

const App = () => {
  return <div>
    <Container className="bg-light p-2">
      <h4 className="text-center m-2">Project Name: <strong>Utilization Of The Use Of Drag and Drop Functionalities</strong></h4>
    </Container>
  </div>
}


const DroppedTo = () => {
  var dropObjects = []
  const [dropped, setDropped] = useState(null)
  const [timesDropped, setTimesDropped] = useState(0)
  const [collectedProps, drop] = useDrop(() => ({
    type: "Card",
    accept: "Card",
    drop: (item, monitor) => {
      console.log("Item Dropped")
      console.log(item)
      dropObjects.push(item.text)
      setDropped(dropObjects)
      console.log(dropped)
      let times = timesDropped + 1
      setTimesDropped(timesDropped)
    }
  }))
  function clearDropped() {
    setDropped(null)
  }
  return <div>
    <Container>
      <Row>
        <Col md={6} ref={drop}>
          <Container className="bg-light p-5">
            <h4 className="text-center">Drop Your Components Here</h4>
            {dropObjects.map((item, key) => {
              return <li className="border-rounded" key={key}>{item.text}</li>
            })}
          </Container>
        </Col>
        <Col md={6} className="p-5">
          <h3 className="text-center">Don't Drop Anything Here, It wont work</h3>
          {dropped ? dropped.map((item, key) => <li key={key} className="p-2 alert alert-info" onClick={e => clearDropped()}>{item} {dropped.length}</li>) : "Nothing Dropped So Far"}
        </Col>
      </Row>
    </Container>
  </div>

}
const Cards = () => {
  const [cardTexts, setCardTexts] = useState([])
  const [newText, setNewText] = useState("")
  function addTextToCard(e) {
    e.preventDefault()
    setCardTexts([...cardTexts, newText])
    setNewText("")
  }
  return <div>
    <Container>
      <Row className="my-5">
        <Col md={8} sm className="m-auto">
          <Form.Control type="text" placeholder="Enter What You Need In A New Card" onChange={e => setNewText(e.target.value)} value={newText} />
        </Col>
        <Col md={4} sm className="m-auto">
          <Button variant="outline-primary" onClick={e => addTextToCard(e)}>Add Draggable Card</Button>
        </Col>
        {cardTexts ? cardTexts.map((text, key) => <Row >
          <Card className="m-2 w-100" key={key} text={text} />
        </Row>
        ) : <Card text="Draggable Text" />}
      </Row>

    </Container>


  </div>
}

ReactDOM.render(
  <div>
    <Container>
      <DndProvider backend={HTML5Backend}>
        <App />
        <hr />
        <Cards className="m-5" />
        <DroppedTo className="mt-5" />
      </DndProvider>
    </Container>
  </div>,
  document.getElementById('root')
)