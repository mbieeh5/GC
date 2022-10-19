import { Box, Container, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react'
import Kosong from './semua/Kosong'
import Rafi from './semua/Rafi'
import Aldi from './semua/Aldi'
import Sindi from './semua/Sindi'
import Seli from './semua/Seli'
import Hilda from './semua/Hilda'
import Kosong2 from './semua/Kosong2'

function Karyawan() {

    return (
        <Box bg={useColorModeValue('gray.100','gray.700')} alignItems='center' paddingTop="10">
            <Container maxW={'5xl'} py={1} as={Stack} spacing={1} alignItems={'center'}>
                <Stack 
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10}}>
                    <Kosong />
                    <Aldi />
                    <Rafi />
                </Stack>
                <Stack 
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 1, md: 1, lg: 7}}>
                    <Sindi />
                    <Kosong2 />
                    <Seli />
                    <Hilda />
                    </Stack>
            </Container>
        </Box>
    )
  }

export default Karyawan;