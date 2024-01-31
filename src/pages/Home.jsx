import Navigation from '../components/Navigation'
import Container from '../components/Container'
import About from '../components/About'
import React from 'react';
import FixedImage from '../components/FixedImage';
import AboutMe from '../components/AboutMe';
import Description from '../components/Description';
import ButtonDescription from '../components/ButtonDescription';
import Portfolio from '../components/Portfolio';
import PortfolioDescription from './PortfolioDescription';
import Services from '../components/Services';
import ServiceHeading from '../components/ServiceHeading';
const Home =() =>{

return <>  
<Container>
  <Navigation/>
</Container>

<Container>
<About />
</Container>
<Container>
<FixedImage  />
</Container>

<Container>
<AboutMe />
</Container>

<Container>
<Description />
</Container>

<Container>
<ButtonDescription/>
</Container>

<Container>
<Portfolio/>
</Container>
<Container>
<PortfolioDescription/>
</Container>

<Container>
<Services/>
</Container>

<Container>
<ServiceHeading />
</Container>
<Container>
<FixedImage  />
</Container>







</>

}

export default Home;