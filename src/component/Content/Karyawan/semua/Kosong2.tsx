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
import { ArrowDownIcon } from "@chakra-ui/icons"

function Kosong2() {


 const Kosong = {
    imageAlt: "Posisi Sebagai",
    title: 'Front Line',
    rating: '0',
    ig: '#'
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
              src={'a'}
              alt={Kosong.imageAlt}
              mb={4}
              pos={'solid'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {Kosong.imageAlt}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {Kosong.title}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Dicari Karyawan 
            </Text>
    
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                {<ArrowDownIcon />}
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Kirim CV Ke wa kami ya
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                {<ArrowDownIcon />}
              </Badge>
            </Stack>
    
            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                href={'https://wa.me/628811429638'}
                pos={'solid'}
                fontSize={'sm'}
                rounded={'full'}
                as={'a'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Kirim Lamaran
              </Button>
              <Button
                href={'https://wa.me/628811429638'}
                target={'_blank'}
                flex={1}
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
                Kirim Lamaran
              </Button>
            </Stack>
          </Box>
        </Center>
      );
}

export default Kosong2;