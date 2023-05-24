import { Card, Text, Input, Row, Checkbox, StyledButton, Loading } from "@nextui-org/react";
import { useState } from "react";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../utils/validations";
import { setTokenApi, signInApi, signUpApi } from "../api/auth";
import { useRouter } from "next/router";

function initialFormValue() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
    };
}

function Login() {
    const [signUp, setSignUp] = useState(false);
    const [formData, setFormData] = useState(initialFormValue());
    const [signUpLoading, setSignUpLoading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setSignUp(!signUp);
    };

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const onSubmit = e => {
        e.preventDefault();

        let validCount = 0;
        values(formData).some(value => {
            value && validCount++;
            return null;
        });

        if (signUp) {
            if (validCount !== size(formData)) {
                toast.warning("Completa todos los campos del formulario");
            } else {
                ValidateSignUp();
            }
        } else {
            if (validCount !== size(formData) - 2) {
                toast.warning("Completa todos los campos del formulario");
            } else {
                ValidateLogin();
            }
        }
    };

    function ValidateLogin() {

        if (!isEmailValid(formData.email)) {
            toast.warning("Email invalido");
        } else if (size(formData.password) < 6) {
            toast.warning("La contraseña tiene que tener al menos 6 caracteres");
        } else {
            setSignUpLoading(true);
            signInApi(formData)
                .then(response => {
                    if (response.message) {
                        toast.warning(response.message);
                    } else {
                        setTokenApi(response.token);
                        router.push('/some-path');
                    }
                })
                .catch(() => {
                    toast.error("Error del servidor, inténtelo más tarde!");
                })
                .finally(() => {
                    setSignUpLoading(false);
                    setFormData(initialFormValue());
                });
        }

    };


    function ValidateSignUp() {

        if (!isEmailValid(formData.email)) {
            toast.warning("Email invalido");
        } else if (size(formData.password) < 6) {
            toast.warning("La contraseña tiene que tener al menos 6 caracteres");
        } else {
            setSignUpLoading(true);
            signUpApi(formData)
                .then(response => {
                    if (response.code === 200) {
                        toast.success("El registro ha sido correcto");
                    } else {
                        toast.warning(response.message);
                    }
                })
                .catch(() => {
                    toast.error("Error del servidor, inténtelo más tarde!");
                })
                .finally(() => {
                    setSignUpLoading(false);
                    setFormData(initialFormValue());
                });
        }

    };


    return (

        <>
            <section className="fixed w-full bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L30,112C60,96,120,64,180,48C240,32,300,32,360,48C420,64,480,96,540,138.7C600,181,660,235,720,250.7C780,267,840,245,900,213.3C960,181,1020,139,1080,106.7C1140,75,1200,53,1260,64C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </section>
            <section className="fixed w-full top-20 row justify-center">
                <span className="text-6xl font-bold text-gradient">Welcome to Relier</span>
            </section>
            <div className="w-full flex justify-center">
                <div className="max-w-xl w-full h-screen row">

                    <Card>
                        <Card.Header>
                            <div className="row w-full justify-center">
                                <Text id="modal-title" size={18}>
                                    Welcome to <Text b size={18} color="primary"> Relier </Text>
                                </Text>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <form onChange={onChange} onSubmit={onSubmit}>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Email"
                                    contentLeft={<Mail fill="currentColor" />}
                                    value={formData.email}
                                    name="email"
                                />
                                <div className="h-5" />

                                {
                                    signUp && (
                                        <>
                                            <Input
                                                clearable
                                                bordered
                                                fullWidth
                                                color="primary"
                                                size="lg"
                                                placeholder="Username"
                                                contentLeft={<Mail fill="currentColor" />}
                                                value={formData.username}
                                                name="username"
                                            />
                                            <div className="h-5" />

                                            <Input
                                                clearable
                                                bordered
                                                fullWidth
                                                color="primary"
                                                size="lg"
                                                placeholder="Name"
                                                contentLeft={<Mail fill="currentColor" />}
                                                value={formData.name}
                                                name="name"
                                            />
                                            <div className="h-5" />
                                        </>
                                    )
                                }

                                <Input.Password
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Password"
                                    contentLeft={<Password fill="currentColor" />}
                                    value={formData.password}
                                    name="password"
                                />
                                <div className="h-5" />


                                <Row justify="space-between">
                                    <Checkbox>
                                        <Text size={14}>Remember me</Text>
                                    </Checkbox>
                                    <div className="text-sm cursor-pointer" onClick={handleClick}>
                                        {signUp ? "Already have an account?" : "Don't have an account?"}
                                    </div>
                                </Row>


                                <div className="mt-5 flex justify-center">
                                    <button className="cta" type="submit">
                                        <span>Submit</span>
                                        {
                                            signUpLoading && (
                                                <Loading color="currentColor" size="sm" />
                                            )
                                        }
                                    </button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </>
    )
}

export default Login


const Password = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={fill}>
                <path d="M18.75 8v2.1a12.984 12.984 0 00-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2a12.984 12.984 0 00-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8z" />
                <path d="M18.75 10.1a12.984 12.984 0 00-1.5-.1H6.75a12.984 12.984 0 00-1.5.1C2.7 10.41 2 11.66 2 15v2c0 4 1 5 5 5h10c4 0 5-1 5-5v-2c0-3.34-.7-4.59-3.25-4.9zM8.71 16.71A1.052 1.052 0 018 17a1 1 0 01-.38-.08 1.032 1.032 0 01-.33-.21A1.052 1.052 0 017 16a1 1 0 01.08-.38 1.155 1.155 0 01.21-.33 1.032 1.032 0 01.33-.21 1 1 0 011.09.21 1.155 1.155 0 01.21.33A1 1 0 019 16a1.052 1.052 0 01-.29.71zm4.21-.33a1.155 1.155 0 01-.21.33A1.052 1.052 0 0112 17a1.033 1.033 0 01-.71-.29 1.155 1.155 0 01-.21-.33A1 1 0 0111 16a1.033 1.033 0 01.29-.71 1.047 1.047 0 011.42 0A1.033 1.033 0 0113 16a1 1 0 01-.08.38zm3.79.33a1.014 1.014 0 01-1.42 0 1.014 1.014 0 010-1.42 1.047 1.047 0 011.42 0c.04.05.08.1.12.16a.556.556 0 01.09.17.636.636 0 01.06.18 1.5 1.5 0 01.02.2 1.052 1.052 0 01-.29.71z" />
            </g>
        </svg>
    );
};

const Mail = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            >
                <path d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3" />
                <path d="M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9M19.21 14.77l-3.539 3.54a1.232 1.232 0 00-.3.59l-.19 1.35a.635.635 0 00.76.76l1.35-.19a1.189 1.189 0 00.59-.3l3.54-3.54a1.365 1.365 0 000-2.22 1.361 1.361 0 00-2.211.01zM18.7 15.28a3.185 3.185 0 002.22 2.22" />
            </g>
        </svg>
    );
};

