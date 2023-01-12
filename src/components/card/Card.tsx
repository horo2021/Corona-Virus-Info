import styles from "./card.module.scss";
import CountUp from "react-countup";
import { CardProps } from "../../services/types";
//each card represents one ofthe global stat information
const Card = ({ title, color, count }: CardProps) => {
  return (
    <div className={styles["card-container"]}>
      {/* used the inline style here only to handle a special as color */}
      <h2 style={{ borderBottomColor: color }}>{title}</h2>

      <CountUp className={styles["count-numbers"]} end={count} separator="," />
    </div>
  );
};

export default Card;
