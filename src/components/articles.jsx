import daily from '../assets/images/daly.webp'

const articles = ()  => {
    return(
        <div className='flex mt-10 gap-10'>
            <div className='flex flex-col gap-5'>

                <article class="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg">
                    <img src={daily} alt="articulo1" className="h-56 w-full object-cover" />
                    <div class="bg-white p-4 sm:p-6">

                        <a href="#">
                        <h3 class="mt-0.5 text-2xl text-gray-900">
                            How to position your furniture for positivity
                        </h3>
                       
                        </a>
                        <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>
                    </div>
                </article>


                <article class="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg">
                    <img src={daily} alt="articulo1" className="h-56 w-full object-cover" />
                    <div class="bg-white p-4 sm:p-6">

                        <a href="#">
                        <h3 class="mt-0.5 text-2xl text-gray-900">
                            How to position your furniture for positivity
                        </h3>
                        </a>
                        <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>
                    </div>
                </article>

            </div>


            <article class="font-marriweather text-center group flex flex-col gap-7"> 
                <div class="w-[770px] p-4 flex flex-col gap-5">
                    <a href="#">
                        <h3 class="text-5xl font-medium text-gray-900">Finding the Journey to Mordor</h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  
                    </p>
                </div>
                <img src={daily} className='h-130 w-full object-cover shadow-xl transition group-hover:grayscale-50' alt="articulo2" />
            </article>

            <div className='flex flex-col gap-5'>

                <article class="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg">
                    <img src={daily} alt="articulo1" className="h-56 w-full object-cover" />
                    <div class="bg-white p-4 sm:p-6">

                        <a href="#">
                        <h3 class="mt-0.5 text-2xl text-gray-900">
                            How to position your furniture for positivity
                        </h3>
                       
                        </a>
                        <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>
                    </div>
                </article>


                <article class="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg">
                    <img src={daily} alt="articulo1" className="h-56 w-full object-cover" />
                    <div class="bg-white p-4 sm:p-6">

                        <a href="#">
                        <h3 class="mt-0.5 text-2xl text-gray-900">
                            How to position your furniture for positivity
                        </h3>
                        </a>
                        <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>
                    </div>
                </article>

            </div>

        </div>
    )
}

export default articles 