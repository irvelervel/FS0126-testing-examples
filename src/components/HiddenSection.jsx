import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const HiddenSection = function () {
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>Questo componente si chiama HiddenSection</h2>
      <div>
        <Button
          variant="success"
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? 'NASCONDI' : 'MOSTRA'}
        </Button>
      </div>
      {show && (
        <div className="mt-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://placebear.com/400/400"
              alt="orso-picture"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  )
}

export default HiddenSection
