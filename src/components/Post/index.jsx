import { useCallback, useEffect, useMemo, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  //Usar INTL é a forma bruta de manipular números no JS, para datas algumas libs fazem isso melhor.
  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit"
  // }).format(publishedAt)

  const [comments, setComments] = useState(["Que legal o seu Post, parabéns!"]);

  const [newCommentText, setNewCommentText] = useState("");
  const [toDeleteComment, setToDeleteComment] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' MMMM 'às' H:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment(comment) {
    const toDeleteComment = prev.filter((comm) => comm !== comment);
    setComments(toDeleteComment);
  }

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments((prev) => [...prev, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('O campo comentário deve ser preenchido.')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.contentPost}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                {" "}
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
