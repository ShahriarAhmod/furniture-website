import React,{useState,useCallback,useEffect} from 'react'
import client from './client'
import Loading from './components/Loading'
import Home from './Home'

const App = () => {



    // product section 
  const [slide, setSlide] = useState([])
    const [isSliderLoading, setSliderLoading] = useState(false)
    const getSlideData = useCallback(async () => {
        setSliderLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'furnitureSlider' })
            const resposneData = response.items
            if (resposneData) {
                cleanupSlide(resposneData)
            } else {
                setSlide([])
            }
            setSliderLoading(false)
        } catch (error) {
            console.log(error);
            setSliderLoading(false)
        }
    }, [])
    // cleanup funtion 
    const cleanupSlide = useCallback(
        (rawData) => {
            const cleanSlide = rawData.map((slide) => {
                const { sys, fields } = slide
                const { id } = sys
                const sliderTitle = fields.sliderTitle
                const sliderSubtitle = fields.sliderSubtitle
                const price = fields.sliderPrice
                const slideImage = fields.sliderImage.fields.file.url
                const updateSlide = { id, sliderTitle, sliderSubtitle, price, slideImage }
                return updateSlide;
                // console.log(cleanSlide);
            })

            
        

        setSlide(cleanSlide)
      
          
        }, []
    )
  





    // product 

    const [product,setProduct]=useState([])

  const getProducts = useCallback(async () => {
    // setSliderLoading(true)
    try {
        const response = await client.getEntries({ content_type: 'furnitureProduct' })
        const resposneData = response.items
        if (resposneData) {
          cleanProductData(resposneData)
        } else {
            setProduct([])
        }
        // setSliderLoading(false)
    } catch (error) {
        console.log(error);
        // setSliderLoading(false)
    }
}, [])

const cleanProductData = useCallback(
  (productData) => {
      const cleanSlide = productData.map((pd) => {

        // console.log(pd);
          const { sys, fields } = pd
          const { id } = sys
          const productName = fields.productName
          const productPrice = fields.productPrice
      
          const productImage = fields.productImage.fields.file.url
          const updateProducts = { id, productName, productPrice, productImage }
        
          return updateProducts;
          // console.log(cleanSlide);
      })

      
  

  setProduct(cleanSlide)

    
  }, []
)



// console.log(product);


useEffect(() => {
    getSlideData()
    getProducts()

    // cleanupSlide()
}, [getSlideData, getProducts])

    // product 

    if (isSliderLoading) {
      return(

       <Loading/>
        )
    }
  return (
    <>
    <Home slide={slide} product={product}/>
  
    </>
  )
}

export default App
