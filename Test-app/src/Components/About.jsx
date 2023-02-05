import styled from 'styled-components'


const InfoContainer = styled.div`
margin:0px auto;
position:relative;
bottom:50px;
z-index:999;
overflow:hidden;
max-width:800px;



@media only screen and (max-width 768px){
    margin: 0px auto;
    
    
}


`


const Box = styled.div`
width:100%;
height:100px;
background-color:white;
padding:10px;
border-radius:1rem;
border:0.5px solid gray;

 
 @media only screen and (max-width:768px){
    width:max-content;
    height:320px;
    margin:0px auto;
    padding:30px;
    
    
 }


 

 
 
`

const Form= styled.form`
display:flex;


@media only screen and ( max-width:768px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}
`

const Div= styled.div`
margin:0px 4px;
@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    margin:3px 0px;
}

`

const Label = styled.label`
@media only screen and ( max-width:768px){
    
}
`

const Input = styled.input`
padding:3px;
border-radius:.3rem;
border:1px solid gray;
@media only screen and (max-width: 768px){
    margin:5px 0px;
    
}
`

const Div1= styled.div`
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:768px){
    margin:6px  0px;
}
`
const Button = styled.button`
background-color:#F67009;
padding:0.3rem 2rem;
border:none;
border-radius:1rem;
color:white;

cursor:pointer;
`

export default function About(){
   
    return(
        <InfoContainer>
        <Box>
            <Form>
                <Div>
                <Label>Location</Label>
                <Input type="text" placeholder="London"></Input>
                </Div>
                <Div>
                <Label>Distance</Label>
                <Input type="text" placeholder="2 Kilometers"></Input>
                </Div>
                <Div>
                <Label>Price Range</Label>
                <Input type="text" placeholder="$2000"></Input>
                </Div>
                <Div1>
                <Button>Search</Button>
                </Div1>
                
            </Form>
        </Box>
    </InfoContainer>

    )
}