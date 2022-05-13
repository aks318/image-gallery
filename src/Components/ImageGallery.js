import React, { useContext, useEffect } from 'react'
import { Context as ImageContext} from '../Context/ImageContext'

const ImageGallery = () => {
    const{
        state : ImageState,
        fetchImage
    } = useContext(ImageContext)

    useEffect(() => {
        fetchImage("5ecb5c353000008f00ddd5a0")
    }, [])
    
  return (
    <div>ImageGallery</div>
  )
}

export default ImageGallery