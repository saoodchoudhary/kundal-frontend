import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure,  Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {  MinusIcon, PlusIcon,  } from '@heroicons/react/20/solid'
import {  NavLink,  useParams } from 'react-router-dom'
import CategoryListPage from '../pages/CategoryListPage'


// const filters = [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: false },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
   
// ]



const CategoryFilterComp = () => {
 const {id} = useParams();
    const [category, setCategory]= useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/getAllCategory'); // Replace with your backend route
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error('Error fetching order', error);
    }
  };

  fetchData();
},[id])
  return (
    <div className="bg-white">
    <div>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                 

                 
                    <Disclosure as="div"  className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{"category"}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              
                          {category.map((option, ind) => (
                                <div key={option._id} className="flex items-center">
                                   <NavLink to={`/product/category/${option.name}`}
                                  className={(id === option.name) ? 'text-blue-600' : ''} >
                                    {option.name}
                                  </NavLink>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
               
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="flex items-baseline justify-between border-b border-gray-200 pb-4 pt-4">

            <div></div>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </div> */}

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              

              
                <Disclosure as="div"  className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">Category</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                        {category.map((option, ind) => (
                                <div key={option._id} className="flex items-center">
                                    <NavLink to={`/product/category/${option.name}`}
                                  className={(id === option.name) ? 'text-blue-600' : ''} >
                                    {option.name}
                                  </NavLink>
                                </div>
                              ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3"> <CategoryListPage/></div>
          </div>
        </section>
      </main>
    </div>
  </div>
  )
}

export default CategoryFilterComp
