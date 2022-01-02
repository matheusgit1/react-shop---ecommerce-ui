import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { context } from '../contexts/contextProvider'
import { popularProducts } from '../data';
import { useHistory } from 'react-router-dom';
import {Routes} from '../routes'




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 1;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const history = useHistory()
  const { cart, wishList } = React.useContext(context)
  const [totalit, setTotalit] =  React.useState(0.00)
  let i = 0
  const [dispatch, setDispatch] =  React.useState(0.00)
  const [discont, setDiscont] = React.useState(0.00)

  React.useEffect(()=>{ 
    const createLayout = (e) => {
      let total = 0
      cart.forEach(element => {
          total = total + element.amount*element.price
          setTotalit(total)
      });

      if(cart.lenght > 0){
        setDispatch(12.99)
        setDiscont(5.99)
      }
    }
    createLayout()
  },[])

  const handleHome = () => {
    alert("Compra finalizada");
    history.push(Routes.Home.path)
  }

  const updateItem = (e) =>{
    //Make something
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Seu Carrinho</Title>
        <Top>
          <TopButton>Continue comprando</TopButton>
          <TopTexts>
            <TopText>carrinho de compra: {cart.lenght}</TopText>
            <TopText>sua lista de desejos: {wishList.lenght}</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              cart.map(element => {
               
                return (
                  <React.Fragment>

                    <Product key={`${i}`}>
                      <ProductDetail>
                        <Image src={element.img} />
                        <Details>
                          <ProductName>
                            <b>produto:</b> {element.name}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {element.id}
                          </ProductId>
                          <ProductColor color={element.color} />
                          <ProductSize>
                            <b>tamanho:</b> {element.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add onClick={()=>{updateItem("+")}}/>
                          <ProductAmount>{element.amount}</ProductAmount>
                          <Remove onClick={()=>{updateItem("-")}}/>
                        </ProductAmountContainer>
                        <ProductPrice>${element.amount * element.price}</ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                    {i++}
                  </React.Fragment>

                )
              })
            }
          </Info>
          <Summary>
            <SummaryTitle>Relatório de compra</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{totalit}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto</SummaryItemText>
              <SummaryItemPrice>${discont}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frete</SummaryItemText>
              <SummaryItemPrice>$-{dispatch}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${totalit-discont-dispatch}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={()=>{handleHome()}}>Concluir compra</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
