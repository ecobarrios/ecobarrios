interface Props {
  imageUrl: string;
}

function BackgroundImageComponent({ imageUrl }: Props) {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Capa con degradado mostaza */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-transparent opacity-95">
        <div className="flex justify-start items-center z-50 h-full  max-w-[1400px] m-auto">
          <div className="flex flex-col">
            <h1 className="text-7xl font-light">El Programa </h1>
            <h1 className="text-7xl font-extrabold">Ecobarrios Santiago</h1>

            <div className="mt-3 flex flex-col justify-start w-[500px]">

            <p className="text-justify font-light text-[19px]">Es un programa hecho por <span className="font-bold">El Gobierno 
              de Santiago</span> que hace una invitación 
              abierta a todas y todos quienes sueñan con barrios más verdes
              resilientes y unidos.
            
            </p>

            <p className="text-justify font-light text-[19px]">Es un llamado a la acción para transformar nuestros espacios en comunidades
              donde la sostenibilidad y la participación ciudadana sean <span className="font-bold">la semilla del cambio</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundImageComponent;
