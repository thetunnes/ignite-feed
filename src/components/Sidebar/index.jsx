import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/80010883?v=4" />
        <strong>Tunnes Developer</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
      </footer>

    </aside>
  );
}
