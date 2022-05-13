import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context as ImageContext} from '../Context/ImageContext'
import './ImageGallery.css'

const ImageGallery = () => {
    const{
        state : ImageState,
        fetchImage
    } = useContext(ImageContext)
    const [imageList , setImageList] = useState([])

    useEffect(() => {
        fetchImage("5ecb5c353000008f00ddd5a0")
    }, [])

    useEffect(() => {
      if(ImageState.image.length > 0) setImageList(ImageState.image)
    }, [ImageState.image])
    
  return (
    <div className='gallery'>
      {imageList.map((image , index) => 
        {
          if(index !== 0){
            return (<LazyLoadImage
            key={index}
            effect='blur'
            alt={`Image${index}`}
            src={image.urls.full} />)
          }
          else{                             // First image is giving 404 error
            return (<LazyLoadImage
              key={index}
              effect='blur'
              alt={`Image${index}`}
              src={imageList[5].urls.full} />)
          }
        }
      )}
    </div>
  )
}

export default ImageGallery