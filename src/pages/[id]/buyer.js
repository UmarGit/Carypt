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
          <Seo
            title="Carypt Buyer"
            description="Using carypt, buy the best car of your dream"
          />
          buyer
      </StickyProvider>
    </ThemeProvider>
  );
}
