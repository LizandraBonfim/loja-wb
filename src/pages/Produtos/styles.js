import styled from 'styled-components';
import banner from '../../assets/banners/nerdstore.png';

export const Banner = styled.div`
position: relative;
z-index: 1;
background-attachment: fixed;


&::after{
    content: '';
    position: absolute;

    background: url(${banner}) no-repeat center;
    bottom: 0;
    
    width: 100%;
    height: 100%;
}
  
`;
