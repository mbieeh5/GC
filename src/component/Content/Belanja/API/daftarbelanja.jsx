import { useState, useEffect } from "react"
import axios from "axios"
import { 
Stack, 
Image, 
Text, 
Box,
SimpleGrid,
useColorModeValue,
Container,
Grid,
GridItem,
Img,
} from "@chakra-ui/react"

const DaftarBelanja = () => {
    const [barang, setBarang] = useState([])
    useEffect(() => {
        axios.get(env.BASE_URL_CONTENTS, {
            params: {
                access_token: env.TOKEN_ACCESS
            }
        }).then((resp) => {
            //console.log('hasil resp content =>', resp.data.data)
            setBarang(resp.data.data)
        }).catch((err) => {
            console.log("Error =>", err)
        })
    }, [])

    return(
        <div>
{barang.map((x, i) => {
    return(
        <Box bg={useColorModeValue('gray.100','gray.700')} align='center' paddingTop="10" key={i}>
        <Grid templateColumns='gridRow' gap={1}>
            <GridItem w='100%'>
          <Img
            maxH={"250px"}
            as={'img'}
            src={x.media_url}
            />
            </GridItem>
        </Grid>
      </Box>
)
})}
</div>
    )

}
export default DaftarBelanja;