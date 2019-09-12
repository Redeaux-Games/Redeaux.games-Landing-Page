import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const Footer = () => {
  const { link } = useStaticQuery(getLink)

  return (
    <FooterGroup>
      <Text>
        Tweet "Design and code apps with React and Swift. New courses by @designcodeio"
      </Text>
      <Button>Tweet</Button>

      <LinkGroup>
        {
          link.edges.map(({ node }) => (
            <a key={node.url} href={node.url}>
              {node.title}
            </a>
          ))
        }
      </LinkGroup>
      
      <Copyright>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
        <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
      </Copyright>
    </FooterGroup>
  )
}

export default Footer


// query
const getLink = graphql`
  {
    link: allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          url
          title
          createdAt
        }
      }
    }
  }
`

// styles
const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

const LinkGroup = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  text-align: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
