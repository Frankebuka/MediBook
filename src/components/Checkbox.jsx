import React from "react";

const styles = {
  Container: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "20px",
    height: "20px",
    pointerEvents: "auto",
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(241, 5, 116, 1)",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.08)",
    border: 0,
  },
  Check: {
    display: "none",
    transition: "left 0.3s ease",
    zIndex: 1,
  },
  Input: {
    position: "absolute",
    opacity: 0,
    visibility: "hidden",
    width: "1px",
    height: "1px",
    pointerEvents: "none",
  },
};

const Checkbox = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={styles.Container} onClick={onClick}>
      <div
        style={{
          ...styles.Check,
          display: isChecked ? "block" : "none",
        }}
      >
        ✓
      </div>
      <input type="checkbox" style={styles.Input} />
    </div>
  );
};

export default Checkbox;
