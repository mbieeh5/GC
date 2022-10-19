import React, { useState } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';



const Pulsa = () => {
  const initialValue = { number: ""}
  const [formValue, setFormValue] = useState(initialValue)
  const [formErrors, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleChange = (e) => {
  const { number, value } = e.target;
    setFormValue({ ...formValue, [number]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formValue));
    setIsSubmit();
  }

  const validation = (values) => {
    const errors = {};
  /*const regexTsel
    const regexXl
    const regexAxis
    const regexIsat
    const regexByu
    const regexSmart
  */
    if(!values.number === 0) {
      errors.number = "Nomor Harus Di Isi"
    } else if (!values.number > 13) {
      errors.number = "Nomor Tujuan Harus 12/13 angka"
    }
  }



        return(
          <Flex
            minH={'10px'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>Pengisian Kuota Atau Pulsa</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  Pengisian Cepat No Lama Lama ✌️
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                  <FormControl id="number" pos={'solid'}>
                    <FormLabel pos={'solid'}>Nomor Handphone</FormLabel>
                    <Input pos={'solid'} type="number" placeholder="0812 3456 7890"/>
                    <Stack
                    pt={'2'}
                    >
                    <Flex justifyContent="center" mt={4}>
                      <Popover placement="bottom" isLazy>
                        <PopoverTrigger>
                          <Button
                            pos={'solid'}
                            colorScheme="blue"
                            w="fit-content">
                            Pilih Pengisian
                            </Button>
                        </PopoverTrigger>
                      <PopoverContent  _focus={{ boxShadown: 'none' }}> 
                      <PopoverCloseButton />
                      <PopoverHeader fontWeight="bold">Pilih Pengisian</PopoverHeader>
                      <PopoverBody w="full">
                        <Tabs isLazy colorScheme="blue">
                          <TabList>
                            <Tab
                              _focus={{ boxShadow: 'none' }}
                              fontSize="xs"
                              fontWeight="bold"
                              w="50%">
                              Kuota Internet
                            </Tab>
                            <Tab
                            _focus={{ boxShadow: 'none' }}
                            fontSize="xs"
                            fontWeight="bold"
                            w="50%">
                            Pulsa Regular
                            </Tab>
                            </TabList>
                          <TabPanels>
                          <TabPanel>
                            <Stack>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Data Internet 1GB 30hari
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 25.000</Button>
                            </Text>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Data Internet 2GB 30hari
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 35.000</Button>
                            </Text>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Data Internet 4GB 30hari
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 55.000</Button>
                            </Text>
                            </Stack>
                          </TabPanel>
                          <TabPanel>
                          <Stack>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Pulsa Regular Rp.5000
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 5.200</Button>
                            </Text>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Pulsa Regular Rp.10000
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 10.200</Button>
                            </Text>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Pulsa Regular Rp.15000
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 15.200</Button>
                            </Text>
                            <Text textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
                            Pulsa Regular Rp.20000
                            <Button colorScheme="blue" h={'30px'} textAlign="center">Harga 20.200</Button>
                            </Text>
                            </Stack>
                          </TabPanel>
                          </TabPanels>
                        </Tabs>
                      </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  </Stack>
                  </FormControl>
              </Box>
            </Stack>
          </Flex>
        )
   }
export default Pulsa