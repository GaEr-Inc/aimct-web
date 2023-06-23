import { Text, Title, Divider, Button, Group, TextInput, Image, Box, Grid, Space } from "@mantine/core";
import { useForm, isNotEmpty, isEmail, hasLength } from '@mantine/form';
function Contacto() {
    const form = useForm({
        initialValues: {
            name: '',
            number: '',
            email: '',
            message: '',
        },

        validate: {
            name: hasLength({ min: 2, max: 10 }, 'El nombre debe tener entre 2 y 10 caracteres'),
            number: isNotEmpty('Ingrese su número de teléfono'),
            email: isEmail('Invalid email'),
        },
    });
    return (
        <div
            style={{
                paddingLeft: "18rem",
                paddingRight: "18rem",
                paddingTop: "2rem"
            }}
        ><Grid grow>
                <Grid.Col span={3}><Title
                    style={{
                        marginTop: "6rem",
                        paddingLeft: "3rem",
                        paddingTop: "1rem",
                        textAlign: "left",
                        color: "#A7060C",
                        fontFamily: "Raleway",
                        fontSize: "35px",
                        fontWeight: "1000",
                    }}
                >
                    Formulario de Contacto
                </Title>
                    <div>
                        <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { })} style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
                            <TextInput label="Nombre" placeholder="Nombre de la persona o empresa" withAsterisk {...form.getInputProps('name')} />
                            <TextInput
                                label="Número de Teléfono"
                                placeholder="Número de Teléfono"
                                withAsterisk
                                mt="md"
                                {...form.getInputProps('number')}
                            />
                            <TextInput
                                label="Correo electrónico"
                                placeholder="Ej: corp@mail.com"
                                withAsterisk
                                mt="md"
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                label="Mensaje"
                                placeholder="Escribe tus intereses y pronto nos pondremos en contacto contigo. (Tiempo estimado de respuesta: 2 días hábiles)."
                                mt="md"
                                {...form.getInputProps('favoriteColor')}
                            />
                            <Group position="right" mt="md">
                                <Button type="submit">Enviar</Button>
                            </Group>
                        </Box>
                    </div></Grid.Col>
                <Grid.Col span={2}><Title
                    style={{
                        marginTop: "6rem",
                        paddingLeft: "0rem",
                        paddingTop: "1rem",
                        textAlign: "left",
                        color: "#A7060C",
                        fontFamily: "Raleway",
                        fontSize: "35px",
                    }}
                >
                    Nuestra Ubicación
                </Title>
                    <Text style={{
                        paddingLeft: "0rem",
                        paddingTop: "1rem",
                        paddingRight: "0rem",
                        paddingBottom: "0rem",
                    }}>
                        Nos encontramos localizados en la ciudad de Guadalajara de Buga, en la dirección: Calle 6 # 1E 45.
                    </Text>
                    <Text style={{
                        paddingLeft: "0rem",
                        paddingTop: "0rem",
                        paddingRight: "0rem",
                        paddingBottom: "1rem",
                    }}>
                        Horario de atención: Lun-Vie 8:00 - 18:00
                    </Text>
                    <Image
                        style={{ paddingLeft: "0rem" }}
                        height={400}
                        width={600}
                        src=".\src\assets\AIMCT_map.jpeg"
                        alt="With custom placeholder"
                        withPlaceholder
                        placeholder={<Text align="center">Esta imagen muestra la ubicación de la oficina en el mapa.</Text>}
                    /></Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />
            <Divider my="sm" />
        </div>
    );
}

export default Contacto;
