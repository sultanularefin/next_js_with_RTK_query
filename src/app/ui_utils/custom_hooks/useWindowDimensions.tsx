



import React, {
    useContext,
    useState,
    useEffect
} from 'react';
// import {useAppDispatch} from "@/lib/hooks";

// import {useAppDispatch} from "../../appStore/app/hooks";

export interface Dimensions{
    innerWidth: number,
    innerHeight: number,
}

const getWindowDimensions =()=> {
    // const { innerWidth: width, innerHeight: height } = window;

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
    // heightOutput.textContent = window.innerHeight;
    // widthOutput.textContent = window.innerWidth;
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
}




// export default Utility_DImensions;



const useWindowDimensions= () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // initially we get the innerWidht and innerHeight
    // const dispatch = useAppDispatch();


    useEffect(() => {
        const handleResize=()=> {

            const abc= getWindowDimensions();
            setWindowDimensions(abc);
            // 999

            const width_Height_Payload= getWindowDimensions();

        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimensions;//windowDimensions;// windowDimensions;
}

export default useWindowDimensions;
