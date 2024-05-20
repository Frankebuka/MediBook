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
    borderRadius: "50%",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.08)",
    border: 0,
  },
  Check: {
    display: "block",
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

const Checkbox = ({ isChecked, onClick }) => {
  return (
    <div style={styles.Container} onClick={onClick}>
      {isChecked && <div style={styles.Check}>✓</div>}
      <input
        type="radio"
        style={styles.Input}
        required
        readOnly
        checked={isChecked}
      />
    </div>
  );
};

export default Checkbox;
