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
import aAmri from "../photos/Amri.jpg"

function Amri() {


 const Amri = {
    imageAlt: aAmri,
    title: 'Amri',
    ig: 'basit.ardhabilli'
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
              src={Amri.imageAlt}
              alt={Amri.ig}
              mb={4}
              pos={'solid'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {Amri.title}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @Amri_Amfor_Am I 
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Apa bae dah Yg penting bagis <br/> *Bagus
            </Text>
    
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #KOLLLOOOOTT
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #KOLOT
              </Badge>
            </Stack>
    
            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                href={`https://instagram.com/${Amri.ig}`}
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
                href={`https://instagram.com/${Amri.ig}`}
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
                Follow
              </Button>
            </Stack>
          </Box>
        </Center>
      );
}

export default Amri;