import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const discount = 50

const Announcement = () => {
  return <Container>Super desconto! frete gratis acima de ${discount}</Container>;
};

export default Announcement;
