import styled from 'styled-components'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {useState}from 'react'
import '../app.css'

const Container = styled.div`
height:50px;
`
const Wrapper = styled.div`


position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
background-color:transparent;
width:100%;
padding:1rem;
z-index:1000;

`

const Left=styled.div``

const Logo=styled.a`

cursor:pointer;
align-items:center;
justify-content:center;
color:white;
font-weight:500;

`

const Tag= styled.a`

color:white;

@media only screen and ( max-width:768px){
    color:#79797C;
  
    font-weight:600;

    &:hover{
       color:##FF6600; 
    }

}
`

const H1= styled.h1`
display:flex;
align-items:center;
`

const Right= styled.div`

@media only screen and (max-width:768px){
   background:#F5F5F5;
   position:absolute;
   height:max-content;
   padding: 1rem;
   width:100%;
   top:0;
   
   box-shadow:0 2px 4px rgba(209, 209,209, 0.904);
   transition: .5s;
   z-index:1000;
   left:${({isOpen}) =>(isOpen? "0px": "-500%") }
   
}
`

const List = styled.ul`
list-style:none;
display:flex;
align-items:center;


@media only screen and (max-width:768px){
    flex-direction:column;
    justify-content:center;
    width:100%;
    margin:auto;
}    

`

const ListItems= styled.li`
margin:0px 5px;


@media only screen and (max-width:768px){
    padding: 5px 0px;
}

`

const Btns= styled.div`
display:flex;
align-items:center;
margin:0px 20px;

@media only screen and (max-width:768px){
   flex-direction:column; 
}

`

const Button = styled.button`
padding: .4rem 1.5rem;
border:none;
border-radius:3rem;
cursor:pointer;
background-color:#FF6600;
outline:none;
margin:0px 5px;
background:${props => props.type==="direction" && "transparent"};
border:${props => props.type==="direction" && "0.5px solid white"};

@media only screen and (max-width:768px){
    margin-top:1rem;
    background:${props => props.type==="direction" && "none"};
    border:${props => props.type==="direction" && "1px solid #FF6600"};
    &:hover{
        background:${props => props.type==="direction" && "#CE5E09"}
    }

}

` 

const Tags= styled.a`
color:white;

@media only screen and (max-width:768px){
    color:${props => props.type==="direction" && "#FF6600"};
    &:hover{
        color:${props=> props.type==="direction" && "white"};
    }
}
`



const Burger= styled.div`
 display:none;

@media only screen and (max-width:768px){
    display:block;
    position:absolute;
    top:10px;
    right:15px;
    color:#CE5E09;

}
`

const Toggle= styled.div`
display:none;

@media only screen and (max-width:768px){
    display:block;
    font-size:25px;
    color:white;
    &:hover{
        color:#f67009;
    }

}
`


export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)
    
    const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = ()=> {
        if(window.scrollY >= 50){
            setColorChange(true)
        }else{
            setColorChange(false)
        }
    };

    window.addEventListener("scroll", changeNavbarColor)
    

    ///useEffect(()=> {
        //AOS.init({duration:3000})
    //})
    return(
        <Container >
         <Wrapper className={colorChange ? 'navbar colorChange' : 'navbar'}>
         <Left>
            <Logo>
                <H1><SiYourtraveldottv style={{color:"#FF6600", fontSize:"25px"}}/>Dot</H1>
            </Logo>
         </Left>
          <Right isOpen={isOpen}>
           <List>
            <ListItems>
                <Tag>Home</Tag>
            </ListItems>
            <ListItems>
                <Tag>Products</Tag>
            </ListItems>
            <ListItems>
                <Tag>Resources</Tag>
            </ListItems>
            <ListItems>
                <Tag>Contacts</Tag>
            </ListItems>
            <ListItems>
                <Tag>Blog</Tag>
            </ListItems>
            <Btns>
                <Button type="direction">
                    <Tags type="direction">Login</Tags>

                </Button>
                <Button>
                    <Tags>
                        Sign up
                    </Tags>
                </Button>
            </Btns>
           </List>
           <Burger onClick={()=> setIsOpen(!isOpen)}>
            <AiFillCloseCircle style={{fontSize:"2rem", cursor:"pointer"}}/>
           </Burger>
          </Right>
           <Toggle onClick={() => setIsOpen(!isOpen)}>
            <TbGridDots style={{fontSize:"2rem", cursor:"pointer"}}/>
           </Toggle>
         </Wrapper>
        </Container>
    )
}

