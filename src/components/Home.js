import React from 'react'
import { Container } from 'react-bootstrap'
import BgImg from "../assets/img/01.png"
export const Home = () => {
    return (
        <>
           
            <div className='bgded overlay padtop' style={{ backgroundImage: `url(${BgImg})` ,height:"900px" }}>
                <div id="pageintro" className="hoc clear">
                    <article  className='heading-text'>
                        <h3 className="heading">Sustainable products</h3>
                        <p>Earthly provides Sustainable products at very affordable prices, Let's do good together</p>
                        <footer>
                            <ul className="nospace inline pushright">
                                <li><a className="btn btn-primary" href="#buy">Buy</a></li>
                                <li><a className="btn inverse" href="#product">About</a></li>
                            </ul>
                        </footer>
                    </article>
                </div>
            </div>
        </>

    )
}
{/* <div className="bgded overlay padtop" style="background-image:url('images/demo/backgrounds/01.png');"> 
  <header id="header" className="hoc clear">
  </header>
  <div id="pageintro" className="hoc clear"> 
    <article>
      <h3 className="heading">Suspendisse potenti</h3>
      <p>Arcu mi porttitor est non felis aliquam ullamcorper sed porttitor accumsan arcu maecenas lorem elit tristique quis iaculis at euismod vel arcu donec et lorem.</p>
      <footer>
        <ul className="nospace inline pushright">
          <li><a className="btn" href="#">Integer</a></li>
          <li><a className="btn inverse" href="#">Egestas</a></li>
        </ul>
      </footer>
    </article>
  </div>
</div> */}
