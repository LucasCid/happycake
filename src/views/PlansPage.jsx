import { Container } from "react-bootstrap";

import Planes from "../components/Plans";

const PlansPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 contacto-sub">Cuentanos, en que te podemos ayudar?</h1>
      <Planes />
    </Container>
  );
};
export default PlansPage;
