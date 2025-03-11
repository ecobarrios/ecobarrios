interface Props {
    imageUrl: string
  }
  
  function BackgroundImageComponent({ imageUrl }: Props) {
    return (
      <section
        className=" h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Capa con degradado mostaza */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-transparent opacity-80"></div>
      </section>
    )
  }
  
  export default BackgroundImageComponent