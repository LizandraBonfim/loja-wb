import React from 'react';
import { Container, Skeleton, Img } from './styles';

function Image({ alt, ...props }) {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({ target }) {
        setSkeleton(false);
        console.log('carregou', target.style.opacity)
        target.style.opacity = 1;
    }


    return (
        <Container>
            {skeleton && <Skeleton />}
            {/* <Skeleton /> */}
            <Img onLoad={handleLoad} alt={alt} {...props} />
        </Container >
    )
}

export default Image;