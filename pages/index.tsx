import type { NextPage } from "next";
import styled from "styled-components";

console.log(styled);

const Home: NextPage = () => {
  return (
    <Title>
      <p>Hello world</p>
    </Title>
  );
};
export default Home;

const Title = styled("h1")(({ theme }) => ({
  color: theme.Theme.theme,
}));
