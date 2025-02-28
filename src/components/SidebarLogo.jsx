import LogoTexto from "../assets/logo-texto.svg?react"; // ✅ Forza la conversión a componente

const SidebarLogo = () => (
  <div style={{ textAlign: "center"}}>
    <LogoTexto width="100%" fill="white" height/>
  </div>
);

export default SidebarLogo;
