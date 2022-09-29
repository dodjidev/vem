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
        <div className='h-[300px] bg-gray-400 hidden p-5 mb-[100px]'>
            <h1 className='text-5xl font-smibold text-blue-500 text-center'>Des experts a vos service</h1>
        </div>
        <div className='grid mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-40 '>
        {
            services.map( (item , index) => (
                <div className='relative animate-[leftToRight_1.5s_ease-in-out] left-to-right  mx-3' key={index}>
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
