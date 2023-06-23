import { Image, Text, Title, Divider, SimpleGrid } from "@mantine/core";
import image1 from "./assets/Images_gallery/1.jpeg"
import image2 from "./assets/Images_gallery/2.jpeg"
import image3 from "./assets/Images_gallery/3.jpeg"
import image4 from "./assets/Images_gallery/4.jpeg"

function Aboutus() {
    return (
        <div
            style={{
                paddingLeft: "18rem",
                paddingRight: "18rem",
                paddingTop: "2rem"
            }}
        >
            <Title
                style={{
                    marginTop: "6rem",
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
                    marginBottom: "1rem",
                }}
            >
                Somos una empresa especializada en brindar asesorías contables,
                tributarias y jurídicas adaptadas a las necesidades de las pequeñas y medianas empresas.
                Nuestro enfoque está en brindar soluciones eficientes y personalizadas que impulsen el crecimiento
                y la rentabilidad de nuestros clientes empresariales.
            </Text>
            {/* <Space h="md" /> */}
            <Text style={{
                textAlign: "left",
                paddingLeft: "8rem",
                paddingRight: "7rem",
                fontFamily: "Raleway",
                fontSize: "20px",
                marginTop: "0rem",
                marginBottom: "1rem",
            }}>
                Contamos con un equipo de profesionales altamente calificados y comprometidos, que poseen un profundo
                conocimiento en contabilidad, fiscalidad y leyes comerciales. Estamos constantemente actualizados con
                los últimos cambios en la normativa, lo que nos permite brindar asesoramiento preciso y adaptado a las
                circunstancias particulares de cada cliente.
            </Text>
            <Text style={{
                textAlign: "left",
                paddingLeft: "8rem",
                paddingRight: "7rem",
                fontFamily: "Raleway",
                fontSize: "20px",
                marginTop: "0rem",
                marginBottom: "5rem",
            }}>
                Además cabe mencionar que el acompañamiento es en múltiples áreas, habiendo trabajado en equipo con empresas
                ganaderas, alimenticias, de manufactura aditiva, publicidad, entre otras.
            </Text>
            <Text component="a" href="mailto:jaoc1704@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'"> Envia un hola</Text>
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
                Galería de Imágenes
            </Title>
            <SimpleGrid cols={2}
            style={{paddingTop: "4rem", marginLeft: "9rem", marginRight: "9rem"}}
                spacing="lg"
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}>
                <div><Image src={image4} /></div>
                <div><Image src={image2} /></div>
                <div><Image src={image3} /></div>
                <div><Image src={image1} /></div>
            </SimpleGrid>
            <Divider my="sm" />
        </div>
    );
}

export default Aboutus;
