import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
function DetalhesPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let url = `https://api-fake-blog.onrender.com/postagem/${id}`;

    const carregaApi = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
          console.log(json);
          setPost(json);
        });
    };

    carregaApi();
  }, [id]);

  if (!post) return <div>Carregando...</div>;

  return (
    <div>
      <div id="individual_post_card">
        <h1 id="individual_titulo">{post.title}</h1>
        <img src={post.thumbImage} alt={post.thumbImageAltText} id="individual_img"/>
        <div id="texto">
          <p id="individual_descricao">{post.description}</p>
          <p id="autor">Por: {post.profileName}</p>
          <p id="individual_date">Publicado em: {post.postDate}</p>
        </div>
        <Link id="btn_individual" to="/Blog-React" >Lista de postagens</Link>
      </div>
    </div>
  );
}

export default DetalhesPost;
