import {
  createStyles,
  SimpleGrid,
  Text,
  rem,
  ThemeIcon,
  Grid,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    justifyContent: "left",
    marginLeft: "1.5rem",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconReceiptOff,
    title: "Servicios Contables y tributarios.",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "Asesorías Jurídicas",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: IconCircleDotted,
    title: "Acompañamiento especializado en proyectos Fondoemprender.",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: IconFlame,
    title: "Asesorías SG-SST",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <Grid justify="center" align="center">
        <Grid.Col span={1} order={1}>
          <ThemeIcon
            size={44}
            radius="md"
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
          >
            <feature.icon size={rem(26)} stroke={1.5} />
          </ThemeIcon>
        </Grid.Col>
        <Grid.Col span={7} order={2}>
          <Text fz="lg" mt="sm" fw={500}>
            {feature.title}
          </Text>
          <Text c="dimmed" fz="sm">
            {feature.description}
          </Text>
        </Grid.Col>
      </Grid>
    </div>

  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={0}
        verticalSpacing={20}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {items}
      </SimpleGrid>
      <Text align="right"
        color="blue"
        size={18}
        td="underline"
        fw={600}
      >
        Conocer Más  ...
      </Text>
    </div>
  );
}
