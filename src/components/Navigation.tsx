import { cssObj } from '@fuel-ui/css';
import { Box, ButtonLink } from '@fuel-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import GithubLogo from 'public/icons/github.svg';
import type { VersionSet } from '../types';
const ThemeToggler = dynamic(() => import('./ThemeToggler'), { ssr: false });

export function Navigation({ versionSet }: { versionSet: VersionSet }) {
  return (
    <Box.Stack direction='row' gap='$3'>
      <ButtonLink
        size='sm'
        href={'https://fueldevcn.xyz/'}
        intent='base'
        css={styles.navItem}
        isExternal
      >
        Fuel中文社区
      </ButtonLink>
      <ButtonLink
        size={'sm'}
        href='https://github.com/fueldev-xyz/docs-hub/'
        target='_blank'
      >
        <Image width={24} height={24} src={GithubLogo} alt='github' />
      </ButtonLink>
      {/* <VersionDropdown versionSet={versionSet} /> */}
      <ThemeToggler />
    </Box.Stack>
  );
}

const styles = {
  navItem: cssObj({
    display: 'none',
    '@sm': {
      display: 'flex',
    },
    '[aria-label*="Icon Link"]': {
      display: 'none',
    },
    '&:hover': {
      'html[class="fuel_light-theme"] &': {
        color: '#009957 !important',
        '.fuel_Icon': {
          color: '#009957 !important',
        },
      },
      'html[class="fuel_dark-theme"] &': {
        color: '$semanticLinkPrimaryColor !important',
        '.fuel_Icon': {
          color: '$semanticLinkPrimaryColor !important',
        },
      },

      textDecoration: 'none !important',
    },
  }),
};
