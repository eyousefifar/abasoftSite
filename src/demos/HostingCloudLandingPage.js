import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";

export default () => {
  return (
    
    <AnimationRevealPage>
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <MainFeature
        subheading="Reliable"
        heading="Cross Platform"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
        description={
          "At ABA SOFT, we focus on cross platform software. With power of javascript and it's frameworks, sharing skills between developers has been made easy. we create a collaborative workspace with focus of solving problems."
        }
      />
      <MainFeature
        subheading="Secure"
        heading="Problem Solving Approach"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
        description={
          "To have an excellent solution, Developers need to provide well thought ways to solve the problems. Developers are problem solvers equipped with Programming tools to write solutions for them."
        }
      />
      {/* <Testimonial /> */}
      {/* <FAQ /> */}
      <Footer />
    </AnimationRevealPage>
    
  );
};


// We focus on problems at hand. every developer will solve problems, they can put their thoughts into product and release it to public. At ABA SOFT, programmers are problem solvers, not a transforming specifications to code machine