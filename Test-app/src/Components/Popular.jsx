import styled from 'styled-components'
import {useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import { card } from '../data';

const Container = styled.div`
margin: 50px auto;
max-width:800px;

@media only screen and (max-width:768px){
    
    margin:40px 60px;
    overflow:hidden;
}

`
const Post2 = styled.div`
display:flex;
justify-content:space-between;
width:100%;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;

}
`
const Hold = styled.div`` 

const Title = styled.h2``

const Text1= styled.p`
color:#333;
font-size:16px;
font-weight:300;

@media only screen and (max-width:768px){
    margin:3px 0px;
    width:100%;
}
`

const Icons = styled.div`
display:flex;
cursor:pointer;
@media only screen and (max-width:768px){
    margin:8px 0px;
}
`

const Border= styled.div`
width:30px;
height:30px;
border-radius:50%;
display:flex;
background-color:#333;
align-items:center;
justify-content:center;
margin:0px 4px;
&:hover {
    background-color:#79797C;
}
`

const Span= styled.span`
width:25px;
height:3px;
background-color:white;
border-radius:6px;
margin:0px
`

const Wrapper  = styled.div`
display:flex;
margin-top:20px;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
}
`

const WrapperEach= styled.div`
flex:1;
margin:5px;
border-radius:5px;
height:60vh;
@media  only screen and (max-width:768px){
    height:50vh;
    margin:10px 0px;
    width:100%;
}

`

const Image = styled.img`
width:100%;
height:50%;
object-fit:cover;
border-radius:10px;
@media only screen and (max-width:768px){
    
}
`





const InfoContainer = styled.div`

`
const DestinationInfo= styled.div`
margin:2px 0px;
`

const Span2 = styled.span`
margin:2px  0px;
color:#333;
font-weight:600;

`

const Paragraph= styled.p`
color:#79797c;
font-size:13px;
`

const Box = styled.div`
display:flex;
align-items:center;
`

const Number = styled.h3`
margin:0px 2px;
`

const Line = styled.span`
width:25px;
height:4px;
background-color:orange;

`

const Box2= styled.div``

const Text= styled.h3``




export default function Popular (){
    useEffect(() => {
        AOS.init({duration:3000})
    })

    return(
        <Container >
            <Post2>
                <Hold>
                <Title data-aos="fade-right">Popular Destination</Title>
                <Text1 data-aos="fade-right">From historical Cities to natural spectaculars, come see the best of the world</Text1>
                </Hold>
                <Icons data-aos="fade-left">
                    
                    <Border >
                    <BsArrowLeftShort style={{fontSize:"1.5rem", color:"white"}}/>

                    </Border>
                    <Border>
                    <BsArrowRightShort style={{fontSize:"1.5rem", color:"white"}}/>
                    </Border>

                </Icons>

            </Post2>
            <Wrapper data-aos="fade-up">

              {card.map((item) => (
                <WrapperEach key={item.id}>
                <Image src={item.img}/>
                <InfoContainer>
                    <DestinationInfo>
                        <Span2>{item.text}</Span2>
                        <Paragraph>{item.desc}</Paragraph>
                    </DestinationInfo>
                   <Box>
                       <Number>{item.id}</Number>
                       <Line ></Line>
                   </Box>
                   <Box2>
                       <Text>{item.title}</Text>
                   </Box2>
                </InfoContainer>
             </WrapperEach>
              ))}
             
            </Wrapper>
        </Container>
        
    )
}