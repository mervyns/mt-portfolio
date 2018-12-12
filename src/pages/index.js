import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const data = this.props.data
    const imageOne = data.imageOne.childImageSharp.fluid
    const imageTwo = data.imageTwo.childImageSharp.fluid
    const imageThree = data.imageThree.childImageSharp.fluid
    const imageFour = data.imageFour.childImageSharp.fluid
    const imageFive = data.imageFive.childImageSharp.fluid

    const Portfolio = [
      {
        name: 'FitNest - An online community for fitness enthusiasts',
        subtitle: 'FitNest was a project that aimed to create a portal for fitness enthusiasts to organize events and plan the workouts. It is currently built on React, Redux and a Firebase database.',
        image: imageOne,
        color: '#ffd866',
        link: 'https://github.com/mervyns/fitnest'
      }, {
        name: 'friilii - P2P Insurance For Freelancers',
        subtitle: 'friilii was done as a Proof-Of-Concept Web Application as well as a personal project to learn and implement GraphQL in a web application. It has React on the Front-End and GraphQL and MongoDB for the Database.',
        image: imageTwo,
        color: '#dae0ef',
        link: 'https://github.com/mervyns/friilii'
      }, {
        name: 'Ready Up, Meet Up - RUMU',
        subtitle: 'RUMU was a group project done during the GA-WDI program. It is a web app that allows you to find a equidistant meeting point between group members. It is built with React on the Front-End and Ruby On Rails for the Back-End',
        image: imageThree,
        color: '#acd2ff',
        link: 'https://github.com/mervyns/project-3-rumu'
      }, {
        name: 'Snow White Laundry Room',
        subtitle: 'This was a project built for a laundromat that wanted to create a user portal for their users to keep themselves updated with promotions and activities. This was built using the MERN stack with a MongoDB database.',
        image: imageFour,
        color: '#ffdde1',
        link: 'https://snowwhitelaundryroom.herokuapp.com'
      }
    ]

    const Blog = [
      {
        title: 'How to create an animated logo with SVG and CSS animations',
        date: 'August 2018',
        link: 'https://blog.fullstackdigital.com/how-to-create-an-animated-logo-with-svg-and-css-animations-dbf0802a47a1'
      }, {
        title: 'Creating an animated dashed line background with SVG and CSS',
        date: 'July 2018',
        link: 'https://blog.fullstackdigital.com/creating-an-animated-dashed-line-background-with-svg-and-css-170f89f47000'
      }, {
        title: 'Revisiting My First Pen on CodePen',
        date: 'May 2018',
        link: 'https://codepen.io/kathykato/post/revisiting-my-first-pen-on-codepen'
      }, {
        title: 'Creating Pure CSS Images',
        date: 'January 2018',
        link: 'https://codepen.io/kathykato/post/creating-pure-css-images'
      }
    ]

    return (
      <Layout>
        <div className="container">
          <section className="grid" id="hero">
            <div className="column-xs-12">
              <h1 className="main-heading">I'm Mervyn Tan, a full-stack developer based in Singapore. I like to use tech as an enabler in our lives.</h1>
            </div>
          </section>
          <section className="grid" id="work">
          <div className="column-xs-12">
            <h2>Here is some of the work I've done.</h2>
          </div>
            {Portfolio.map(work => (
              <div className="column-xs-12 column-md-6">
                <a href={work.link} title={work.name} target="_blank" rel="noopener noreferrer">
                  <figure>
                    <Img className="portfolio-img" fluid={work.image} alt={work.name} backgroundColor={work.color} />
                    <figcaption>
                      <h3>{work.name}</h3>
                      <p>{work.subtitle}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </section>
          <section className="grid" id="about">
            <div className="column-xs-12">
              <h2>A Full-Stack Developer looking for growth opportunities to improve my technical abilities as well as broaden my learning in the field of software development. </h2>
            </div>
            <div className="column-xs-12 column-md-3">
              <h3>About Me</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <p>I am constantly staying on top of the emerging trends, applying industry best practices, and adapting to modern web technologies and programs. I have passion for self-learning and strive to improve and challenge my skills to become better at what I do.</p>
              <p>I am keen on areas such as the application of tech to create more efficient processes in our lives, or using tech to better understand ourselves in order to create positive changes.</p>
              <p>When I'm not coding, you can often find me running or cycling outdoors, or hunting down the best food in Singapore.</p>
            </div>
            {/* <div className="column-xs-12 column-md-3">
              <h3>Writing</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <div className="blog">
                {Blog.map(post => (
                  <div className="blog-post">
                    <a href={post.link} title={post.title} target="_blank" rel="noopener noreferrer">
                      <p className="date">{post.date}</p>
                      <h4>{post.title}</h4>
                      <span className="blog-link">Read more</span>
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: file(
      relativePath: { regex: "/portfolio-fitnest-02.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(
      relativePath: { regex: "/portfolio-friilii-02.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(
      relativePath: { regex: "/portfolio-rumu-01.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(
      relativePath: { regex: "/portfolio-swlr-01.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(
      relativePath: { regex: "/portfolio-rumu-01.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`