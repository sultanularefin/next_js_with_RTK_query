'use client';
import Counter from "@/components/Counter";
import PostsList from "@/components/PostsList";
import Empty_View_Total_Width from "@/app/root_comp/Empty_View_Total_Width";
import useWindowDimensions from "@/app/ui_utils/custom_hooks/useWindowDimensions";
// import PostsList from "@/components/PostsList";
// import PostsList from "@/components/PostsList";


const RTK_Query_Comp = () => {

    const dimensions_Width_Height = useWindowDimensions();
    // const ff = useWin
    return (

        <div style={{
            width: '100%',
            height: '60vh',
            backgroundColor: "deepskyblue",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',

        }}>
            <Empty_View_Total_Width
                comp_Width={dimensions_Width_Height.width}
                comp_height={100}

            />
            <h2 style={{
                fontSize: "1.5rem",
                color: "white",
            }}>Redux Complete Tutorial</h2>
            <Counter/>
            <PostsList/>
        </div>

    );
}

export default RTK_Query_Comp;
