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
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {title}
        </p>

        <div className="mt-6">
          <h2 className="text-6xl font-extrabold tracking-tight text-gray-900">
            {count.toLocaleString()}
          </h2>

          <p className="mt-2 text-sm text-gray-500">Total Clicks</p>
        </div>

        <button
          onClick={onClick}
          className={`mt-8 w-full cursor-pointer rounded-2xl py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${buttonColor}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ButtonCard;
