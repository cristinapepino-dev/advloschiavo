# CLP Advocacia Estratégica — Site Institucional

Site estático (HTML/CSS/JS) do escritório CLP Advocacia Estratégica, preparado para publicação no Azure Static Web Apps.

## Estrutura do repositório

```
advloschiavo/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-lemon-forest-04c7ec410.yml
├── imagens/
│   ├── cristina-retrato.jpg
│   └── cristina-poltrona.jpg
├── index.html
├── style.css
├── script.js
└── README.md
```

## Publicação no Azure Static Web Apps

Como este é um site HTML estático puro (sem etapa de build), o workflow do GitHub Actions já está configurado com:

```yaml
output_location: ""
skip_app_build: true
```

Isso evita o erro de "Construir e Implantar" e instrui o Azure a publicar diretamente os arquivos da raiz.

### Passos para publicar

1. Faça upload de todos os arquivos para o repositório `advloschiavo` no GitHub, mantendo a estrutura de pastas acima.
2. O Azure já está vinculado ao repositório. Após o commit, o GitHub Actions irá executar o workflow automaticamente.
3. Acompanhe em **GitHub → advloschiavo → Actions**. Quando aparecer o ícone verde, a publicação foi concluída.
4. No portal do Azure, clique em **Visitar o seu site**.

### Em caso de erro

Se o GitHub Actions falhar, abra a etapa "Build and Deploy" e copie a linha que começa com `Error:` ou `Failed:` para diagnóstico.

## Manutenção

- Para alterar textos: edite `index.html`.
- Para ajustar cores, fontes ou layout: edite `style.css`.
- Para alterar comportamento de scroll, menu mobile ou animações: edite `script.js`.
- Para trocar fotos: substitua os arquivos em `imagens/` mantendo os mesmos nomes.

---

© CLP Advocacia Estratégica — Cristina Loschiavo Pepino · OAB/SP nº 254.069
