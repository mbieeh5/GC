import { useEffect, useState } from "react";
import { Image, Box } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import env from "react-dotenv";
import axios from "axios";


const IklanGeser = ({ slides }) => {
  const [iklan, setIklan] = useState([])
  useEffect(() => {
    axios.get(env.BASE_URL_STORIES, {
      params: {
        access_token: env.TOKEN_ACCESS
      }
    }).then((resp) => {
      //console.log(resp.data.data)
      setIklan(resp.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const [current, setCurrent] = useState(0)
  const length = slides.length;
  const Selanjutnya = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const Sebelumnya = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Box
      paddingBottom={20}
      display={'flex'}
    >
      <ArrowForwardIcon
        position={'absolute'}
        top={"50%"}
        right={"32px"}
        cursor={'pointer'}
        zIndex={10}
        onClick={Selanjutnya} />
      <ArrowBackIcon
        position={'absolute'}
        top={"50%"}
        left={"32px"}
        cursor={'pointer'}
        zIndex={10}
        onClick={Sebelumnya} />
      {iklan.map((x, i) => {
        return (

          <div className={i === current ? 'slide Active' : "slide"} key={i}>
            {i === current && (
              <Image
                boxSize={'1l'}
                src={x.media_url} alt={"Iklan"} />
            )}


          </div>
        )
      })}
    </Box>
  )
}

export default IklanGeser;