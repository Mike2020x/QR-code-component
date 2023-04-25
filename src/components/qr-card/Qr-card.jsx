import Qr from "./image-qr-code.png";

function QrCard() {
  return (
    <div className="qr-card">
      <img className="qr-card__img" src={Qr} alt="QR" />
      <h2 className="qr-card__description">
        Inprove your front-end skills by building projects
      </h2>
      <p className="qr-card__text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QrCard;
