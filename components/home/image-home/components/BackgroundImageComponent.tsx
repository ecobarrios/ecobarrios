interface Props {
  imageUrl: string;
}

function BackgroundImageComponent({ imageUrl }: Props) {
  return (
    <section
      id="home"
      className="h-[50vh] md:h-screen bg-cover bg-fixed md:bg-cover md:bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Capa con degradado mostaza */}
        <div className="flex justify-start items-center z-50 h-full  max-w-[1400px] m-auto">
          <div className="flex flex-col p-2 pt-5 md:pt-2 md:p-0 mt-20 md:mt-5">
            <h1 className="text-2xl md:text-5xl font-light text-white">
              El Programa
            </h1>
            <h1 className="text-2xl md:text-5xl font-extrabold text-secondary-cream">
              Ecobarrios Santiago
            </h1>

            <div className="mt-3 flex flex-col justify-start md:w-[500px]">
              <p className="text-secondary-cream text-justify font-light text-sm md:text-[18px]">
                Es un programa hecho por{" "}
                <span className="font-bold">El Gobierno de Santiago</span> que
                hace una invitación abierta a todas y todos quienes sueñan con
                barrios más verdes resilientes y unidos.
              </p>

              <p className=" text-white text-justify font-light text-sm md:text-[18px]">
                Es un llamado a la acción para transformar nuestros espacios en
                comunidades donde la sostenibilidad y la participación ciudadana
                sean <span className="font-bold">la semilla del cambio</span>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default BackgroundImageComponent;
