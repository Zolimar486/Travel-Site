import About from "./Components/About";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import styled from 'styled-components'
import Popular from "./Components/Popular";
import Offers from "./Components/Offers";
import Others from "./Components/Others";
import Grid from "./Components/Grid";
import Footer from "./Components/Footer";

const Container = styled.div`
width:100%;
height:450px;
background:linear-gradient(rgba(33,33,33,0.522),rgba(33,33,33,0.522)),url('https://images.pexels.com/photos/14353715/pexels-photo-14353715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-position:center;
background-size:cover;
`


function App() {

  return(
    <div className="app">
       
      <Container>
      <Navbar/>
       
      <Home/>
      </Container>
      <About/>
      <Popular/>
      <Offers/>
      <Others/>
     <Grid/>
     <Blog/>
     <Footer/>
    </div>
  );
}


export default App;
