import {
  createStyles,
  SimpleGrid,
  Text,
  rem,
  ThemeIcon,
  Grid,
} from "@mantine/core";
import {
  IconFlame,
  IconFileCode,
  IconBolt,
  IconTextCaption,
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
    icon: IconTextCaption,
    title: "Contabilidad financiera",
    description:
      "Registro y seguimiento de transacciones, preparación de estados financieros y análisis del estado financiero de la empresa.",
  },
  {
    icon: IconFileCode,
    title: "Planificación tributaria",
    description:
      "Desarrollo de estrategias para minimizar la carga tributaria legalmente, aprovechando las exenciones y deducciones fiscales disponibles.",
  },
  {
    icon: IconBolt,
    title: "Plataformas tecnológicas",
    description:
      "Implementación de soluciones informáticas desarrolladas en materia contable y/o administrativas para la integración de procesos con terceros.",
  },
  {
    icon: IconFlame,
    title: "Elaboración y presentación de declaraciones de impuestos",
    description:
      "Impuesto de renta, impuesto al valor agregado, retención en la fuente, entre otros.",
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <Grid justify="center" align="center" grow gutter={"xs"}>
        <Grid.Col span={1} order={1} style={{paddingLeft: "4rem"}}>
          <ThemeIcon
            size={50}
            radius="md"
            variant="gradient"
            gradient={{ deg: 133, from: '#A7060C', to: '#C64449' }}
          >
            <feature.icon size={rem(26)} stroke={1.5} />
          </ThemeIcon>
        </Grid.Col>
        <Grid.Col span={8} order={2}>
          <Text fz="xl" mt="sm" fw={500}>
            {feature.title}
          </Text>
          <Text c="dimmed" fz="lg">
            {feature.description}
          </Text>
        </Grid.Col>
      </Grid>
    </div>

  ));

  return (
    <div className={classes.wrapper} style={{paddingBottom: "3rem", paddingTop: "4rem"}}>
      <SimpleGrid
        cols={2}
        spacing={50}
        verticalSpacing={20}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {items}
      </SimpleGrid>
      <Text align="right"
        color="blue"
        style={{paddingTop: "2rem"}}
        size={18}
        td="underline"
        fw={600}
      >
        Conocer más  ...
      </Text>
    </div>
  );
}
