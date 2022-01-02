import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useHistory } from "react-router-dom";
import {Routes} from '../routes'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const history = useHistory()
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
