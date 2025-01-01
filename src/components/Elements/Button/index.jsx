const Button = (props) => {
  const { classname, type, children } = props;
  return (
    <>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
