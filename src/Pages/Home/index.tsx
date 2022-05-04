import React from 'react'
import Navbar from '../../Components/Navbar';
import { Colors } from '../../Styles/colors';
// import { Colors } from '../../Styles/colors';
import { Container, ProjetosDiv } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <ProjetosDiv>
        <Container> 
          <h1 style={{marginTop:'1rem'}}>Sobre nós</h1>
          <div style={{textAlign: 'justify'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel hendrerit arcu. Nullam id lacus sit amet massa ultrices dapibus in vitae est. Sed laoreet ex urna, non ultrices diam efficitur at. Cras eleifend tempus dui, vitae pharetra mauris tempus sed. Duis erat mauris, pellentesque at laoreet quis, dapibus et mauris. Quisque pretium sapien eu consequat pharetra. Duis finibus in risus non consectetur. Pellentesque consectetur urna ac nisi mollis, sit amet venenatis dui fringilla. Nullam non dignissim arcu, et maximus diam. In et leo ac lorem pellentesque tristique. Quisque tincidunt purus a lectus vestibulum, vitae faucibus velit pharetra. Fusce rutrum laoreet nibh sit amet vulputate. Suspendisse eget vehicula turpis, id egestas ligula.
              Pellentesque ipsum quam, pulvinar at mollis vel, lacinia non sapien. Phasellus fermentum ornare fermentum. Maecenas pharetra elit risus, vel auctor justo consequat a. In luctus enim quis neque gravida mattis. Sed ac sem tellus. Nam at neque ornare, tempus lacus vel, pulvinar tellus. Aliquam erat volutpat. Donec at auctor lorem. Donec tristique tincidunt lorem ut viverra. Integer pellentesque sollicitudin turpis, pellentesque molestie ante tristique vitae. Nullam consectetur ut velit nec volutpat. In feugiat justo eu auctor hendrerit.
              Nulla facilisi. Aenean consectetur ut lectus sodales blandit. Vivamus faucibus accumsan sollicitudin. Fusce vel blandit mi, ac semper lectus. Nunc in lobortis tellus. Integer imperdiet imperdiet velit, non tincidunt urna mattis in. Cras dolor dolor, dapibus eu neque nec, fermentum suscipit leo. Aliquam ultrices lacinia ipsum, eget blandit ante vestibulum eu. Sed rutrum tempus tortor vel imperdiet. Aenean ut lacus vitae justo feugiat sagittis eu sed ipsum.
            </p>
          </div>
        </Container>
      </ProjetosDiv>
      <div style={{background: Colors.common.wheat, height: '100vh', width: '100%'}}>
        <Container>
        </Container>  
      </div>
    </>
  );
}

export default Home;
