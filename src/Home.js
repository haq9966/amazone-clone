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
                        id="111254"
                        title="Funding Your Startup: And Other Nightmares"
                        price={9.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51dX3GkN-UL._SX310_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="968547"
                        title="Before You Start Up: How to Prepare to Make Your Startup Dream a Reality"
                        price={7.9}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51cnUtjC5lS._SX460_BO1,204,203,200_.jpg"
                   />
                </div>

                <div className="home__row">
                    <Product
                        id="741741"
                        title="Entrepreneur 5 P.M. to 9 A.M.: Launching a Profitable Start-Up without Quitting Your Job"
                        price={12.9}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41MKkGXrYiL._SX311_BO1,204,203,200_.jpg"
                   />
                   <Product
                        id="541236"
                        title="Syanka Big Whiskey Glasses Set of 4, Clear, 360 ml, Drinking Whisky Glass"
                        price={16.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/614N002qb4L._SL1000_.jpg"
                   />
                   <Product
                        id="852546"
                        title=" Sony WH-1000XM3 Wireless Industry Leading Noise Cancellation Headphones with Touch Sensor (Black)"
                        price={329.50}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61E7rI4lJuL._SL1500_.jpg"
                   />
                    <Product
                        id="245193"
                        title="Van Heusen Men's Cotton Face Mask (Pack of 4)"
                        price={7.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41Bd7RHQQHL._UL1000_.jpg"
                   />
                </div>

                <div className="home__row">
                    <Product
                        id="278453"
                        title="Xbox One Wireless Controller - Phantom Magenta Special Edition"
                        price={98.25}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71NW2LibZzL._SL1500_.jpg"
                   />
                   <Product
                        id="963258"
                        title="Fox Micro®PS4 Pro Console Camo Army Skin Decal Vinal Sticker"
                        price={7.5}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/818FzgAqiaL._SL1500_.jpg"
                   />
                   
                </div>
            </div>
            
        )
    }

    export default Home;