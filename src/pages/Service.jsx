import React , {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { fetchServices, servicesList  } from '../features/services/serviceSlice'

export const ServicePage = () => {
  const services = useSelector(servicesList)
  const dispatch = useDispatch()
  useEffect( ()=> {
    dispatch(fetchServices())
  } , []) 

  return (
    <div>
        <div className=' flex justify-  mb-[100px] mt-[70px]'>
              <h1 className='text-4xl font-semibold text-white p-5 text-center bg-sky-500'>Nos differents services</h1>
          </div>
        <div className='grid mx-2 md:mx-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-40 '>
        {
            services.map( (item , index) => (
                <div className='relative animate-[leftToRight_1.5s_ease-in-out] left-to-right mx-1 ' key={index}>
                        <div className='mt-7   relative' >
                            <div className='flex items-center justify-center h-full w-full absolute bg-gray-600/50'>
                                <h1 className='text-white px-2 font-bold text-3xl'>{item.label}</h1>
                            </div>
                            <img src={item.bgImage} alt="" className='w-full object-cover h-[250px]'/>
                        </div>
                        <div className='mt-3  p-3 pl-0 md:ml-0'>
                            <p className='text-xl  capitalize my-5 leading-8 antialiased  text-slate-700 font-medium '>
                                {item.description}
                            </p>
                        </div>
                </div>
            ))
        }
        </div>
       
    </div>
  )
}
