import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapSigns, FaMoneyBill } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <div>
      <Image src={'/logoGlory.png'} alt='glory' w={'200px'} h={'200px'} />
    </div>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      right={0}
      bottom={0}
      left={0}
      textAlign={'center'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Stack>
          <Text fontSize={'2xl'}>Pembayaraan
            <SocialButton label="Payment" href='#'>
              <FaMoneyBill />
            </SocialButton>
          </Text>
          <Text textAlign={'left'} fontSize={'2l'}>
            <br />
            BCA :   167-157-9602
            <br />
            BRI :   7200 0102 1044 533
            <br />
            DANA :  085210306474
            <br />
            GOPAY : 085210306474
            <Text>Semua Atas Nama <br /></Text><Text textAlign={'center'} fontWeight={'bold'}>Rafi Anggoro</Text>
          </Text>
          <Text fontSize={'2xl'} as="a" href="https://goo.gl/maps/YPG7MK9utWZcVgC69" target='_blank'>Kantor
            <SocialButton href="https://goo.gl/maps/YPG7MK9utWZcVgC69" target='_blank'>
              <FaMapSigns />
            </SocialButton>
          </Text>
          <Text textAlign={'left'} fontSize={'2l'}>
            <br />
            GloryCell
            <br />
            jl Raya Cikaret no 002 B-C
            <br />
            kel. HarapanJaya, Cibinong, Bogor
          </Text>

        </Stack>
        <Text>© 2002 Glory Cell</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Tiktok'} href={'#'}>
            <FaTiktok />
          </SocialButton>
          <SocialButton label={'FaWhatsapp'} href={'https://wa.me/6287771221889/'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/glorycell.official'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
