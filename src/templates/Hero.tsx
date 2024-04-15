import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
              {'Купили авто из США и хотете знать с каким пробегом и в каком состоянии он был продан на аукционе?\n\n'}
            {/* <span className="text-primary-500">React developers</span> */}
          </>
        }
        description="Cleanmyvin – лучшая база данных проданных авто на Copart и IAAI.Покупали авто на аукционах Copart и IAAI? Хотите узнать историю авто и все технические подробности?"
        button={
          <Link href="/">
            <Button xl>ПРОВЕРИТЬ АВТО</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
