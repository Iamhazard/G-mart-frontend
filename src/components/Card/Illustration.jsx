import React from 'react';
import { Image,Box} from '@chakra-ui/react';
//import { LottieInteractivity,create} from '@lottiefiles/lottie-interactivity';
import deli from '../image/deli.jpg';

const Illustration=()=>{
//    const  delivery={
//  LottieInteractivity.create({
//     mode:"scroll",
//     player:'#firstLottie',
//     actions: [
//         {
//             visibility:[0,1],
//             type: "seek",
//             frames: [0, 400],
//         },
//     ]
// })};
return (
     <Box boxSize='xl'>
        <Image src={deli}/>
     </Box>
    )
}
    
  
export default Illustration;