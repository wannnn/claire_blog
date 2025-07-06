const SubTitle = ({ title }: { title: string }) => {
  return (
    <h2
      className="text-lg font-medium text-gray-900 mb-3 flex items-center"
      style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.32)" }}
    >
      <span
        style={{
          display: "inline-block",
          width: 4,
          height: 20,
          background: "#222",
          marginRight: 8,
          borderRadius: 2,
        }}
      />
      {title}
    </h2>
  );
};

export default SubTitle;
