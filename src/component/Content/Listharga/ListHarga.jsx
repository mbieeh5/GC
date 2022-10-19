import {
  Stack,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function ListHarga() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('https://harga.rraf.site/harga',).then((resp) => {
      //console.log(resp)
      setList(resp.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <Stack pt={20}>
      <div dangerouslySetInnerHTML={{ __html: list }}></div>
    </Stack>
  )
};
