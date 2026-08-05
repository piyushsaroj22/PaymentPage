interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  let classes =
    "inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-semibold";

  switch (status) {
    case "SUCCESS":
      classes += " bg-green-100 text-green-700";
      break;

    case "FAILED":
      classes += " bg-red-100 text-red-700";
      break;

    // case "CREATED":
    //   classes += " bg-yellow-100 text-yellow-700";
    //   break; // TODO

    case "PENDING":
      classes += " bg-yellow-100 text-yellow-700 animate-pulse";
      break;

    default:
      classes += " bg-gray-100 text-gray-700";
  }

  return <span className={classes}>{status}</span>;
};

export default StatusBadge;
