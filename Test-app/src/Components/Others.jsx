import styled from 'styled-components'
import mountain from '../../src/Assests/mountain.png'

const Container = styled.div`

margin:60px auto;
max-width:800px;
overflow:hidden;

@media only screen and (max-width:768px){
    margin:60px 60px;
    overflow:hidden;
}
`

const Title = styled.h2`
text-align:center;

@media only screen and (max-width:768px){
    display:flex;
    align-items:center;
    justify-content:center;
}
`

const Wrapper = styled.div`
display:flex;
margin-top:30px;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
}
`

const WrapperEach= styled.div`
flex:1;
margin:5px;

@media only screen and (max-width:768px){
    margin:8px 0px;
    width:100%;
}

`

const Radius= styled.div`
width:60px;
height:60px;
border-radius:50%;
background-color:white;
text-align:center;
margin:0px  auto;
`

const Image = styled.img`
width:50px;
height:50px;
`

const InfoContainer = styled.div``

const H3 = styled.h3`
text-align:center;
margin:6px 0px;
`

const Desc= styled.p`
text-align:center;
line-height:24px;
color:#333;
`

export default function Others(){
    return(
        <Container>
            <Title>
                Why Hikings?
            </Title>
            <Wrapper>
                <WrapperEach>
                    <Radius>
                    <Image src={mountain}/>
                    </Radius>
                    <InfoContainer>
                        <H3>110+ Mountains</H3>
                        <Desc>Research Shows that a chance to break away from the normal routine, Reduce stress and improve health</Desc>
                    </InfoContainer>
                </WrapperEach>
                <WrapperEach>
                    <Radius>
                        <Image src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-man-hiking-outdoor-sport-png-image_7962806.png"/></Radius>
                    <InfoContainer>
                        <H3>1000+ Hokings</H3>
                        <Desc>Research Shows that a chance to break away from the normal routine, Reduce stress and improve health</Desc>
                    </InfoContainer>
                </WrapperEach>
                <WrapperEach>
                    <Radius>
                    <Image src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-customer-support-icon-graphic-design-template-vector-png-image_3981837.jpg"/>
                    </Radius>
                    <InfoContainer>
                        <H3>2000+ Customer</H3>
                        <Desc>Research Shows that a chance to break away from the normal routine, Reduce stress and improve health</Desc>
                    </InfoContainer>
                </WrapperEach>
            </Wrapper>
        </Container>
    )
}