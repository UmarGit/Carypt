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
            description="Carypt is a blockchain-powered car rental platform that enables you to rent cars from ethereum holders. Carypt uses smart contracts to store vehicle data and records in a secure and transparent manner."
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
