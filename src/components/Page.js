import React from 'react'

import styled, {css} from 'styled-components'

const PageContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    background-color: #506a77;
`;

const Page = React.memo((props) => {
    return(
        <PageContent>
            {props.children}
        </PageContent>
    )
});

export default Page;