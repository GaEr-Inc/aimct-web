import { Avatar, Center, Text, Title, Divider } from "@mantine/core";
import { Hero } from "./components/Hero";
import { FeaturesTitle } from "./components/Services";
function Landing() {
  return (
    <div>
      <Hero />
      <div
        style={{
          paddingLeft: "12rem",
          paddingRight: "12rem",
          paddingTop: "2rem"
        }}
      >
        {/* <Title
          style={{
            marginTop: "2rem",
            paddingLeft: "3rem",
            textAlign: "left",
            color: "#A7060C",
            fontFamily: "Raleway",
            fontSize: "35px",
            fontWeight: "1000",
          }}
        >
          Acerca de nosotros
        </Title>
        <Text
          style={{
            textAlign: "left",
            paddingLeft: "3rem",
            fontFamily: "Raleway",
            fontSize: "20px",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          Asesorías Integrales MCT S.A.S. es una empresa que presta servicios integrales especializados
          en contabilidad, brindando asesorías en temas financieros, jurídicos, tributarios y laborales.
          Ofrecemos un acompañamiento amplio y consultorias contables,
          financieras y tributarias, con un acompañamiento especializado en
          empresas Fondoemprender, siempre atentos...
        </Text> */}

        <Title
          style={{
            marginTop: "2rem",
            paddingLeft: "3rem",
            textAlign: "left",
            color: "#A7060C",
            fontFamily: "Raleway",
            fontSize: "35px",
          }}
        >
          Nuestros Servicios
        </Title>
          <FeaturesTitle/>
          <Divider my="sm" />
        <Title
          style={{
            marginTop: "1rem",
            paddingBottom: "3rem",
            paddingLeft: "3rem",
            paddingTop: "4rem",
            textAlign: "left",
            color: "#A7060C",
            fontFamily: "Raleway",
            fontSize: "35px",
          }}
        >
          Algunos de Nuestros Clientes
        </Title>
        <Center >
          <Avatar src={"src/assets/hefesto.png"} mx={"xs"} radius={"100%"} size={"8rem"}>
            AL
          </Avatar>
          <Avatar src={"src/assets/laspalmas.png"} mx={"xs"} radius={"0%"} size={"7rem"}>
            AL
          </Avatar><Avatar src={"src/assets/gescomert.png"} mx={"xs"} radius={"100%"} size={"10rem"}>
            AL
          </Avatar><Avatar src={"src/assets/gibraltar.png"} mx={"xs"} radius={"100%"} size={"9rem"}>
            AL
          </Avatar><Avatar src={"src/assets/greenfruit.png"} mx={"xs"} radius={"100%"} size={"10rem"}>
            AL
          </Avatar><Avatar src={"src/assets/cafelatostadora.png"} mx={"xs"} radius={"10%"} size={"6rem"}>
            AL
          </Avatar>
        </Center>
      </div>
    </div>
  );
}

export default Landing;
