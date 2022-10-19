import { 
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue, } from '@chakra-ui/react'
import aRafi from '../photos/Rafi.jpg'



function Rafi() {
const Rafi = {
    imageSrc: aRafi,
    numb: '628973997575',
    imageAlt: 'Richard',
    title: 'Cashier',
    ig: '@rraf.ppie'
  }
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={Rafi.imageSrc}
          alt={Rafi.imageAlt}
          mb={4}
          pos={'solid'}
          /*_after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'auto',
            bottom: 0,
            right: 3,
          }}*/
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {Rafi.imageAlt}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @W0LV.F0XV
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Ketika Masalah terselesaikan dengan Masalah baru
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #HEHE
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #GaKasbonGaGanteng
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            href={`http://wa.me/${Rafi.numb}`}
            target={'_blank'}
            pos={'solid'}
            fontSize={'sm'}
            rounded={'full'}
            as={'a'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            href={'http://instagram.com/rraf.rrap'}
            target={'_blank'}
            pos={'solid'}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            as={'a'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default Rafi;
