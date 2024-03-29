import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

import SecretaryIMG from '../assets/secretary.jpg';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `url(${SecretaryIMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 7)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.2)`,
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .68) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Asesorías Integrales MCT</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Acompañamiento  especializado para tu empresa.
        </Text>

        <Button variant="gradient" gradient={{ from: '#A7060C', to: '#C64449', deg: -135 }} size="lg" radius="xl" className={classes.control}>
          Leer más
        </Button>
      </Container>
    </div>
  );
}