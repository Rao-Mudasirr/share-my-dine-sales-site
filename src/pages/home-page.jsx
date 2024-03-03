import { AffiliatedPartnersSection } from '../features/affiliated-partners-section/affiliated-partners-section';
import { BlogArticles } from '../features/blog-articles/blog-articles';
import { FaqsSection } from '../features/faqs-section/faqs-section';
import { ReciepiesSection } from '../features/reciepies-section/reciepies-section';
import { SuperSection1 } from '../features/super-section-1/super-section-1';
import { SuperSection } from '../features/super-section/super-section';
import { TalkToUsFormSection } from '../features/talk-to-us-form-section/talk-to-us-form-section';
import { TestimonialsSection } from '../features/testimonials-section/testimonials-section';
import { VeganMenuSection } from '../features/vegan-menu-section/vegan-menu-section';

export const HomePage = () => {
  return (
    <>
      <div className="home">
        <SuperSection1 />
        <AffiliatedPartnersSection />
        <VeganMenuSection/>
        <BlogArticles />
        <ReciepiesSection/>
        <FaqsSection />
        <TestimonialsSection />
        <TalkToUsFormSection /> 
      </div>
    </>
  )
}
