import React, {useState, useContext, useEffect, useRef, useCallback} from 'react'
import Card from 'components/Card'

import styled, {css} from 'styled-components'

const Splash = styled.div`
	position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba( 0, 0, 0, .7);
    z-index: 1;
`;

const Center = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 40%;
`;

const CardInspectionModal = (props) => {
    const [inspectedCardInfo, setInspectedCardInfo] = useState();

    useEffect(() => {
        if (props?.cards?.[props?.inspectedCard]) setInspectedCardInfo(props?.cards?.[props?.inspectedCard]);
        else setInspectedCardInfo(undefined);
    }, [props]);

    return(
        <div>
            {
                inspectedCardInfo
                ? <Splash onClick={(event) => props?.setInspectedCard?.(undefined)}>
                    <Center>
                        <Card {...inspectedCardInfo}></Card>
                    </Center>
                </Splash>
                : undefined
            }
        </div>
    );
};

export default CardInspectionModal;