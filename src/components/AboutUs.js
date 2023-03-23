import React from "react";

export default function AboutUs() {
  return (
    <div className="about-us" id="about-us">
      <div className="content-container">
        <h2>About us</h2>

        <p className="about-us__description">
          Soulbot nasce dall'entusiasmo di German, full-stack developer che dal
          2013 coltiva la sua Chocosfera, una community basata su un nuovo
          modello deFi incentrato sull'adozione di piante di cacao. Questa idea
          lo ha portato alla realizzazione di Soulbot, un tool che ora viene
          proposto come white label utilizzabile da qualsiasi community.
        </p>

        <div className="about-us__team-container">
          {allOfUs.map((el, i) => (
            <div key={i} className="team-member">
              <img src={el.img} alt="team-member"></img>
              <p className="team-member__name">{el.name}</p>
              <p className="team-member__position">{el.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const allOfUs = [
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Germano",
    position: "Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Laurencio",
    position: "Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Garcia",
    position: "Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Karlotto",
    position: "Developer",
  },
];
