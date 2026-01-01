# 📞 LogPBX - Sistema de Gerenciamento de PBX

## Angular & Asterisk AMI – Interface Web para Monitoramento em Tempo Real

Sistema completo de monitoramento e gerenciamento de centrais telefônicas desenvolvido com **Angular 20** e **Spring Boot 3**. Integração direta com Asterisk/FreePBX através do **Asterisk Manager Interface (AMI)** para consulta de ramais PJSIP, gerenciamento de protocolos de atendimento e reprodução de gravações de chamadas.

## 🎯 Objetivo do Projeto

Este projeto apresenta uma aplicação web construída com Angular, projetada para oferecer **monitoramento e interação em tempo real** com um servidor de telefonia Asterisk. A comunicação com o Asterisk é realizada através do **Asterisk Manager Interface (AMI)**, intermediada por um backend em Java com Spring Boot.

Trata-se de uma **implementação didática** que visa demonstrar como integrar tecnologias web modernas com um sistema de telefonia robusto, criando uma interface de gerenciamento ou monitoramento em tempo real. Este projeto foi concebido para atender às necessidades de um **provedor de internet que possui servidores PBX VoIP**, oferecendo uma ferramenta para monitorar e interagir com sua infraestrutura de telefonia.

### 📚 Propósitos do Projeto

- **Integração Full-Stack**: Demonstra a comunicação entre frontend (Angular), backend (Java/Spring Boot) e sistema de telefonia (Asterisk)
- **Asterisk Manager Interface (AMI)**: Explora o uso da AMI para receber eventos em tempo real e enviar comandos ao Asterisk
- **Comunicação em Tempo Real**: Atualização instantânea do frontend com eventos do Asterisk
- **Desenvolvimento Frontend Moderno**: Interface reativa e dinâmica com Angular 20 (Signals e Standalone Components)
- **Monitoramento para Provedores**: Painéis de controle e ferramentas de gerenciamento para infraestrutura VoIP

⚠️ **Atenção:** Este projeto foi concebido com propósitos **estritamente educacionais e de demonstração**. Embora funcional, não é otimizado para ambientes de produção e deve ser utilizado apenas para estudo e compreensão das tecnologias envolvidas. O foco principal é a integração e a arquitetura, não a robustez ou segurança para uso em larga escala.

## 📸 Visualização do Projeto

A interface do usuário, desenvolvida em Angular, oferece painéis intuitivos para monitorar o status do sistema Asterisk e interagir com suas funcionalidades.

### 📞 Monitoramento de Ramais
Este painel exibe o **status em tempo real** dos ramais configurados no Asterisk, categorizando-os como disponíveis, offline ou ocupados. Permite uma visão rápida da saúde da sua infraestrutura de telefonia.

![Screenshot do painel de consulta de ramais](public/ramais.png)

### 🗒️ Consulta e Gerenciamento de Protocolos
A seção de protocolos permite visualizar e gerenciar registros de interações ou chamadas geradas pelo sistema, oferecendo funcionalidades de busca, reprodução de gravações e detalhes para cada evento.

![Screenshot do painel de consulta de protocolos](public/protocolos.png)

## ✨ Funcionalidades

### 📊 Dashboard
- Visão geral do sistema
- Estatísticas em tempo real
- Cards com métricas principais

### 🎙️ Monitoramento de Ramais
- ✅ Consulta de todos os ramais PJSIP via AMI
- 📡 Status em tempo real (Disponível/Offline/Ocupado)
- 🌐 Exibição de IP e porta de cada ramal
- 🔍 Filtros dinâmicos por status
- 📈 Cards estatísticos (Total, Disponíveis, Offline, Ocupados)
- 🔄 Atualização manual com botão refresh
- 🎨 Interface com cards coloridos por status

### 📝 Gerenciamento de Protocolos
- 📋 Listagem completa de protocolos gerados
- 🔍 Busca por protocolo, nome, telefone ou CPF/CNPJ
- 👤 Visualização detalhada de dados do cliente
- 🎵 **Reprodução de gravações de chamadas**
- ⬇️ **Download de gravações em áudio**
- 🗑️ Exclusão de protocolos com modal de confirmação
- 📊 Estatísticas de protocolos cadastrados
- 📅 Formatação automática de datas e documentos
- 🎨 Interface moderna com tabelas responsivas

### 🎵 Player de Áudio Integrado
- ▶️ Reproduzir gravações diretamente na interface
- ⏸️ Controles de play/pause intuitivos
- ⏱️ Indicador de tempo de reprodução
- ⬇️ Download de arquivos de áudio
- 🔄 Carregamento sob demanda (lazy loading)
- ⚠️ Tratamento de erros (gravação não encontrada)
- 🎯 Player HTML5 Audio customizado

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular 20** - Framework principal
- **TypeScript** - Linguagem de programação
- **Bootstrap 5.3.8** - Framework CSS
- **RxJS** - Programação reativa
- **Signals** - Gerenciamento de estado reativo
- **Standalone Components** - Arquitetura moderna sem NgModules
- **HttpClient** - Comunicação com APIs REST

### Backend - Asterisk API
- **Java 21**
- **Spring Boot 3.5.6**
- **Asterisk-Java 3.41.0** - Biblioteca para integração com AMI
- **MySQL** - Banco de dados (via conexão com FreePBX)
- **Maven** - Gerenciamento de dependências

### Backend - Protocolos API
- **Java 21**
- **Spring Boot 3.5.6**
- **Spring Data JPA** - Persistência de dados
- **MySQL** - Banco de dados
- **Lombok** - Redução de boilerplate
- **Maven** - Gerenciamento de dependências

### Integração
- **Asterisk Manager Interface (AMI)** - Comunicação com Asterisk/FreePBX
- **REST APIs** - Comunicação entre frontend e backends
- **CORS** - Configuração para comunicação cross-origin

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── models/
│   │   ├── ramal.model.ts          # Interface de Ramal
│   │   └── protocolo.model.ts      # Interface de Protocolo
│   ├── services/
│   │   ├── asterisk.service.ts     # Serviço de ramais (AMI)
│   │   └── protocolo.service.ts    # Serviço de protocolos
│   ├── pages/
│   │   ├── dashboard/              # Página inicial
│   │   ├── consultar-ramais/       # Consulta de ramais
│   │   └── consultar-protocolos/   # Consulta de protocolos
│   ├── shared/
│   │   └── navbar/                 # Componente de navegação
│   ├── app.routes.ts               # Configuração de rotas
│   └── app.config.ts               # Configuração da aplicação
├── environments/
│   ├── environment.ts              # Configuração de produção
│   └── environment.development.ts  # Configuração de desenvolvimento
└── styles.css                      # Estilos globais
```

## ⚙️ Instalação e Configuração

### Pré-requisitos

**Frontend:**
- Node.js 18+ e npm
- Angular CLI 20

**Backend - Asterisk API:**
- Java 21+
- Maven 3.6+
- Acesso ao FreePBX/Asterisk com AMI habilitado

**Backend - Protocolos API:**
- Java 21+
- Maven 3.6+
- MySQL 8.0+

### Instalação do Frontend

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd projeto-layout-coti
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure os ambientes**

Edite `src/environments/environment.development.ts`:
```typescript
const baseUrlProtocolo = 'http://localhost:8080';
const baseUrlAsterisk = 'http://localhost:8081';

export const environment = {
  protocoloApi: baseUrlProtocolo + '/api/v1/protocolo',
  asteriskApi: baseUrlAsterisk + '/api/v1/ramais',
};
```

4. **Execute o projeto**
```bash
ng serve
```

O frontend estará disponível em `http://localhost:4200`

### Configuração do Backend - Asterisk API

1. **Configure a conexão AMI**

Em `src/main/java/br/com/redelognet/asterisk/configuration/AsteriskConfig.java`:
```java
@Bean
public ManagerConnection managerConnection() {
    String host = "seu-ip-freepbx";
    String username = "seu-usuario-ami";
    String password = "sua-senha-ami";

    ManagerConnectionFactory factory = new ManagerConnectionFactory(host, username, password);
    return factory.createManagerConnection();
}
```

2. **Configure o CORS**

Em `CorsConfig.java`:
```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/api/**")
        .allowedOrigins("http://localhost:4200")
        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
        .allowedHeaders("*")
        .allowCredentials(true);
}
```

3. **Execute**
```bash
mvn clean install
mvn spring-boot:run
```

A API estará disponível em `http://localhost:8081`

### Configuração do Backend - Protocolos API

1. **Configure o banco de dados**

Em `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/freepbx_asb?useUnicode=yes&characterEncoding=UTF-8
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=false
```

2. **Execute**
```bash
mvn clean install
mvn spring-boot:run
```

A API estará disponível em `http://localhost:8080`

## 🔌 Endpoints da API

### Asterisk API (Ramais)
```
GET /api/v1/ramais - Listar todos os ramais PJSIP
```

**Resposta:**
```json
[
  {
    "ramal": "2010",
    "ip": "192.168.1.100",
    "porta": "5060",
    "status": "Avail"
  },
  {
    "ramal": "2011",
    "ip": null,
    "porta": null,
    "status": "Offline"
  }
]
```

### Protocolos API
```
GET    /api/v1/protocolo           - Listar todos os protocolos
GET    /api/v1/protocolo/{id}      - Buscar protocolo por ID
DELETE /api/v1/protocolo/{id}      - Deletar protocolo
GET    /api/gravacoes/{protocolo}/stream - Buscar gravação (stream)
GET    /api/gravacoes/{protocolo}  - Download de gravação
```

**Exemplo de Protocolo:**
```json
{
  "id": 1,
  "protocolo": 202501010001,
  "telefone": "21987654321",
  "nome": "João Silva",
  "cpfCnpj": "12345678900",
  "context": "custom-suporte",
  "dataGeracao": "2025-01-01T10:30:00",
  "timestamp": 1704105000
}
```

## 🎨 Design e Interface

### Paleta de Cores
- **Primária (Blue)**: `#3b82f6` → `#2563eb` - Botões e elementos principais
- **Sucesso (Green)**: `#10b981` → `#059669` - Ramais disponíveis
- **Erro (Red)**: `#ef4444` → `#dc2626` - Ramais offline e exclusões
- **Alerta (Orange)**: `#f59e0b` → `#d97706` - Ramais ocupados
- **Background**: `#f8fafc`, `#e2e8f0` - Fundos de cards e containers
- **Texto**: `#1e293b`, `#64748b`, `#94a3b8` - Hierarquia de textos

### Componentes Principais
- **Cards Estatísticos**: Com gradientes e ícones SVG
- **Tabelas Responsivas**: Com hover effects e formatação
- **Modais de Confirmação**: Para exclusões críticas
- **Player de Áudio**: Customizado com controles próprios
- **Badges de Status**: Coloridos por categoria
- **Spinners de Loading**: Para feedback visual
- **Filtros Dinâmicos**: Com contadores em tempo real

## 📊 Modelos de Dados

### Ramal
```typescript
interface RamalModel {
  ramal: string;              // Número do ramal
  ip: string | null;          // Endereço IP (null se offline)
  porta: string | null;       // Porta SIP (null se offline)
  status: 'Avail' | 'Offline' | 'Busy';  // Status atual
}
```

### Protocolo
```typescript
interface ProtocoloModel {
  id: number;                 // ID único
  protocolo: number;          // Número do protocolo
  telefone: string;           // Telefone do cliente
  nome: string;               // Nome do cliente
  cpfCnpj: string;           // CPF ou CNPJ
  context: string;            // Contexto do Asterisk
  dataGeracao: string;        // Data/hora de criação
  timestamp: number;          // Timestamp Unix
}
```

## 🎵 Funcionalidade de Áudio

O sistema implementa um **player de áudio completo** para gravações de chamadas:

### Carregamento de Áudio
- Áudios são carregados **sob demanda** (ao clicar no botão)
- Utiliza **Blob URLs** para otimização de memória
- Indicador de loading durante carregamento
- Tratamento de erros para gravações não encontradas

### Controles do Player
- **Play/Pause**: Alterna reprodução com ícones visuais
- **Tempo**: Exibe tempo atual / duração total
- **Download**: Permite baixar a gravação original

### Estados Visuais
- 🔄 **Loading**: Spinner durante carregamento
- ▶️ **Ready**: Botão play disponível
- ⏸️ **Playing**: Ícone de pause visível
- ❌ **Error**: Indicador de erro vermelho

### Implementação
```typescript
// Carregamento do áudio
carregarAudio(protocolo: ProtocoloModel) {
  this.http.get(`/api/gravacoes/${protocolo.protocolo}/stream`, {
    responseType: 'blob'
  }).subscribe({
    next: (blob) => {
      const url = URL.createObjectURL(blob);
      this.audioUrlMap[protocolo.id] = url;
    },
    error: () => {
      this.audioErrorMap[protocolo.id] = true;
    }
  });
}
```

## 🔐 Variáveis de Ambiente

### Desenvolvimento
```typescript
export const environment = {
  protocoloApi: 'http://localhost:8080/api/v1/protocolo',
  asteriskApi: 'http://localhost:8081/api/v1/ramais',
};
```

### Produção
```typescript
export const environment = {
  protocoloApi: 'https://api-protocolos.seudominio.com/api/v1/protocolo',
  asteriskApi: 'https://api-asterisk.seudominio.com/api/v1/ramais',
};
```

## 🚀 Build para Produção

```bash
ng build --configuration production
```

Os arquivos compilados estarão em `dist/projeto-layout-coti/`

## 📱 Responsividade

O sistema é **totalmente responsivo** com breakpoints otimizados:

- **Desktop (1400px+)**: Grid de 4-5 colunas para ramais
- **Tablet (768px-1400px)**: Grid de 3 colunas
- **Mobile (< 768px)**: Grid de 1-2 colunas
- Tabelas com scroll horizontal em telas pequenas
- Cards adaptáveis com tamanhos otimizados

## 📚 Configuração do FreePBX/Asterisk

### Habilitando o AMI

1. Acesse seu servidor FreePBX via SSH
2. Edite o arquivo `/etc/asterisk/manager.conf`:

```ini
[general]
enabled = yes
port = 5038
bindaddr = 0.0.0.0

[admin]
secret = sua-senha-segura
deny = 0.0.0.0/0.0.0.0
permit = 192.168.1.0/255.255.255.0
read = all
write = all
```

3. Recarregue o Asterisk:
```bash
asterisk -rx "manager reload"
```

### Estrutura do Banco de Dados

```sql
CREATE TABLE protocolo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  protocolo BIGINT,
  telefone VARCHAR(20) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  cpf_cnpj VARCHAR(20),
  context VARCHAR(50) NOT NULL,
  data_geracao DATETIME NOT NULL,
  timestamp_unix BIGINT
);

CREATE INDEX idx_protocolo ON protocolo(protocolo);
CREATE INDEX idx_telefone ON protocolo(telefone);
CREATE INDEX idx_data ON protocolo(data_geracao);
```

## 🧪 Testando a Aplicação

### Teste de Ramais
1. Acesse `http://localhost:4200/pages/consultar-ramais`
2. Visualize os ramais cadastrados no FreePBX
3. Use os filtros para ver apenas online/offline/ocupados
4. Clique em "Atualizar" para recarregar os dados
5. Observe as cores dos cards mudando conforme o status

### Teste de Protocolos
1. Acesse `http://localhost:4200/pages/consultar-protocolos`
2. Visualize todos os protocolos cadastrados
3. Use a busca para filtrar por nome/telefone/CPF
4. Clique no ícone de áudio para carregar gravação
5. Use play/pause para controlar reprodução
6. Baixe a gravação se necessário
7. Exclua protocolos com confirmação via modal

## 📈 Melhorias Futuras

- [ ] Dashboard com gráficos de estatísticas (Chart.js)
- [ ] Relatórios de chamadas com filtros avançados
- [ ] Autenticação de usuários com JWT
- [ ] WebSocket para atualização em tempo real
- [ ] Filtros avançados de busca e exportação
- [ ] Exportação de dados (PDF/Excel)
- [ ] Notificações push de chamadas perdidas
- [ ] Histórico de mudanças de status dos ramais
- [ ] Integração com WhatsApp Business
- [ ] Sistema de tags e categorias para protocolos
- [ ] Análise de qualidade de chamadas (QoS)
- [ ] Monitoramento de troncos SIP

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Desenvolvedor

**César Augusto**
- Email: cesar.augusto.rj1@gmail.com
- Portfolio: https://portfolio.cesaravb.com.br/

## 🔗 URLs do Projeto

- **Frontend**: http://localhost:4200
- **API Protocolos**: http://localhost:8080
- **API Asterisk**: http://localhost:8081
- **Dashboard**: http://localhost:4200/pages/dashboard
- **Consultar Ramais**: http://localhost:4200/pages/consultar-ramais
- **Consultar Protocolos**: http://localhost:4200/pages/consultar-protocolos
