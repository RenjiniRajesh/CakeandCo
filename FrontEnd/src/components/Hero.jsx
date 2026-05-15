import styled from 'styled-components';
import bgImg from '../images/homeBG.jpg';

const Container = styled.div`
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    `;

const Quote = styled.div`
    background: linear-gradient(45deg,red,orange);
    background-clip: text;
    border: 2px solid #fff;
    border-radius: 12px;
    box-shadow: 0 0 4px #e600ff;
    margin: auto;
    margin-top: 40vh;
    height: 40vh;
    width: 90vh;
    font-family: Share Tech;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;
    &:hover{
        transform: scale(1.05);
        transition: all 0.3s ease; 
    }
`

const QuoteText = styled.p`
    text-align: center;
    font-size: 2.5em;
    width: 60%;
    line-height: 1.3;
    color: transparent;
`;

function Hero() {
    return (
        <>
        <Container>
                <Quote>
                    <QuoteText>
                        “Happiness is knowing there is a <span style={{color: '#ff00b3'}}>Cake</span> in the Oven”
                    </QuoteText>
                </Quote>  
        </Container>
         <cakegrid>
                    <img src="" alt="" />
                    <h2>The Strawberry Sunburst Cheesecake</h2>
                    <p>Our signature bake for the true strawberry lover. We’ve combined a rustic, high-walled crumbly crust with a rich vanilla bean cream, topped with layers of perfectly ripened strawberries. It’s the ultimate centerpiece for any celebration.
                        
                    </p>
                </cakegrid>
        </>
    )
}

export default Hero