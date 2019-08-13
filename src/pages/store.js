import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./store.css";

const Store = () => {
  // const { allMarkdownRemark: data } = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { layout: { eq: "product" } } }
  //     ) {
  //       nodes {
  //         frontmatter {
  //           images {
  //             mainimage
  //           }
  //           price
  //           sale
  //           title
  //           path
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <p>Store</p>
    </>
    // <Layout>
    //   <SEO title="Store" />
    //   <div className="container">
    //     <section class="product-grid">
    //       {data.nodes.map(({ frontmatter }) => {
    //         return (
    //           <div className="product" key={frontmatter.title}>
    //             {frontmatter.images && frontmatter.images.mainimage && (
    //               <Link to={frontmatter.path}>
    //                 <img src={frontmatter.images.mainimage} alt="" />
    //               </Link>
    //             )}
    //             <h2>
    //               <Link to={frontmatter.path}>{frontmatter.title}</Link>
    //             </h2>
    //             <p>{frontmatter.date}</p>
    //             <p>&pound;{frontmatter.price.toFixed(2)}</p>
    //           </div>
    //         );
    //       })}
    //     </section>
    //   </div>
    // </Layout>
  );
};

export default Store;
