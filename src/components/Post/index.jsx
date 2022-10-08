import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/80010883?v=4" />
          <div className={styles.authorInfo}>
            <strong>Tunnes</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 14:50h" dateTime="2022-05-11 14:50:01">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.contentPost}>
        <p>Fala galeraa</p>

        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW Return, evento desenvolvido pela Rocketseat
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a>#novoprojeto</a>{' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário" />

        <footer><button type="submit">Publicar</button></footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
