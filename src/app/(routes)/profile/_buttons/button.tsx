const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-[160px] py-[.4rem] text-[.9rem] hover:brightness-110 bg-grass text-ship">
      {text}
    </button>
  );
};

export default Button;
