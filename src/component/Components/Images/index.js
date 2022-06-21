import {forwardRef, useState} from 'react'
import image from '../../../image'
console.log(image.noImage);

const Image = forwardRef(({src, alt, ...props}, ref) => {
    const handleError = () => {
        setFallBack(image.noImage)
    }
    const [fallBack, setFallBack] = useState('')
    return <img 
        ref = {ref}
        {...props} 
        src= {fallBack || src} 
        alt= {alt}
        onError = {handleError}
    />
})

export default Image;