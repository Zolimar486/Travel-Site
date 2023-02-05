import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:60vh;
flex-direction:column;

@media only screen and (max-width:768px){
    overflow:hidden;
}
`

const Wrapper = styled.div`

`
const HomeText= styled.div`
text-align:center;

`

const Title = styled.h1`
color:white;
font-size:2rem;
font-weight:700;
line-height:2.5rem;
text-align:center;
`

const Subtitle= styled.p`
color:white;
opacity: .9;
font-size:18px;

font-weight:300;
padding:1rem 0;
text-align:center;

`

const Button= styled.button`
padding: .4rem 1.5rem;
border-radius:3rem;
background-color:#F67009;
border:none;
cursor:pointer;
color:white;
`

const Tag= styled.a`
color:white;
`


export default function Home(){
    useEffect(() => {
        AOS.init({duration:3000})
    })

    return(
        <Container>
           <Wrapper>
            <HomeText data-aos="fade-up">
             <Title>Plan your Trip with Travel Dot</Title>
             <Subtitle>Travel to your favorite city with respectful of the Environment</Subtitle>
             <Button>
                <Tag>Explore Now</Tag>
             </Button>
        
            </HomeText>
             
            
           
           </Wrapper>
        </Container>
    )
}