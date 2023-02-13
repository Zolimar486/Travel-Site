import styled from 'styled-components'
import {blog} from '../data'

const Container = styled.div`
margin:60px auto;
max-width:800px;
display:grid;
grid-template-columns: repeat(2, 2fr);
gap:1rem;

@media only screen and ( max-width:768px){
    margin:60px 60px;
    display:flex;
    flex-direction:column;
}
`

const Div= styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
gap:2rem;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
}
`

const Box1= styled.div`
height:200px;
width:100%;
border-radius:1rem;
overflow:hidden;
box-shadow:0px 2px 8px 2px rgba(178, 178, 178, 0.406);

`

const Image= styled.img`
height:100%;
object-fit:cover;
&: hover{
    transform: scale(1.1);
}

transition: .3s ease;
cursor:pointer;
`

const InfoContainer= styled.div`

`

const Title = styled.h3`
padding-bottom:10px;
font-weight:600;
`

const Desc= styled.p`
font-size:13px;
font-weight:500;
color:#79797C;
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-line-clamp:3;
-webkit-box-orient:vertical;
`

const Button= styled.button`
padding: .4rem 1.5rem;
border:none;
border-radius:3rem;
cursor:pointer;
background-color:#FF6600;
outline:none;
margin:5px 0px;
color:white;
`

export default function Blog(){
    return(
        <Container>

            {blog.map((item) => (
                <>
                <Div key={item.id}>
                <Box1>
                 <Image src={item.img}/>
                 </Box1>
                 <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>{item.desc} </Desc>
                     <Button>View More</Button>
                 </InfoContainer>
                </Div>
                </>
            ))}
            
        </Container>
    )
}