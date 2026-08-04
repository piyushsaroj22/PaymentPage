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
    <div className="flex flex-col items-center rounded-xl border p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <p className="text-6xl font-bold">{count}</p>

      <p className="mb-8 mt-2 text-gray-500">Total Clicks</p>

      <button
        onClick={onClick}
        className={`w-full rounded-lg ${buttonColor} py-3 text-lg font-semibold text-white`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonCard;
