const MainComponent = () => {
    return(
        <div>
            <h1 className="flex justify-center py-10 font-marriweather text-5xl font-bold">
                History
            </h1>

            <div className="flex justify-center">
                <div className="flex gap-20 max-w-7xl w-full px-6 items-center">
                    <div className="flex flex-col max-w-xl gap-6">
                        <p>
                            El Daily Bugle es un medio de comunicación con sede en la ciudad de Nueva York, reconocido por su amplia cobertura de los acontecimientos urbanos y su influencia en la opinión pública. Fundado como un periódico impreso, el Bugle se posicionó rápidamente como una de las publicaciones de mayor circulación en la ciudad, destacándose por su enfoque directo y su línea editorial firme frente a los temas de interés social.
                        </p>
                        <p>
                            Durante gran parte de su historia, el medio estuvo dirigido por J. Jonah Jameson, editor en jefe cuya gestión definió el carácter del periódico. Bajo su liderazgo, el Daily Bugle adoptó una postura crítica frente a la actuación de los llamados “vigilantes enmascarados”, con especial énfasis en Spider-Man, a quien el medio ha señalado de manera reiterada como un factor de riesgo para la seguridad pública y el orden ciudadano.
                        </p>
                        <p>
                            El Daily Bugle desempeñó un papel central en la cobertura de incidentes relacionados con superhéroes, priorizando el análisis de sus consecuencias sociales, económicas y legales. A través de investigaciones, editoriales y reportajes de alto impacto, el periódico contribuyó a instalar el debate sobre los límites de la justicia individual y la responsabilidad de quienes actúan fuera de los marcos institucionales.
                        </p>
                        <p>
                            Con el avance de la tecnología y los cambios en los hábitos de consumo informativo, el Daily Bugle amplió su operación hacia formatos audiovisuales y digitales, consolidándose como un conglomerado mediático multiplataforma. Esta evolución permitió al medio mantener su relevancia en un entorno informativo cada vez más competitivo y fragmentado.
                        </p>
                    
                    </div>
                    <div className="max-w-md">
                        <img src="/daily.jpg" alt="edificio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent 