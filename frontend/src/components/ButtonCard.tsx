type ButtonCardProps = {
  title: string;
  count: number;
  buttonText: string;
  buttonColor: string;
  onClick: () => void;
};

const ButtonCard = ({
  title,
  count,
  buttonText,
  buttonColor,
  onClick,
}: ButtonCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
      <h2 className="text-center text-2xl font-bold">{title}</h2>

      <div className="mt-8 text-center">
        <p className="text-6xl font-extrabold">{count}</p>
        <p className="mt-2 text-gray-500">Total Clicks</p>
      </div>

      <button
        onClick={onClick}
        className={`mt-8 cursor-pointer w-full rounded-xl py-3 text-lg font-semibold text-white transition ${buttonColor}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonCard;
