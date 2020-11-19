import React from 'react'

import styled, {css} from 'styled-components'

const PageContent = styled.div`
    position: absolute;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
`;

const Page = React.memo((props) => {
    return(
        <PageContent>
            {props.children}
        </PageContent>
    )
});

export default Page;