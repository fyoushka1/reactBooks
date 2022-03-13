import React from "react"
import ContentLoader from "react-content-loader"

const BooksLoaderList = ({books}) => {

    return(
       Array(10).fill(0).map((__, index) => (
           <ContentLoader
               key = {index}
               speed={2}
               width={380}
               height={525}
               viewBox="0 0 380 525"
               backgroundColor="#e0e0e0"
               foregroundColor="#ecebeb"
           >
               <rect x="0" y="13" rx="0" ry="0" width="220" height="349" />
               <rect x="0" y="369" rx="0" ry="0" width="42" height="11" />
               <rect x="0" y="388" rx="0" ry="0" width="220" height="10" />
               <rect x="0" y="406" rx="0" ry="0" width="220" height="12" />
               <rect x="0" y="438" rx="5" ry="5" width="125" height="35" />
               <rect x="139" y="437" rx="5" ry="5" width="84" height="35" />
               <rect x="3" y="493" rx="0" ry="0" width="74" height="17" />
               <rect x="103" y="483" rx="0" ry="0" width="120" height="37" />
           </ContentLoader>
       ))


    );
}

export default BooksLoaderList