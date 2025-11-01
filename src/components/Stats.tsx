import React from "react";

interface StatItem {
  label: string;
  value: string;
}

const Stats: React.FC = () => {
  const data: StatItem[] = [
    { label: "Lives Impacted", value: "80,000+" },
    { label: "Projects Completed", value: "120+" },
    { label: "Volunteers", value: "350+" },
  ];

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "40px",
        flexWrap: "wrap",
      }}
    >
      {data.map((item) => (
        <div
          key={item.label}
          style={{
            background: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            minWidth: 180,
          }}
        >
          <h2 style={{ color: "var(--violet)" }}>{item.value}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
