import styled from 'styled-components'
import video from '../../src/Assests/sky.mp4'
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Container = styled.div`
max-width:800px;
margin:80px auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
gap:2rem;
padding:2rem 1.5rem;
background: linear-gradient(to top, rgba(0,0,0, 0.73), rgba(0,0,0, 0.609)), url("https://images.pexels.com/photos/5480736/pexels-photo-5480736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
background-position:center;
background-size:cover;
overflow:hidden;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    margin:50px 60px;
}
`

const CardText= styled.div`
margin-top:10px;
`

const H2 = styled.h2`
color:white;
font-weight:600;
padding-bottom:1rem;
`

const Desc= styled.p`
opacity: .7;
font-size:12px;
font-weight:400;
color:white;
letter-spacing:1px;
`

const CardVideo= styled.div`
border:2px solid white;
order-radius:10px;
width:95%;
height:150px;
overflow:hidden;

`

const Video = styled.video`
width:100%;
height:100%;
object-fit:cover;

`


export default function Grid(){
    
    useEffect(()=> {
        AOS.init({duration:2500})
    })

    return(
        <Container>
            <CardText data-aos="fade-right">
            <H2>Wonderful House 
                    Experience in there</H2>
                    <Desc>The Adventure subranking is based on an 
                          equally weighted average of scores from
                          five country.
                    </Desc>
            </CardText>
            <CardVideo data-aos="fade-left"><Video src={video} autoPlay loop  muted type="video/mp4"></Video></CardVideo>
        </Container>
    )
}