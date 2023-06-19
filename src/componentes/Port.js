import React, { useState, useEffect } from "react";
import './css/Port.css';

const Port = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/KaioTorrers19');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Erro ao obter dados do GitHub:', response.status);
        }
      } catch (error) {
        console.error('Erro ao obter dados do GitHub:', error);
      }
    };

    fetchData();
  }, []);

  const handleGitHubButtonClick = () => {
    window.open(userData.html_url, "https://github.com/KaioTorrers19");
  };

  return (
    <div>
      {userData && (
        <div className="project">
          <h1>GitHub</h1>
          <img src={userData.avatar_url} alt="Foto do perfil" />
          <div className="project-description">
            <h1>{userData.name}</h1>
            <p>
              <b>Repositório:</b> {userData.public_repos}
            </p>
          </div>
          <div className="Botao">
            <button onClick={handleGitHubButtonClick}>GitHub</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Port;
