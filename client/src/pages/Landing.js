import React from 'react'
import mainsvg from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from '../components'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div class="container page">
                <div class="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eius qui vero atque, eligendi suscipit ratione dicta, porro culpa sit quo quam nobis cupiditate adipisci magnam explicabo mollitia blanditiis quis?</p>
                    <button className='btn btn-hero'>Login / Register</button>
                </div>

                <img src={mainsvg} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}


export default Landing