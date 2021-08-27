    import Product from "./Product";
    import './Home.css'

    function Home (){

        return(
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                </div>

                <div className="home__row">
                    <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                    <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                </div>

                <div className="home__row">
                    <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="121314"
                        title="The Lean Start UP: How to content innovation"
                        price={11.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   />
                   
                </div>
            </div>
            
        )
    }

    export default Home;