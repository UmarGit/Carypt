import dynamic from 'next/dynamic';
const Seo = dynamic(() =>import('components/seo'), { ssr: false });
const Layout = dynamic(() =>import('components/layout'), { ssr: false });
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Seo
            title="Carypt Seller"
            description="Using carypt, sell your car in best price"
          />
          Seller
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
