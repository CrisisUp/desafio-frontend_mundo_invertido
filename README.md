
# 🕯️ Stranger Things: Mundo Invertido (Legacy Evolution)

![Logo Stranger Things](assets/images/banner/logo.svg)

Uma jornada para quem não tem medo do desconhecido. O projeto original, criado há quatro anos na **Semana Front-end da DIO**, foi aqui refatorado e elevado a um novo patamar técnico, focando em **Acessibilidade Moderna, Design Tokens e Experiência Imersiva.**

---

## 🚀 Evolução Técnica (O que eu adicionei)

Nesta nova versão, implementei melhorias críticas que não existiam na base original:

* **Design Tokens & Tipografia:** Sistema de variáveis CSS para uma escala de fontes responsiva e consistente.
* **Acessibilidade de Elite (WCAG):** Implementação de caixas de texto com `backdrop-filter: blur` e opacidade controlada para garantir leitura sobre fundos complexos.
* **Áudio Imersivo & Player Retrô:** Sincronização da trilha sonora com a troca de tema e criação de um player funcional na fita cassete do rodapé.
* **Estética 80s Avançada:** Adição de efeitos de ruído VHS (TV Static) via CSS puro e filtros de neon.
* **Responsividade Total:** Adaptação completa do layout para dispositivos móveis usando `media queries` modernas.

---

## 💻 Tecnologias & Conceitos

* **HTML5:** Semântica avançada e atributos ARIA.
* **CSS3:** Flexbox, Keyframes, Variáveis, Pseudo-elementos e Glassmorphism.
* **JavaScript ES6+:** Manipulação de DOM, Audio API e gerenciamento de estado de tema.

---

## 🎨 Arquitetura de Variáveis (Refatorada)

Utilizei uma estrutura de variáveis mais limpa e centralizada para facilitar a manutenção:

```css
:root {
  --accent-color: #ff0000;
  --font-size-p: 1.125rem;
  /* Design Tokens para temas dinâmicos */
}

.light-theme {
  --background-image: url('../images/backgrounds/lamps.png');
  --text-color: #000000;
  --box-bg: rgba(255, 255, 255, 0.8);
}

.dark-theme {
  --background-image: url('../images/backgrounds/lamps-inverted.png');
  --text-color: #ffffff;
  --box-bg: rgba(0, 0, 0, 0.75);
}
```

## 🔗 Links e Referências Originais

Este projeto é um fork evolutivo baseado no conteúdo de:

* W3C - World Wide Web Consortium

* WAI - Web Acessibility Initiative

* Figma Original do Projeto

### ▶️ Aulas Originais (DIO)

* Live Dia 01

* Live Dia 02

### 🌎 Créditos aos Autores Originais

Este desafio foi inicialmente proposto e guiado pelos experts:

* Diogo Medeiros Mainardes

* Michele Queiroz Ambrosio

* Renan Johannsen de Paula

Projeto refatorado por Cristiano em 2026 para consolidar conhecimentos avançados de Front-end.
