// import React, {Suspense} from 'react';

// const LazyComponent = React.lazy(() => import('./Code_Splitting/LazyComponent'))

// function CodeSplitting(){
//     return(
//         <div>
//             <Suspense fallback={<div>Loading.....</div>} ></Suspense>
//         </div>
//     );
// }

// export default CodeSplitting

import React, {Suspense} from 'react';

const LazyComponent1 = React.lazy(() => import('./LazyComponent'));
const LazyComponent2 = React.lazy(() => import('./LazyComponent'));


function CodeSplitting() {
    return (
        <div>
            <Suspense fallback= {<div>Loading...</div>} />
            {LazyComponent1}
            {LazyComponent2}
        </div>
    )
}

export default CodeSplitting;

