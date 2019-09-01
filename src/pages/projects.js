import React from "react"
import styles from "./projects.module.css"
import Layout from "../components/layout"

import image1 from "../img/proj-css-colors.png"
import image2 from "../img/proj-figma-photo01.png"
import image3 from "../img/proj-superhero4hire-01-croplight.png"
import image4 from "../img/proj-laptopProject.jpg"
import image5 from "../img/proj-bookshelf.jpg"
import image6 from "../img/projectDesk.jpg"

/* const Project = props => (
    <div className={styles.project}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h3 className={styles.projectname}>{props.projectname}</h3>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  ) */

export default () => (
<Layout>
<br></br>
    <h1>What I've Done</h1>
    
    <h4>CSS Colors website - December 2018</h4>
    <div>
      <img
        src={image1}
        alt="xxx" />
      <p>A school project I did with a study buddie within our studies at Nackademin</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    <h4>Photographer mockup - January 2019</h4>
    <div>
      <img
        src={image2}
        alt="xxx" />
      <p>School project to make a full on working mockup of a website</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    <h4>Superhero 4 hire - February 2019</h4>
    <div>
      <img
        src={image3}
        alt="xxx" />
      <p>School project made with three other study buddies at Nackademin</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    <h4>Superhero 4 hire - February 2019</h4>
    <div>
      <img
        src={image4}
        alt="xxx" />
      <p>Coming soon...</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    <h4>Superhero 4 hire - February 2019</h4>
    <div>
      <img
        src={image5}
        alt="xxx" />
      <p>Coming soon...</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    <h4>Superhero 4 hire - February 2019</h4>
    <div>
      <img
        src={image6}
        alt="xxx" />
      <p>Coming soon...</p>
      <a href="#" target="_blank" class="visit-site-btn">View</a>
    </div>

    </Layout>
)

   {/*  <img
        src={image1}
        alt="Group of pandas eating bamboo"
      /> */}
   {/*  <Project
      projectname="CSS Colors website - December 2018"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="A school project I did with a study buddie within our studies at Nackademin"
    />
    <Project
      projectname="Photographer mockup - January 2019"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="School project to make a full on working mockup of a website"
    />
<Project
      projectname="Superhero 4 hire - February 2019"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="School project made with three other study buddies"
    />
    <Project
      projectname="Coming soon..."
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="2019 - More is coming..."
    /> */}
