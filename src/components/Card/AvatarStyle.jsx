import React from 'react';
import { Avatar,Wrap, WrapItem } from '@chakra-ui/react';
import {Card,Box,Text} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const AvatarStyle=()=>{

    const property={
    rating: 5,

    };
    return (
      <Card maxW='sm'>
<Wrap>
    <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
<Card  alignItems='center' bgSize={'250px'}>
    <Text fontSize='md' ml={'8px'} align={'Center'}>Super Fast Delivery</Text>
    <Box display='flex' mt='2'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon 
              name='Star'
                key={i}
                color={i < property.rating ? 'yellow.500' : 'white.300'}
              />
            ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          </Box>
          </Box>
        </Card>
</Wrap>
  
      </Card>
    )
  }

;
export default AvatarStyle;