const Dividers = ({theme}) => {
    return(
        <span class="flex items-center mt-20 mb-10">
            <span class="shrink-0 pe-4 text-gray-900 text-5xl font-extrabold font-garamond">{theme}</span>
            <span class="h-px flex-1 bg-linear-to-l from-transparent to-gray-700"></span>
        </span>
    )
}

export default Dividers