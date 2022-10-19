import { Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue, } from '@chakra-ui/react'
import aAldi from '../photos/Aldi.jpg'

function Aldi() {
const Aldi = {
    imageSrc: aAldi,
    imageAlt: 'Aldi',
    ig: '@siapa_dah'
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
          src={Aldi.imageSrc}
          alt={Aldi.imageAlt}
          mb={4}
          pos={'solid'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {Aldi.imageAlt}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {Aldi.ig}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Aku Sayang Kamu Tapi Kamu Pilih Dia hiks
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #anakMotor
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #JagoGrosir
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            href={'https://wa.me/6289655055255'}
            target={'_blank'}
            flex={1}
            pos={'solid'}
            fontSize={'sm'}
            rounded={'full'}
            as={'a'}
            _focus={{
              bg: 'gray.200',
            }}>Message
          </Button>
          <Button
            flex={1}
            href={'https://instagram.com/_.siapadah._'}
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

export default Aldi;