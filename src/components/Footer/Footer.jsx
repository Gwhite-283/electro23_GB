import "./Footer.css";



// Importa los iconos de marcas que desees utilizar en tu footer


export const Footer = () => {
    return (
        <div className="footer-container max-width-container">
            <footer className="site-footer">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About us</h6>
                            <p className="text-justify">At EvoPlus, we are dedicated to bringing you the latest technology at your fingertips. We are an online store committed to offering a selection of cutting-edge mobile phones and electronic products.

                                Our goal is to provide you with an exceptional shopping experience by offering high-quality devices and accessories.

                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">

                                <li><a href="">Comprar</a></li>

                                <li><a href="">Resolucion de problemas</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">Ayuda</a></li>
                                <li><a href="">Contactanos</a></li>

                                <li><a href="">Mas informacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright &copy; 2023 All Rights Reserved by{' '}
                                <a href="#">EVOPLUS - By Jose Alberto Cordoba</a>.
                            </p>
                        </div>


                    </div>
                </div>
            </footer>
        </div>

    );
};
