function ContentFrame({ frameName, children }) {
  return (
    <div className="bg-secondary-dark w-[80%] mx-auto border-1 border-dark-green rounded-md shadow-lg flex flex-col gap-5 pb-5">
      <h1 className="text-center pt-5 font-bold text-ascent-green text-3xl uppercase tracking-wider">
        {frameName}
      </h1>
      <hr className="w-[90%] mx-auto text-dark-green" />

      {children}
    </div>
  );
}

export default ContentFrame;
