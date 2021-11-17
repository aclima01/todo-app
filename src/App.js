import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  List,
  Avatar,
  Breadcrumb,
  Layout,
  Divider,
} from "antd";
import { v4 as uuid } from "uuid";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [minhasTarefas, setTarefas] = useState([
    {
      title: "Instalar yarn",
      description: 'Instalar o gerenciador de pacotes "yarn"',
      id: uuid()
    },
    {
      title: "Criar app react",
      description: "Criar um aplicativo react ...",
      id: uuid()
    },
    {
      title: 'Adicionar "antd"',
      description: 'Adicionar o "antd" às dependencias do projeto',
      id: uuid()
    },
    {
      title: "Construir CRUD",
      description: 'Criar modelos e funções "mock"',
      id: uuid()
    },
  ]);

  const onSaveTodo = (values) => {

    var todoItem = {
      title: values.title,
      description: values.description,
      id: uuid()
    }

    let newArr = [...minhasTarefas];
    newArr.push(todoItem);

    setTarefas(newArr);
  };

  const onConcludeTodo = (values) => {
    let newArr = [...minhasTarefas];
    newArr.splice(newArr.indexOf[values], 1);

    setTarefas(newArr);
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Todo App</div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Minhas tarefas</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Form layout="vertical" onFinish={onSaveTodo}>
            <Form.Item
              name="title"
              label="Nome da tarefa"
              tooltip="Este campo é obrigatório"
              rules={[
                {
                  required: true,
                  message: "Atribuir um novo à tarefa",
                },
              ]}
            >
              <Input placeholder="Tarefa A" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Descrição da tarefa"
              rules={[
                {
                  required: true,
                  message: "Descrever a tarefa",
                },
              ]}
              tooltip={{
                title: "Descreva a tarefa que deve ser executada",
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Descrição da tarefa A" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Salvar
              </Button>
            </Form.Item>
          </Form>
          <Divider />
          <List
            itemLayout="horizontal"
            dataSource={minhasTarefas}
            renderItem={(item) => (
              <List.Item
                actions={[<Button onClick={(ev) => onConcludeTodo(item)} key="list-loadmore-edit">concluir</Button>]}>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<b>{item.title}</b>}
                  description={<div><p>{item.description}<br/>Id: {item.id}</p></div>}
                />
              </List.Item>
            )}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Todo App ©2021</Footer>
    </Layout>
  );
}

export default App;
