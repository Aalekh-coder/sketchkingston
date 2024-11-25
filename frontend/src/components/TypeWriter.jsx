import Typewriter from "typewriter-effect";

const TypeWriterTitle = () => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(Typewriter) => {
        Typewriter.typeString("Convert your video or voice into a blog post in second with the power of AI✨")
          .pauseFor(500)
          .deleteAll()
          .typeString("📝 AI-powered Insights.")
          .start();
      }}
    />
  );
};
export default TypeWriterTitle;