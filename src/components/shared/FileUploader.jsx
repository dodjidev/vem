import React, { useRef, useState } from 'react'
import { CloudUploadOutline as ChooseIcon} from 'react-ionicons'
export const FileUploader = (props) => {
  let [image , setImage] = useState(props.defaultImage || '')

  let imageInput = useRef()
  const {onFinished , alt} = props

  const chooseImage = ()=>{
     imageInput.current.click()
  }

  const onImageSelected = ()=> {
       let reader = new FileReader();
       reader.onload = function(){
              setImage(reader.result);

              (typeof onFinished == "function") && onFinished(reader.result)
       }
       reader.readAsDataURL(imageInput.current.files[0])
  }
  
  return (
    <div>
        <div className='bg-gray-50 h-[200px] flex items-center justify-center' onClick={chooseImage}>
            <input onChange={onImageSelected} ref={imageInput} className='hidden'  type="file" accept="image/*"/>
             {image ? <img src={image} alt={alt} className="h-full w-full object-contain"/> :  <ChooseIcon />}
        </div>
    </div>
  )
}
