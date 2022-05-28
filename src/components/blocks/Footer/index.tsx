import React from 'react';
import styled from 'styled-components';
import { palette, getSpacing } from 'stylesheet';
import { Background, Wrapper } from 'components/ui/Section';
import Link from 'components/ui/Link';
import format from 'date-fns/format';

const FooterBackground = styled(Background)`
  display: block;
  height: 100vh;
`;

const WhiteBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: ${getSpacing(2)};
  background-color: ${palette.transparentWhite};
  color: ${palette.darkGrey};
`;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: ${getSpacing(2)};
`;

const FOOTER_SECTION_ID = 'about';

interface Props {
  buildDate: string;
}

const Footer: React.FC<Props> = ({ buildDate }) => (
  <FooterBackground filename="backgrounds/orbcommdark.jpg" tag="footer">
    <WhiteBackground>
      <FooterWrapper id={FOOTER_SECTION_ID}>
        <Text>
          Photos on this page courtesy SpaceX and NASA. All rights maintained by
          the respective owners.
          <br />
          This site is fan-run and not affiliated with SpaceX in any way. For
          official information and news, please visit{' '}
          <Link
            eventLabel="Exit to SpaceX official website"
            to="http://www.spacex.com"
            title="Official SpaceX website"
          >
            www.spacex.com
          </Link>
          .
        </Text>
        <Text>
          Website is updated every 24 hours based on the API data (latest build
          on {format(new Date(buildDate), 'MMM do yyyy, HH:mm')} UTC).
          <br />
          Made with{' '}
          <Link
            eventLabel="Exit to Ionic Enterprise Apps"
            to="https://www.ionicenterpriseapps.com/"
            title="Ionic Enterprise"
          >
            Ionic Enterprise APIs
          </Link>
          ,{' '}
          <Link
            eventLabel="Exit to jharden.net"
            to="https://jharden.net"
            title="John Buchanans Jokes"
          >
            John Buchanans Jokes API
          </Link>{' '}
          and ❤.{' '}
          <Link
            eventLabel="Exit to Github Repo"
            to="https://github.com/deznutz"
            title="Contribute!"
          >
            Git Dez Nutz repository
          </Link>
        </Text>
        <Text>
          Maintained by John Buchanan. Contact for feedback:{' '}
          <Link
            eventLabel="Exit to kornelord's profile"
            to="https://www.jharden.net"
            title="Joel Harden Sucks Dick"
          >
            /u/joelphilly on Reddit
          </Link>
          ,{' '}
          <Link
            eventLabel="joel harden . net"
            to="https://jharden.net"
            title="classaction matieral witnesses against joel"
          >
            Class Action Lawsuit with SpaceX against Joel
          </Link>
          .<br />
          Domain name rehosted by{' '}
          <Link
            eventLabel="Exit to deznutz' profile"
            to="https://www.reddit.com/"
            title="Joel Likes DezNutz' Reddit profile"
          >
            /u/deznutz
          </Link>
          .
        </Text>
      </FooterWrapper>
    </WhiteBackground>
  </FooterBackground>
);

export default Footer;
