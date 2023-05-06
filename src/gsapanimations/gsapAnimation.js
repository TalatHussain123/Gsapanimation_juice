import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { Expo, gsap, Power3 } from 'gsap';
import img1 from '../img/juice.png';
import img2 from '../img/leaf01.png';
import img3 from '../img/leaf02.png';
import img4 from '../img/leaf03.png';
import img5 from '../img/leaf04.png';
import img6 from '../img/leaf05.png';
import './style.css';

function GsapAnimation() {

    useEffect(() => {
        const scene = document.getElementById('scene');
        const parallax = new Parallax(scene);

        gsap.from(".logo", {
            duration: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        //Animate juice
        gsap.from('.juice', {
            duration: 1.5,
            opacity: 0,
            scale: 0.5,
            ease: Expo.easeOut,
        });

        //Leaves animation one by one
        gsap.from(".leaves .layer:nth-child(1)", {
            duration: 2,
            delay: 2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut,
        });

        gsap.from(".leaves .layer:nth-child(2)", {
            duration: 2,
            delay: 2.1,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut,
        });

        gsap.from(".leaves .layer:nth-child(3)", {
            duration: 2,
            delay: 2.2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut,
        });

        gsap.from(".leaves .layer:nth-child(4)", {
            duration: 2,
            delay: 2.3,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut,
        });


        gsap.from(".leaves .layer:nth-child(5)", {
            duration: 2,
            delay: 2.5,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut,
        });


        //Animation of navbar
        gsap.from(
            ".menu-links ul li", {
            duration: 1,
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut,
            stagger: 0.08
        });

        // Animate the leaves
        gsap.from('.leaves .layer', {
            duration: 1.5,
            opacity: 0,
            y: 100,
            ease: Expo.easeOut,
            stagger: 0.2
        });

        gsap.from(".title", {
            duration: 1,
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut,
        });

        gsap.from(".tagline", {
            duration: 1,
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut,
        });

        gsap.from(".pages", {
            duration: 1,
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut,
        });

        gsap.from(".desc", {
            duration: 1,
            delay: 1.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        return () => {
            parallax.disable();
        };

    }, []);
    return (
        <div className="wrapper">
            <div className="nav">
                <div className="logo">Clean Juice</div>

                <div className="menu-links">
                    <ul>
                        <li>locations</li>
                        <li>our menu</li>
                        <li>our story</li>
                        <li>meet our teem</li>
                        <li>own a clean juice</li>
                        <li>contact us</li>
                    </ul>
                </div>

                <div className="search"><i className="fa fa-search"></i></div>

                <div className="account">my account</div>

                <div className="cart"><i className="i fa fa-shopping-cart"></i></div>
            </div>

            <div className="content">
                <div className="tagline">Find your clean juice</div>

                <div className="pages"><span>2</span>/21</div>

                <div className="title">orange</div>

                <div className="more"><a href="#vv">show all the juices</a></div>

                <div className="desc">
                    <p>
                        Your <span>healthy</span> life <br />
                        starts here with us
                    </p>
                    <p>
                        A family owned company founded with the purpose of giving your family access to clean, organic products while
                        you are on the go.
                    </p>
                </div>
            </div>

            <div className="juice">
                <img src={img1} alt="" />
            </div>

            <div className="leaves">
                <ul id="scene">
                    <li className="layer" data-depth="-.1">
                        <img src={img2} alt="" />
                    </li>
                    <li className="layer" data-depth="-.3">
                        <img src={img3} alt="" />
                    </li>
                    <li className="layer" data-depth="-1.5">
                        <img src={img4} alt="" />
                    </li>
                    <li className="layer" data-depth=".1">
                        <img src={img5} alt="" />
                    </li>
                    <li className="layer" data-depth=".3">
                        <img src={img6} alt="" />
                    </li>
                </ul>
            </div>

            <div className="arrows">
                <button className="prev"><i className="fa fa-chevron-left"></i></button>
                <button className="next"><i className="fa fa-chevron-right"></i></button>
            </div>


        </div>
    )
}

export default GsapAnimation
