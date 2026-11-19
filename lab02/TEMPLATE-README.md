# 🐳 Laboratório Prático: Docker (Portas, Env e Volumes)

**Disciplina:** Engenharia de Aplicações Web Backend  
**Aluno:** [Seu Nome Completo]  
  

---

## 🎯 Passo 1: Mapeamento de Portas
**Objetivo:** Compreender a diferença entre a porta do host e a porta do container.

- **Comando executado para subir o container (`container-portas`):**
\`\`\`bash
# Insira aqui o comando executado
\`\`\`

- **Evidência (Print ou Saída do Terminal) do acesso em `http://localhost:9090`:**
> *[Insira a imagem ou a saída do terminal aqui]*

---

## 🎯 Passo 2: Variáveis de Ambiente (Configuração Dinâmica)
**Objetivo:** Demonstração do padrão *The Twelve-Factor App* injetando comportamentos diferentes na mesma imagem.

- **Comandos executados para subir os containers (`container-prod` e `container-test`):**
\`\`\`bash
# Insira aqui os comandos executados
\`\`\`

- **Evidência do acesso em `http://localhost:8081/info` (Produção):**
> *[Insira a imagem ou a saída do terminal aqui]*

- **Evidência do acesso em `http://localhost:8082/info` (Testes):**
> *[Insira a imagem ou a saída do terminal aqui]*

*(Opcional)* **Utilizou o arquivo `.env`? Descreva brevemente como foi feito:**
> *[Sua resposta aqui, se aplicável]*

---

## 🎯 Passo 3: Volumes e Bind Mounts
**Objetivo:** Leitura de dados do sistema hospedeiro em tempo real sem reconstruir a imagem.

- **Comando executado para subir o container com o volume (`container-volume`):**
\`\`\`bash
# Insira aqui o comando executado
\`\`\`

- **Evidência 1: Acesso em `http://localhost:8083/aviso` (Texto Original):**
> *[Insira a imagem ou a saída do terminal aqui]*

- **Evidência 2: Acesso em `http://localhost:8083/aviso` (Após alterar o arquivo `aviso.txt` localmente):**
> *[Insira a imagem ou a saída do terminal aqui]*

---

## 🛡️ Passo 4: Análise Teórica e Boas Práticas (.dockerignore)

**Justifique, sob uma visão arquitetural de CI/CD, por que é crítico ignorar arquivos locais (como `.env`, `aviso.txt` e pastas de `dados/`) na construção da imagem utilizando o `.dockerignore`:**

> *[Escreva sua justificativa teórica aqui. Lembre-se de abordar os conceitos de vazamento de credenciais/chaves de acesso e inchaço (bloat) da imagem final]*
