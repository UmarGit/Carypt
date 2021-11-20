import dynamic from 'next/dynamic';
const Seo = dynamic(() =>import('components/seo'), { ssr: false });
const Layout = dynamic(() =>import('components/layout'), { ssr: false });
const Banner = dynamic(() =>import('sections/banner'), { ssr: false });
const WhyChoose = dynamic(() =>import('sections/why-choose'), { ssr: false });
const SalesInvestment = dynamic(() =>import('sections/sales-investment'), { ssr: false });
const RoadMap = dynamic(() =>import('sections/roadmap'), { ssr: false });
const CountDownBlock = dynamic(() =>import('sections/countdown'), { ssr: false });
const WorldwideUsers = dynamic(() =>import('sections/worldwide-user'), { ssr: false });
const OurWallet = dynamic(() =>import('sections/our-wallet'), { ssr: false });
const CallToAction = dynamic(() =>import('sections/call-to-action'), { ssr: false });
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Seo
            title="Carypt"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />
          <Banner />
          <WhyChoose />
          <SalesInvestment />
          <RoadMap />
          <CountDownBlock />
          <WorldwideUsers />
          <OurWallet />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
