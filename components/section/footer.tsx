import { TextAnimation } from "../animations";

function Footer() {
  return (
    <>
      <div className="w-full h-[40vh] flex justify-center items-center">
        <TextAnimation>
          <p>© 2025 Chadrack Hermann. Tous droits réservés.</p>
        </TextAnimation>
        <TextAnimation>
          <span>Mes réseaux</span>
        </TextAnimation>
        <div className="flex justify-between items-center">
          <TextAnimation>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              LindedIn
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </TextAnimation>
        </div>
      </div>
    </>
  );
}

export default Footer;
