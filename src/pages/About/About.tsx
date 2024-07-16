import React from 'react'

function About() {
    return (
        <div>
            <div>

                <section className="text-gray-800 py-10">
                    <div className="mx-auto flex flex-col justify-around lg:flex-row gap-8 max-w-screen-xl">
                        {/* Contact Information */}
                        <div className="max-w-2xl px-4 lg:pr-24">
                            <p className="mb-5 font-medium">Contact Information:</p>
                            <div className="mb-5 flex font-medium">
                                <div className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="mb-2">Phone: +1 (123) 456-7890</p>
                                    <span className="font-normal text-gray-600">For inquiries and support.</span>
                                </div>
                            </div>
                            <div className="mb-5 flex font-medium">
                                <div className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="mb-2">Email: contact@example.com</p>
                                    <span className="font-normal text-gray-600">Send us an email anytime.</span>
                                </div>
                            </div>
                            <div className="mb-5 flex font-medium">
                                <div className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="mb-2">Address: 123 Main St, City, Country</p>
                                    <span className="font-normal text-gray-600">Visit our office during business hours.</span>
                                </div>
                            </div>
                        </div>
                        {/* Google Maps iframe */}
                        <div className="relative w-full lg:w-96 h-72 lg:h-auto">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>









            <div>
                {/* Our Team Section */}
                <div>
                    <div className="mb-16">
                        <div className="container flex justify-center mx-auto pt-16">
                            <div>
                                {/* <p class="text-gray-500 text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p> */}
                                <h1 className="xl:text-4xl text-3xl pb-[20x] text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                                    The Talented People Behind the Scenes of the Organization
                                </h1>
                            </div>
                        </div>
                        <div className="w-full  px-10 pb-10 pt-[40px]">
                            <div className="container mx-auto">
                                <div
                                    role="list"
                                    aria-label="Behind the scenes People "
                                    className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                                >
                                    {/* <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      Andres Berlin
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      Chief Executive Officer
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      The CEO's role in raising a company's corporate IQ is to
                      establish an atmosphere that promotes knowledge sharing
                      and collaboration.
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                                    {/* <div
                role="listitem"
                class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                        alt="Display Picture of Silene Tokyo"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      Silene Tokyo
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      Product Design Head
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      The emphasis on innovation and technology in our companies
                      has resulted in a few of them establishing global
                      benchmarks in product design and development.
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                                    {/* <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                        alt="Display Picture of Johnson Stone"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      Johnson Stone
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                      Manager Development
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                      Our services encompass the assessment and repair of
                      property damage caused by water, fire, smoke, or mold. We
                      can also be a part of the restoration.
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-xl bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Display Picture of Dean Jones"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div class="px-6 mt-16">
                                                <h1 class="font-bold text-3xl text-center mb-1">
                                                    Dean Jones
                                                </h1>
                                                <p class="text-gray-800 text-sm text-center">
                                                    Director
                                                </p>
                                                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                                                    An avid who loves to be creative and
                                                    inventive.
                                                </p>
                                                <div class="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x="2"
                                                                    y="2"
                                                                    width="20"
                                                                    height="20"
                                                                    rx="5"
                                                                    ry="5"
                                                                ></rect>
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div class="rounded overflow-hidden shadow-md bg-white">
                                            <div class="absolute -mt-20 w-full flex justify-center">
                                                <div class="h-32 w-32">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Display Picture of Rachel Adams"
                                                        role="img"
                                                        class="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div class="px-6 mt-16">
                                                <h1 class="font-bold text-3xl text-center mb-1">
                                                    Rachel Adams
                                                </h1>
                                                <p class="text-gray-800 text-sm text-center">
                                                    Designer
                                                </p>
                                                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                                                    Product designer with interests in immersive computing and
                                                    XR, political ventures, and emerging technologies. Able to
                                                    take ideas and give them a life.
                                                </p>
                                                <div class="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x="2"
                                                                    y="2"
                                                                    width="20"
                                                                    height="20"
                                                                    rx="5"
                                                                    ry="5"
                                                                ></rect>
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div class="rounded overflow-hidden shadow-md bg-white">
                                            <div class="absolute -mt-20 w-full flex justify-center">
                                                <div class="h-32 w-32">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Display Picture of Charles Keith"
                                                        role="img"
                                                        class="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div class="px-6 mt-16">
                                                <h1 class="font-bold text-3xl text-center mb-1">
                                                    Charles Keith
                                                </h1>
                                                <p class="text-gray-800 text-sm text-center">Manager</p>
                                                <p class="text-center text-gray-600 text-base pt-3 font-normal">
                                                    A Manager is the voice of the customer. Our job is to
                                                    look beyond the business goals. We don't just experience
                                                    user interface but also questions it.
                                                </p>
                                                <div class="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" class="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x="2"
                                                                    y="2"
                                                                    width="20"
                                                                    height="20"
                                                                    rx="5"
                                                                    ry="5"
                                                                ></rect>
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="main__container pb-18 px-4">
                    <div className="about__company grid lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-0 items-center">
                        <div className="about__company__img">
                            <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/Fotolia_68431323_Subscription_Monthly_M-660x439.jpg" alt="Description of the image" />
                        </div>
                        <div className="about__company__content">
                            <h2 className="text-3xl font-bold leading-10 text-gray-900">Our Mission</h2>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Our mission at Elomus Shop is to inspire outdoor enthusiasts by providing top-quality camping gear and equipment. We aim to foster a community that embraces adventure and reconnects with nature. Through our curated selection of products, we strive to make every camping experience memorable and enjoyable. We are committed to sustainability, offering eco-friendly choices that minimize our environmental footprint. Our goal is to deliver exceptional customer service, ensuring each camper finds exactly what they need for their outdoor adventures. At Campers Shop, we believe in enhancing outdoor lifestyles and empowering customers to explore the beauty of nature comfortably and responsibly. Join us in our journey to equip and inspire campers worldwide, one adventure at a time.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default About