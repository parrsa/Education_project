import { useState,useEffect,Fragment,Link } from '../../Static_import/Import';
import { Menu, Transition } from '@headlessui/react';
const ProductCategory = (props) => {
const {name}=props;
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }
  return (
    <div>
          <Menu
                    as="div"
                    className="relative w-full  rounded-3xl   inline-block text-right"
                  >
                    <div>
                      <Menu.Button dir='rtl' className="w-10/12 bg-white mt-2 rounded-xl  h-12">
                      <p className='text-right mr-10'>
                        فصل اول
                      </p>
                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100" 
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute w-full">
                        <div dir="rtl" className="py-1  text-right">
                          <Menu.Item>
                           {({ active }) => (
                              <Link to="/Login">
                                <div
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-10/12 px-4 py-2   text-sm border-b-2 border-dashed border-black"
                                  )}
                                >
                                {name}
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
    </div>
  )
}

export default ProductCategory