import React from "react";

function User(){

    // Components Wrapper is a root element
    // return(
    //     <Wrapper>
    //         <h2>Some Title</h2>
    //         <p>Some text</p>
    //     </Wrapper>
    // )

    // Create root element using React.Fragment
    return(
        <React.Fragment>
            <h2>Some User Title</h2>
            <p>Some User text</p>
        </React.Fragment>
    )

}
export default User;