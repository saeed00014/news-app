const Button = ({ text }: { text: string }) => {
  return (
    <button className="max-w-[160px] w-full py-[.4rem] text-[.9rem] hover:brightness-110 bg-grass text-ship">
      {text}
    </button>
  );
};

export default Button;
