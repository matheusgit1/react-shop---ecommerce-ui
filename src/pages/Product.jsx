import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import {useParams} from 'react-router-dom'
import {popularProducts} from "../data"
import {context} from '../contexts/contextProvider'


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = (item) => {
  const params = useParams()
  const [url, setUrl] = React.useState('')
  const [price, setPrice] = React.useState(99.00)
  const [name, setName] = React.useState('')
  const [amount, setAmount] = React.useState(1)
  const [color, setColor] = React.useState('black')
  const [size, setSize] = React.useState('P')
  const {updateCart} = React.useContext(context)

  React.useEffect(()=>{
    const createLayout = () => {
      //console.log(params.product_id)
      popularProducts.forEach(item => {
        if(item.id == params.product_id){
          setUrl(item.img)
          setPrice(item.price)
          setName(item.name)
        }
      })
    }
    createLayout()
  })

  const newAmount = (e) => {
    if(e === '-'){
      if(amount >0){
        setAmount(amount-1)
      }
      return;
    }
    setAmount(amount+1)
  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={url} style={{flexShrink: 2}} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>${price}</Price>
          <FilterContainer>
            <Filter value={color} onChange={(event)=>setColor(event.target.value)}>
              <FilterTitle >COR</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="blue" />
            </Filter>
            <Filter value={size} onChange={(event)=>setSize(event.target.value)}> 
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XG</FilterSizeOption>
                <FilterSizeOption>G</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>P</FilterSizeOption>
                <FilterSizeOption>XP</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>newAmount("-")}/>
              <Amount>{amount}</Amount>
              <Add onClick={()=>newAmount("+")}/>
            </AmountContainer>
            <Button onClick={()=>{updateCart({id: params.product_id, name: name, amount: amount,  size: size, color: color, price: price, img: url})}}>adicionar ao carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
