import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:bold;
`

function Announcment(){
    return(<>
        <Container>
            Announcment is here
        </Container>
    </>)
}

export default Announcment;