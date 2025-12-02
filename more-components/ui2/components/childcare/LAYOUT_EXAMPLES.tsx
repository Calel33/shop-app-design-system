/**
 * Bubble Childcare Landing Page - Layout Examples
 * Different layout variations and component combinations
 */

import {
  BubbleHeader,
  BubbleHero,
  FeatureHighlights,
  ProgramsSection,
  PromiseSection,
  TestimonialsSection,
  VisitCTA,
  BubbleFooter,
} from './index';
import { Baby, GraduationCap, Shield, HeartHandshake, Rainbow } from 'lucide-react';

/**
 * Example 1: Header + Hero Only (Landing Page Above the Fold)
 */
export const HeaderHeroOnly = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader
      logoUrl="https://via.placeholder.com/140x40"
      navLinks={[
        { label: 'Home', href: '#' },
        { label: 'Programs', href: '#programs' },
        { label: 'Contact', href: '#contact' },
      ]}
    />
    <BubbleHero
      backgroundImage="https://via.placeholder.com/1920x1080"
      title="Welcome to Bubble Childcare"
      description="Quality care for your little ones in a nurturing environment."
    />
  </div>
);

/**
 * Example 2: Features + Programs Only (Services Page)
 */
export const FeaturesAndPrograms = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main className="pt-32">
      <FeatureHighlights
        features={[
          {
            icon: <Baby className="h-5 w-5" />,
            title: 'Small Group Care',
            description: 'Intentional ratios for personalized attention.',
          },
          {
            icon: <GraduationCap className="h-5 w-5" />,
            title: 'Play-Based Learning',
            description: 'Curiosity-led activities that build skills.',
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: 'Safety First',
            description: 'Secured entry and trained staff.',
          },
          {
            icon: <HeartHandshake className="h-5 w-5" />,
            title: 'Parent Partnership',
            description: 'Daily updates and open communication.',
          },
        ]}
      />
      <ProgramsSection
        programs={[
          {
            image: 'https://via.placeholder.com/800x600',
            imageAlt: 'Infant Care',
            ageRange: 'Ages 6 weeks-18 months',
            icon: <Rainbow className="h-3.5 w-3.5" />,
            title: 'Infant Care',
            description: 'Tender care for babies with attention to development.',
            link: '#',
          },
        ]}
      />
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 3: Testimonials + CTA (Conversion Page)
 */
export const TestimonialsAndCTA = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main className="pt-32">
      <TestimonialsSection
        testimonials={[
          {
            avatar: 'https://via.placeholder.com/100',
            avatarAlt: 'Parent',
            name: 'Sarah M.',
            role: 'Parent of 3-year-old',
            quote: 'The best childcare center we have found. Highly recommend!',
          },
          {
            avatar: 'https://via.placeholder.com/100',
            avatarAlt: 'Parent',
            name: 'John D.',
            role: 'Parent of 2-year-old',
            quote: 'Our child loves going to Bubble every day. Great staff!',
          },
          {
            avatar: 'https://via.placeholder.com/100',
            avatarAlt: 'Parent',
            name: 'Emily R.',
            role: 'Parent of 4-year-old',
            quote: 'Professional, caring, and excellent communication.',
          },
        ]}
      />
      <VisitCTA
        title="Ready to Visit?"
        description="Schedule a tour and see our facility."
        image="https://via.placeholder.com/800x600"
        imageAlt="Tour"
      />
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 4: Promise Section Standalone (About Page)
 */
export const PromiseSectionStandalone = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-nunito mb-6">
          About Bubble Childcare
        </h1>
        <p className="text-lg text-black/80 font-nunito mb-12 max-w-3xl">
          We are dedicated to providing exceptional childcare in a nurturing environment
          where children can grow, learn, and thrive.
        </p>
      </div>
      <PromiseSection
        title="Our Commitment to Excellence"
        description="Every day, we create an environment where children feel safe, valued, and excited to learn."
        benefits={[
          'Certified and experienced educators',
          'Low child-to-teacher ratios',
          'Nutritious meals and snacks',
          'Indoor and outdoor play spaces',
          'Regular parent communication',
        ]}
        stats={[
          { value: '15+', label: 'Years of experience' },
          { value: '98%', label: 'Parent satisfaction' },
          { value: '8:1', label: 'Child-to-teacher ratio' },
        ]}
        image="https://via.placeholder.com/800x600"
        imageAlt="Our facility"
      />
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 5: Custom Layout with Sections in Different Order
 */
export const CustomOrderLayout = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main>
      <BubbleHero
        backgroundImage="https://via.placeholder.com/1920x1080"
        title="Custom Layout Example"
        description="Sections can be arranged in any order."
      />
      {/* CTA First */}
      <VisitCTA
        title="Schedule Your Visit Today"
        description="Limited spots available for fall enrollment."
        image="https://via.placeholder.com/800x600"
        imageAlt="Visit"
        className="pt-20"
      />
      {/* Then Testimonials */}
      <TestimonialsSection
        testimonials={[
          {
            avatar: 'https://via.placeholder.com/100',
            avatarAlt: 'Parent',
            name: 'Alex P.',
            role: 'Parent',
            quote: 'Wonderful experience for our family.',
          },
        ]}
      />
      {/* Then Programs */}
      <ProgramsSection
        programs={[
          {
            image: 'https://via.placeholder.com/800x600',
            imageAlt: 'Program',
            ageRange: 'All ages',
            icon: <Baby className="h-3.5 w-3.5" />,
            title: 'Our Programs',
            description: 'Comprehensive care for all age groups.',
            link: '#',
          },
        ]}
      />
      {/* Finally Features */}
      <FeatureHighlights
        features={[
          {
            icon: <Shield className="h-5 w-5" />,
            title: 'Safe & Secure',
            description: 'Your child\'s safety is our priority.',
          },
        ]}
      />
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 6: Two-Column Layout with Sidebar
 */
export const TwoColumnLayout = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight font-nunito mb-6">
              Programs & Enrollment
            </h1>
            <ProgramsSection
              programs={[
                {
                  image: 'https://via.placeholder.com/800x600',
                  imageAlt: 'Program',
                  ageRange: 'Ages 0-5',
                  icon: <Baby className="h-3.5 w-3.5" />,
                  title: 'Full-Day Program',
                  description: 'Comprehensive care and education.',
                  link: '#',
                },
              ]}
              className="py-0"
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border p-6 border-black/10 bg-black/5">
                <h3 className="text-lg font-semibold font-nunito mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="font-nunito">
                    <strong>Phone:</strong> (555) 214-0199
                  </p>
                  <p className="font-nunito">
                    <strong>Email:</strong> hello@bubble.co
                  </p>
                  <p className="font-nunito">
                    <strong>Hours:</strong> 6am - 6pm
                  </p>
                </div>
                <a
                  href="#visit"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition bg-black text-neutral-100 hover:bg-black/90 font-nunito"
                >
                  Schedule Tour
                </a>
              </div>

              <div className="rounded-2xl border p-6 border-black/10 bg-black/5">
                <h3 className="text-lg font-semibold font-nunito mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-sm font-nunito">
                  <li>✓ Licensed & Accredited</li>
                  <li>✓ Experienced Staff</li>
                  <li>✓ Low Ratios</li>
                  <li>✓ Flexible Hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 7: Minimal Single Page
 */
export const MinimalSinglePage = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader
      logoUrl="https://via.placeholder.com/140x40"
      navLinks={[
        { label: 'Home', href: '#' },
        { label: 'Contact', href: '#contact' },
      ]}
    />
    <BubbleHero
      backgroundImage="https://via.placeholder.com/1920x1080"
      title="Quality Childcare"
      description="Nurturing environment for your children."
    />
    <VisitCTA
      title="Get in Touch"
      description="Contact us to learn more."
      image="https://via.placeholder.com/800x600"
      imageAlt="Contact"
    />
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

/**
 * Example 8: Full Page with All Sections
 */
export const FullPageLayout = () => (
  <div className="min-h-screen antialiased text-black bg-neutral-50 font-nunito">
    <BubbleHeader logoUrl="https://via.placeholder.com/140x40" />
    <main>
      <BubbleHero
        backgroundImage="https://via.placeholder.com/1920x1080"
        backgroundVideo="https://example.com/video.mp4"
        title="Complete Landing Page"
        description="All sections included in proper order."
      />
      <FeatureHighlights
        features={[
          {
            icon: <Baby className="h-5 w-5" />,
            title: 'Feature 1',
            description: 'Description 1',
          },
          {
            icon: <GraduationCap className="h-5 w-5" />,
            title: 'Feature 2',
            description: 'Description 2',
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: 'Feature 3',
            description: 'Description 3',
          },
          {
            icon: <HeartHandshake className="h-5 w-5" />,
            title: 'Feature 4',
            description: 'Description 4',
          },
        ]}
      />
      <ProgramsSection
        programs={[
          {
            image: 'https://via.placeholder.com/800x600',
            imageAlt: 'Program',
            ageRange: 'Ages 0-2',
            icon: <Baby className="h-3.5 w-3.5" />,
            title: 'Infant Care',
            description: 'Care for infants.',
            link: '#',
          },
        ]}
      />
      <PromiseSection
        title="Our Promise"
        description="We provide the best care."
        benefits={['Benefit 1', 'Benefit 2', 'Benefit 3']}
        stats={[
          { value: '10:1', label: 'Ratio' },
          { value: '100%', label: 'Certified' },
          { value: '24/7', label: 'Support' },
        ]}
        image="https://via.placeholder.com/800x600"
        imageAlt="Promise"
      />
      <TestimonialsSection
        testimonials={[
          {
            avatar: 'https://via.placeholder.com/100',
            avatarAlt: 'Parent',
            name: 'Parent Name',
            role: 'Parent',
            quote: 'Great childcare!',
          },
        ]}
      />
      <VisitCTA
        title="Visit Us"
        description="Schedule a tour."
        image="https://via.placeholder.com/800x600"
        imageAlt="Visit"
      />
    </main>
    <BubbleFooter logoUrl="https://via.placeholder.com/140x40" />
  </div>
);

export default {
  HeaderHeroOnly,
  FeaturesAndPrograms,
  TestimonialsAndCTA,
  PromiseSectionStandalone,
  CustomOrderLayout,
  TwoColumnLayout,
  MinimalSinglePage,
  FullPageLayout,
};
