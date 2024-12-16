import Typewriter from "typewriter-effect";

const TypeWriterTitle = () => {
  return (
    <Typewriter 
      options={{ loop: true }}
      
      onInit={(Typewriter) => {
        Typewriter.typeString("Convert your Image into a creative visual at✨")
          .pauseFor(500)
          .deleteAll()
          .typeString("Welcome to SketchKingston 💖")
          .start();
      }}
    />
  );
};
export default TypeWriterTitle;