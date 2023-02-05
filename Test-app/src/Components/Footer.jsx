import styled from 'styled-components'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Container = styled.div`

background-color:#F8F6F7;
height:40vh;

@media only screen and (max-width:768px){
    height:40vh;
}

@media only screen and (max-width:568px){
    height:70vh;
} 

`

const Wrapper = styled.div`
display:flex;
margin:60px auto;
max-width:800px;
padding:40px 0px;

@media only screen and (max-width:568px){
    display:flex;
    align-items:center;
     flex-direction:column;


}
`

const Left= styled.div`
flex:3;
@media only screen and (max-width:768px){
    margin:0px 10px;
}

@media only screen and (max-width:568px){
    margin-bottom:10px;
}
`

const Logo= styled.a`
color:black;


`

const H2= styled.h2`

`

const MenuIcons = styled.div`

display:flex;
@media only screen and (max-width:568px){
    margin-top:10px;
}
`

const Icons = styled.div`
margin:0px 3px;
border-radius:50%;
width:30px;
height:30px;
background-color:#F67009;
color:white;
display:flex;
align-items:center;
justify-content:center;
`

const Center = styled.div`
flex:3;
@media only screen and (max-width:768px){
   
}

@media only screen and (max-width:568px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}
`


const Title= styled.h3`
margin-bottom:10px;
`

const List = styled.ul`
list-style:none;
margin:0;
padding:0;
color:#79797C;
`

const ListItems= styled.li`
margin-bottom:5px;
`

const Right= styled.div`
flex:3;
@media only screen and (max-width:768px){
    display:none;
}
`

const Contact = styled.div`
flex:3;
@media only screen and (max-width:768px){
    
}

@media only screen and (max-width:568px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}
`


export default function Footer(){
    return(
        <Container>
         <Wrapper>
         <Left>
            <Logo>
                <H2><SiYourtraveldottv style={{color:"#FF6600"}}/> Dot</H2>
            </Logo>
            <MenuIcons>
                <Icons>
                    <ImFacebook/>
                </Icons>
                <Icons>
                    <BsTwitter/>
                </Icons>
                <Icons>
                    <AiFillInstagram/>
                </Icons>
                
            </MenuIcons>
         </Left>
         <Center>
            <Title>Information</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Explore</ListItems>
                <ListItems>Travel</ListItems>
                <ListItems>Blog</ListItems>
            </List>
         </Center>
         <Right>
         <Title>Helpful Links</Title>
            <List>
                <ListItems>Destination</ListItems>
                <ListItems>Support</ListItems>
                <ListItems>Travel & Condition</ListItems>
                <ListItems>Privacy</ListItems>
            </List>
         </Right>
         <Contact>
         <Title>Contact</Title>
            <List>
                <ListItems>+ 651 125 656</ListItems>
                <ListItems>Dot@gmail.com</ListItems>
                
            </List>
         </Contact>
         </Wrapper>
        </Container>
    )
}