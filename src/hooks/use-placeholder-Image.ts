import { useStaticQuery, graphql } from "gatsby"

export const usePlaceHolderImage= () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return data.placeholderImage.childImageSharp.fluid;
}