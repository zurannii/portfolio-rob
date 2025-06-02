import "./styles.css";
interface IButtonProps {
  children: React.ReactNode;
  action: () => void;
  type: "primary" | "secondary";
}

export const Button = ({ children, type, action }: IButtonProps) => {
  const typeButton = type === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button onClick={action} className={typeButton}>
      {children}
    </button>
  );
};
