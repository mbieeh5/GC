import { useState, useEffect } from 'react';
import { 
    Stack,
    Image, 
    Heading, 
    Box, 
    Center, 
    Text, 
    Button, 
    Avatar,
    Flex,
    useColorModeValue, 
} from '@chakra-ui/react';
import axios from 'axios';
import env from 'react-dotenv';
import DaftarBelanja from './API/daftarbelanja';

const Belanja = () => {
    const [result, setProfile] = useState([])
    useEffect(() => {
        axios.get(env.BASE_URL_IGPROFILE, {
            params: {
                access_token: env.TOKEN_ACCESS
            }
        }).then((resp) => {
            //console.log('hasil resp =>', resp.data)
            setProfile(resp.data)
        }).catch((err) => {
            console.log("Error =>", err)
        })
    }, [])

return (
<div>
  <div>
    <Center pt={20} pb={5}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={result.profile_picture_url}
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            pos={'solid'}
            src={result.profile_picture_url}
            alt={result.username}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {result.username}
            </Heading>
            <Text color={'gray.500'}>{result.name}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{result.followers_count}K</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            href={"https://instagram.com/glorycell.official"}
            target={"_blank"}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            as={'a'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Center> 
  </div>  
  <DaftarBelanja />
</div>
) 
};

export default Belanja;