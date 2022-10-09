
import { Header } from './components/Header'

import styles from "./App.module.css"

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://avatars.githubusercontent.com/u/80010883?v=4",
      name: "Tunnes",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento desenvolvido pela Rocketseat",
      },

      { type: "link", content: "jane.design/doctorcare" },

      // <a>#novoprojeto</a>{' '}
      // <a>#nlw</a>{' '}
      // <a>#rocketseat</a>
    ],
    publishedAt: new Date('2022-08-15 15:00:00')
  },
  {
    id: 2,
    author: {
      avatar: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento desenvolvido pela Rocketseat",
      },

      { type: "link", content: "jane.design/doctorcare" },

      // <a>#novoprojeto</a>{' '}
      // <a>#nlw</a>{' '}
      // <a>#rocketseat</a>
    ],
    publishedAt: new Date('2022-09-20 13:00:00')
  },
];

function App() {

  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { posts.map(post => (
          <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
        ))}
      </main>
    </div>
    </>
  )
}

export default App
