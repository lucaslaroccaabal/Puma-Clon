const Footer = () => {
  return (
    <footer className="bg-neutral-900 mt-5">
      <div className="py-10">
        <p className="text-slate-300 text-xl font-semibold py-1">
          Puma: calzado, accesorios y ropa deportiva
        </p>
        <p className="text-slate-300 text-sm py-1">
          Para la práctica de un deporte o el entrenamiento de cualquier
          disciplina, es importante contar con la ropa y el calzado adecuados.
          Estar cómodos y tener flexibilidad en los movimientos es fundamental
          para lograr los resultados esperados. En PUMA vas a conseguir todo lo
          que necesitás para tus próximos retos.
        </p>
        <p className="text-slate-300 text-sm py-1">
          La ropa deportiva más glamorosa la podés comprar en PUMA Argentina.
          Contamos con líneas exclusivas con las últimas tendencias, donde el
          diseño, el color y la versatilidad brindan lo que el cuerpo precisa
          para superarse a sí mismo.
        </p>
        <p className="text-slate-300 text-sm py-1">
          En cuanto al calzado, también contás con lo último. Optá por modelos
          con la tecnología más novedosa que aportan comodidad, flexibilidad y
          amortiguación. De esta forma, cada paso tuyo dejará huella.
        </p>
        <p className="text-slate-300 text-sm py-1">
          También podés comprar los accesorios deportivos más adecuados para tu
          actividad, desde mochilas, bolsos, riñoneras, gorras, brazaletes. Solo
          queda que elijas cuál es el más adecuado para vos.
        </p>
        <p className="text-slate-300 text-sm py-1">
          Navegá nuestro sitio y llevate todo lo que necesitás de PUMA para
          estar equipado. Afrontá tu actividad deportiva favorita junto con los
          mejores complementos y que nada te detenga.{" "}
        </p>
      </div>
      <div className="flex justify-between p-10">
        <button className="text-slate-300 text-sm py-1 border-2 border-slate-300 px-12 flex gap-2">
          <img
            src="https://ar.puma.com/media/country_flag/default/Flag-Argentina_resized.jpg"
            alt="Arg flag"
          />
          Argentina
        </button>
        <span className="text-slate-300 text-sm py-1">
          © PUMA Todos los derechos reservados, 2024
        </span>
        <span className="text-slate-300 text-sm py-1">
          Términos y condiciones
        </span>
      </div>
    </footer>
  );
};
export default Footer;
