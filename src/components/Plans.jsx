import { Form, Button } from "react-bootstrap";

const Plans = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="contacto-sub">Correo:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="contacto-sub">Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <div className="contacto-sub">
    <Button variant="danger" type="submit">
      Enviar
    </Button>
    </div>
  </Form>
  );
};
export default Plans;
