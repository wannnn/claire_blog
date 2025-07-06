const CreatedDate = ({ date }: { date: string }) => {
  return <div className="text-xs text-gray-400 mb-6 italic">Last Update: {date}</div>;
};

export default CreatedDate;
