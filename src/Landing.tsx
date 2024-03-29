import { Avatar, Center, Text, Title, Divider } from "@mantine/core";
import { Hero } from "./components/Hero";
import { FeaturesTitle } from "./components/Services";
import hefesto from "./assets/hefesto.png"
import laspalmas from "./assets/laspalmas.png"
import gescomert from "./assets/gescomert.png"
import gibraltar from "./assets/gibraltar.png"
import greenfruit from "./assets/greenfruit.png"
import cafelatostadora from "./assets/cafelatostadora.png"




function Landing() {
  return (
    <div>
      <Hero />
      <div
        style={{
          paddingLeft: "18rem",
          paddingRight: "18rem",
          paddingTop: "2rem"
        }}
      >
        <Title
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
          Acerca de Nosotros
        </Title>
        <Text
          style={{
            textAlign: "left",
            paddingLeft: "8rem",
            paddingRight: "7rem",
            fontFamily: "Raleway",
            fontSize: "20px",
            marginTop: "3rem",
            marginBottom: "5rem",
          }}
        >
          Somos una empresa especializada en brindar asesorías contables, 
          tributarias y jurídicas adaptadas a las necesidades de las pequeñas y medianas empresas.
          Nuestro enfoque está en brindar soluciones eficientes y personalizadas que impulsen el crecimiento
          y la rentabilidad de nuestros clientes empresariales.
        </Text>
        <Divider my="sm" />
        <Title
          style={{
            marginTop: "4rem",
            paddingLeft: "3rem",
            textAlign: "left",
            color: "#A7060C",
            fontFamily: "Raleway",
            fontSize: "35px",
          }}
        >
          Nuestros Servicios
        </Title>
        <FeaturesTitle />
        <Divider my="sm" />
        <Title
          style={{
            marginTop: "1rem",
            paddingBottom: "2rem",
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
        <Center style={{paddingBottom: "2rem"}}>
          <Avatar src={hefesto} mx={"xs"} radius={"100%"} size={"8rem"}>
            AL
          </Avatar>
          <Avatar src={laspalmas} mx={"xs"} radius={"0%"} size={"7rem"}>
            AL
          </Avatar><Avatar src={gescomert} mx={"xs"} radius={"100%"} size={"10rem"}>
            AL
          </Avatar><Avatar src={gibraltar} mx={"xs"} radius={"100%"} size={"9rem"}>
            AL
          </Avatar><Avatar src={greenfruit} mx={"xs"} radius={"100%"} size={"10rem"}>
            AL
          </Avatar><Avatar src={cafelatostadora} mx={"xs"} radius={"10%"} size={"6rem"}>
            AL
          </Avatar>
        </Center>
      </div>
    </div>
  );
}

export default Landing;
