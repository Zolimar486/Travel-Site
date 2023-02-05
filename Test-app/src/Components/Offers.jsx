import styled from 'styled-components'
import {MdAirportShuttle, MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Container= styled.div`
margin:50px auto;
max-width:800px;
overflow:hidden;

@media only screen and (max-width:768px){
    margin:60px 60px;
    
}
`


const Hold = styled.div`
margin-bottom:20px;
`

const Title = styled.h1`
text-align:center;
`

const Desc= styled.p`
text-align:center;
color:#333;
`

const Wrapper= styled.div`
display:flex;
position:relative;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    
}
`

const WrapperEach= styled.div`
flex:1;
margin:5px;
border-radius:8px;
padding:5px;
background-color:white;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
 box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

 @media only screen and (max-width:768px){
    margin:7px 0px;
    width:100%;
 }
`

const Image= styled.img`
width:100%;
height:50%;
border-radius:1rem;
object-fit:cover;

`



const InfoContainer = styled.div``

const Div1= styled.div`
display:flex;
justify-content:space-between;
margin:5px 0px;
padding:0px 5px;
`

const Span= styled.span``

const Div2= styled.div`
display:flex;
margin:5px 0px;
@media only screen and (max-width:568px){
    display:flex;
    flex-direction:column;
}
`



const Span1= styled.span`

margin:2px 3px;
border-radius:2px;
background-color:rgba(240,240,255);
padding:2px;
display:flex;
align-items:center;
color:#333;

@media only screen and (max-width:768px){
    display:flex;
    align-items:center;
    justify-content:center;
}
`

const Div3  = styled.div`

`

const Icon= styled.div`
display:flex;
align-items:center;
color:#333;
`

const Button = styled.button`
width:100%;
margin-top:10px;
background-color:#F67009;
color:white;
border:none;
border-radius:10px;
padding:3px;
`



export default function Offers(){
   useEffect(() => {
    AOS.init({duration:3000})
   })

    return(
        <Container>
            <Hold data-aos="fade-up">
            <Title>Specials Offers</Title>
            <Desc> Visit new Places, meet new people and learn about  new cultures</Desc>
            </Hold>
            <Wrapper data-aos="fade-up" >
                <WrapperEach>
                    <Image src="https://images.pexels.com/photos/3605969/pexels-photo-3605969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    
                       <InfoContainer>
                       <Div1>
                        <Span>$6,500</Span>
                        <Span type="direction">Per day</Span>
                        </Div1> 
                        <Div2>
                            <Span1><MdKingBed style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 2 Beds</Span1>
                            <Span1><MdBathtub style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 1 Bath</Span1>
                            <Span1><FaWifi style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> Wifi</Span1>
                        
                        </Div2>
                        <Div3>
                            <Icon><MdLocationOn style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 430 Vine St Poland</Icon>
                        </Div3>
                        <Button>View Details</Button>
                    </InfoContainer>
                </WrapperEach>
                <WrapperEach>
                    <Image src="https://images.pexels.com/photos/14252723/pexels-photo-14252723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    
                    <InfoContainer>
                    <Div1>
                        <Span>$6,500</Span>
                        <Span type="direction">Per day</Span>
                        </Div1> 
                        <Div2>
                            <Span1><MdKingBed style={{fontSize:"20px", margin:"0px 3px",color:"#333"}}/> 2 Beds</Span1>
                            <Span1><MdBathtub style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 1 Bath</Span1>
                            <Span1><FaWifi style={{fontSize:"20px", margin:"0px 3px",color:"#333"}}/> Wifi</Span1>
                            
                            
                        </Div2>
                        <Div3>
                            <Icon><MdLocationOn style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 430 Vine St Poland</Icon>
                        </Div3>
                        <Button>View Details</Button>
                    </InfoContainer>
                </WrapperEach>
                <WrapperEach>
                    <Image src="https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    
                    <InfoContainer>
                    <Div1>
                        <Span>$6,500</Span>
                        <Span type="direction">Per day</Span>
                        </Div1> 
                        <Div2>
                            <Span1><MdKingBed style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 2 Beds</Span1>
                            <Span1><MdBathtub style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 1 Bath</Span1>
                            <Span1><FaWifi style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> Wifi</Span1>
                            
                            
                        </Div2>
                        <Div3>
                            <Icon><MdLocationOn style={{fontSize:"20px", margin:"0px 3px", color:"#333"}}/> 430 Vine St Poland</Icon>
                        </Div3>

                        <Button>View Details</Button>
                    </InfoContainer>
                    
                </WrapperEach>
            </Wrapper>
          
        </Container>
    )
}