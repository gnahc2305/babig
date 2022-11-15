import React, { useEffect, useState } from "react";
import heart from "../assets/heart.png";
import hearts from "../assets/hearts.png";
import { motion } from "framer-motion";
import JSConfetti from "js-confetti";

function Welcome() {
  const [showModal, setShowModal] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const jsConfetti = new JSConfetti();

  function openModal() {
    setShowModal(true);
    jsConfetti.addConfetti();
  }

  function closeModal() {
    setShowModal(false);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  useEffect(() => {
    jsConfetti.addConfetti();
  }, [jsConfetti]);

  return (
    <div className="container">
      <h1>Feliz Cumpleaños!!!!</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="myBtn"
        onClick={openModal}
      >
        Clickeame
      </motion.button>

      <div
        id="myModal"
        className="modal"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Feliz dia baby!</h3>
          </div>

          <p>
            Te amo mas que nada en el mundo y espero que la pases muy bien
            hoy!!!!
          </p>
          <br />
          <p>
            Porfin hice la pagina babig y espero que te guste, la hice con mucho
            cariño y amor ♥ Te agradezco por siempre apoyarme y estar conmigo en
            las buenas y en las malas. Eres mi mundo entero y daria todo por ti,
            el tiempo se va a pasar volando y pronto volveremos a estar juntos
          </p>
          <br />
          <p>Mereces toda la felicidad del universo, te amo mi baby hermosa</p>

          <img src={hearts} alt="hearts" />
        </div>
      </div>

      <div className="custom-shape-divider-top-1668461604">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <img src={heart} alt="hearts" id="heart1" />
      <img src={heart} alt="hearts" id="heart2" />
    </div>
  );
}

export default Welcome;
