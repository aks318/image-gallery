import { Dialog, DialogContent } from '@mui/material';
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
    const [image , setImage] = useState()
    const [imageDialog , setImageDialog] = useState(false)

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
            src={image.urls.full}
            effect='blur'
            alt={`Image${index}`}
            onClick= {() => {
              setImage(image)
              setImageDialog(true)
            }}
            />)
          }
          else{                             // First image is giving 404 error
            return (<LazyLoadImage
              key={index}
              src={imageList[16].urls.full}
              effect='blur'
              alt={`Image${index}`}
              onClick= {() => {
                setImage(imageList[16])
                setImageDialog(true)
              }}
              />)
          }
        }
      )}
      <Dialog 
        open= {imageDialog}
        onClose= {() => setImageDialog(false)}
        className="image-dialog"
      >
          {image &&
            <LazyLoadImage
              src={image.urls.full} 
              effect='blur'
              alt='Image'
              style={{
                maxWidth: "100%",
                maxHeight: "calc(100vh - 64px)",
              }}
              />}
      </Dialog>
    </div>
  )
}

export default ImageGallery