import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimoni = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimoniContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'lg'}
      align={'center'}
      pos={'solid'}
      _after={{
        // content:'',
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimoniHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} >
      {children}
    </Heading>
  );
};

const TestimoniText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimoniAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} pos={'solid'} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Content() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'5xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Apa Kata Pelanggan Tentang Kami</Heading>
          <Text>Memberikan Pelayanan Yang Baik Adalah Salah Satu Moto Kami</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimoni>
            <TestimoniContent>
              <TestimoniHeading>Harga Murah Karyawannya Juga Ramah</TestimoniHeading>
              <TestimoniText>
                Harga Murah Bersaing sama yang lain, tapi di sini pelayanannya bagus. sukses terus Glory
              </TestimoniText>
            </TestimoniContent>
            <TestimoniAvatar
              src={''}
              name={'Ci lingling'}
              title={'Pelanggan Glory'}
            />
          </Testimoni>
          <Testimoni>
            <TestimoniContent>
              <TestimoniHeading>Toko Langganan</TestimoniHeading>
              <TestimoniText>
                harga oke, barang oke bergaransi. pelayanannya ga ribet keren
              </TestimoniText>
            </TestimoniContent>
            <TestimoniAvatar
              src={''}
              name={'Renaldi aswin'}
              title={'Pelanggan Glory'}
            />
          </Testimoni>
          <Testimoni>
            <TestimoniContent>
              <TestimoniHeading>seneng belanja di sini</TestimoniHeading>
              <TestimoniText>
                karyawannya ramah saya yang termasuk gaptek. di bimbing sampai selesai sukses terus untuk Glorycell
              </TestimoniText>
            </TestimoniContent>
            <TestimoniAvatar
              src={""}
              name={'marsellindah'}
              title={'Pelanggan Glory'}
            />
          </Testimoni>
        </Stack>
      </Container>
    </Box>
  );
};

