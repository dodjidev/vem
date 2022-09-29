import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFormations, formationsList } from '../features/formations/formationSlice'

export const FormationPage = () => {
    const list =  useSelector(formationsList)
    

    const dispatch = useDispatch()
    useEffect( ()=> {
      dispatch(fetchFormations())
    } , []) 
    return (
      <div>
          <div className='h-[300px] bg-gray-400 hidden p-5 mb-[100px]'>
              <h1 className='text-5xl font-smibold text-blue-500 text-center'>Des experts a vos service</h1>
          </div>
          <div className='grid mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 gap-x-40 '>
          {
              list.map( (item , index) => (
                  <div className='shadow-lg relative animate-[bottomToTop_1.5s_ease-in-out] left-to-right  mx-3' key={index}>
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

                              {item?.Schools && (
                                <div className='my-4'>
                                  <strong className='block mb-2 '>Ecoles</strong>
                                  {
                                    item.Schools.map((school , index) => (
                                      <span className="bg-slate-100 text-slate-500 mr-2 px-2 rounded" key={index}>{school.label}</span>
                                    ))
                                  }
                                </div>
                              )}
                              {item?.Degrees && (
                                <div className='my-4'>
                                <strong className='block mb-2'>Diplomes</strong> 
                                {
                                    item.Degrees.map((degree , index) => (
                                      <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{degree.label}</span>
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
