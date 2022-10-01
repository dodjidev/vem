import React , { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { degreesList, fetchDegrees } from '../features/degrees/degreeSlice'


export const DegreePage = () => {
    const list =  useSelector(degreesList)

    const dispatch = useDispatch()
    useEffect( ()=> {
      dispatch(fetchDegrees())
    } , []) 
    
    return (
      <div>
           <div className=' flex justify-end mb-[100px]'>
              <h1 className='text-4xl font-semibold text-white p-5 text-center bg-sky-500'>Nos diplomes</h1>
          </div>
          <div className='grid mx-1 md:mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-40 '>
          {
              list.map( (item , index) => (
                  <div className='infos-element shadow-lg relative animate-[bottomToTop_1.5s_ease-in-out] left-to-right  mx-1' key={index}>
                          <div className='relative' >
                              <div className='flex items-center justify-center h-full w-full absolute bg-gray-600/50'>
                                  <h1 className='text-white px-2 font-bold text-5xl'>{item.label}</h1>
                              </div>
                              <img src={item.bgImage}  alt="" className='w-full object-cover h-[250px]'/>
                          </div>
                          <div className='mt-3  p-3  md:ml-0'>
                              <p className='text-xl border-b pb-3 capitalize my-5 leading-8 antialiased  text-slate-700 font-medium '>
                                  {item.description}
                              </p>
                              {item?.Formation && (
                                <div className='my-4'>
                                <strong className='block mb-2'>Formation</strong> 
                                <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{item.Formation.label}</span>
                                
                                </div>
                              )}
                              {item?.Schools && (
                                <div className='my-4'>
                                <strong className='block mb-2'>Ecoles</strong> 
                                {
                                    item.Schools.map((school , index) => (
                                      <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{school.label}</span>
                                    ))
                                  }
                                </div>
                              )}
                          </div>
                  </div>
              ))
          }
          </div>
        
      </div>
    )
}
