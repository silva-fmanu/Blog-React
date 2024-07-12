import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://api-fake-blog.onrender.com/postagens';

    const carregaApi = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    };

    carregaApi();
  }, []);

  return (
    <div>
      <div className="container">
        {posts.map((item, index) => {
          console.log(`Post ${index}:`, item); // index é a posição do post dentro do array que eu vou usar no lugar do id
          return (
            <div id="post_card" key={index}> 
              <img src={item.thumbImage} alt={item.thumbImageAltText} id="img" />
              <h3 id="titulo">{item.title}</h3>
              <p id="descricao">{item.description}</p>
              <p id="post_date">Publicado em: {item.postDate}</p>
              <Link id="btn" to={`/Blog-React/Postagem/${index}`}>Continue Lendo</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
