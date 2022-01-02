import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              COR
            </Option>
            <Option>brack</Option>
            <Option>preto</Option>
            <Option>vermelho</Option>
            <Option>azul</Option>
            <Option>amarelo</Option>
            <Option>verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              tamanho
            </Option>
            <Option>XG</Option>
            <Option>G</Option>
            <Option>M</Option>
            <Option>P</Option>
            <Option>XP</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenas por</FilterText>
          <Select>
            <Option selected>Mais novo</Option>
            <Option>preço (asc)</Option>
            <Option>preço (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
