import { cssObj } from '@fuel-ui/css';
// import { cssObj } from '@fuel-ui/css';
import {
  Box,
  Card as FuelCard,
  Link as FuelLink,
  Grid,
  Heading,
  Text,
} from '@fuel-ui/react';
import { styles as cardStyles } from './Card';

interface CardProps {
  heading: string;
  description: string;
  href: string;
  icon?: string;
}

function Card({ heading, description, href, icon }: CardProps) {
  return (
    <FuelLink href={href} css={styles.link}>
      <Grid.Item css={styles.gridItem}>
        <FuelCard css={cardStyles.card}>
          <FuelCard.Body>
            <Heading iconSize={24} leftIcon={icon} as='h4'>
              {heading}
            </Heading>
            <Text>{description}</Text>
          </FuelCard.Body>
        </FuelCard>
      </Grid.Item>
    </FuelLink>
  );
}

export function QuickstartCards() {
  return (
    <Box>
      <Grid css={styles.grid}>
        <Card
          heading={'智能合约开发者'}
          description={'在Sway中生成并部署一个智能合约。'}
          href={'/guides/contract-quickstart'}
          icon={'Script'}
        />

        <Card
          heading={'前端/全栈开发者'}
          description={'在Fuel上生成一个全栈计数器合约dapp。'}
          href={'/guides/frontend-quickstart'}
          icon={'BoxPadding'}
        />

        <Card
          heading={'节点操作员'}
          description={'开始在Fuel上运行一个节点。'}
          href={'/guides/running-a-node'}
          icon={'Broadcast'}
        />
      </Grid>
    </Box>
  );
}


const styles = {
  grid: cssObj({
    gap: '$6',
    margin: '$2 0 $8 0',
  }),
  gridItem: { ...cardStyles.root, cursor: 'pointer' },
  link: cssObj({
    '&:hover': {
      textDecoration: 'none !important',
    },
  }),
};
