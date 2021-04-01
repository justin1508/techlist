import React from 'react'
import { FaGithubAlt, FaPlus} from 'react-icons/fa'
import { Title, Container, Form, SubmitButton} from './styles'

function Main(){
    return (
        <Container>
            <Title>
                <FaGithubAlt/>
                Repositórios
            </Title>

            <Form onSubmit={()=>{}}>
                <input
                type="text"
                placeholder="Adicionar repositorios"
                />

                <SubmitButton disabled>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>

        </Container>
    );
}

export default Main;