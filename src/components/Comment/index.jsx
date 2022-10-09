import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment({ content, onDeleteComment }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentArea}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 14:50h" dateTime="2022-05-11 14:50:01">
                Publicado há 1h
              </time>{" "}
            </div>

            <button title="Deletar comentário" onClick={() => onDeleteComment(content)}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
          Aplaudir <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
