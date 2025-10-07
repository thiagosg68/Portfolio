# 📸 Como Adicionar Imagens dos Certificados

## 🎯 Instruções para adicionar a imagem do seu Certificado Google IT Support

### 1. **Obtenha a Imagem do Certificado**

#### Opção A - Via Coursera:
1. Acesse seu perfil no Coursera
2. Vá para "Accomplishments" ou "Realizações"
3. Encontre o certificado "Google IT Support Professional Certificate"
4. Clique em "View" ou "Visualizar"
5. Use a opção "Share" → "Download as PDF" ou "Download as Image"
6. Se for PDF, converta para JPG usando um conversor online

#### Opção B - Captura de Tela:
1. Abra o certificado no navegador
2. Tire uma captura de tela de alta qualidade
3. Recorte apenas a área do certificado
4. Salve como JPG ou PNG

### 2. **Preparar a Imagem**

#### Especificações Recomendadas:
- **Formato**: JPG ou PNG
- **Resolução**: Mínimo 800x600px
- **Proporção**: Retangular (landscape)
- **Tamanho**: Máximo 2MB
- **Qualidade**: Alta definição, texto legível

#### Ferramentas para edição (opcionais):
- **Online**: Canva, Remove.bg, Photopea
- **Desktop**: GIMP (gratuito), Photoshop
- **Mobile**: Snapseed, VSCO

### 3. **Salvar no Local Correto**

```
portfolio/
└── img/
    ├── profile.jpg (sua foto já existe)
    └── google-it-certificate.jpg ← Nova imagem aqui
```

#### Nome EXATO do arquivo:
```
google-it-certificate.jpg
```

### 4. **Upload para o Repositório**

#### Via VS Code:
1. Abra a pasta `img` no VS Code
2. Arraste a imagem para dentro da pasta
3. Certifique-se que o nome está correto

#### Via Windows Explorer:
1. Navegue até: `C:\Users\estud\OneDrive\Documentos\portfolio\img\`
2. Cole o arquivo da imagem
3. Renomeie para `google-it-certificate.jpg`

### 5. **Fazer Commit das Mudanças**

```powershell
git add .
git commit -m "Adiciona imagem do certificado Google IT Support"
git push
```

## 🎨 **Resultado Esperado**

Após adicionar a imagem:
- ✅ Placeholder desaparece automaticamente
- ✅ Imagem do certificado aparece no card
- ✅ Hover effect para ampliar ligeiramente
- ✅ Layout responsivo mantido

## 🔧 **Para Adicionar Mais Certificados com Imagem**

### Template HTML:
```html
<div class="certificate-card">
    <div class="certificate-header">
        <div class="certificate-icon">📜</div>
        <div class="certificate-info">
            <h3>Nome do Certificado</h3>
            <p class="certificate-institution">Instituição</p>
        </div>
        <div class="certificate-date">Ano</div>
    </div>
    
    <div class="certificate-image-container">
        <img src="img/nome-certificado.jpg" alt="Certificado Nome" class="certificate-image">
        <div class="certificate-placeholder">
            <span>📜</span>
            <p>Adicione a imagem do certificado</p>
            <small>Salve como: img/nome-certificado.jpg</small>
        </div>
    </div>
    
    <p class="certificate-description">Descrição do certificado...</p>
    
    <div class="certificate-skills">
        <span class="skill-tag">Habilidade 1</span>
        <span class="skill-tag">Habilidade 2</span>
    </div>
</div>
```

## 💡 **Dicas Importantes**

- 📏 **Proporção**: Certificados ficam melhor em formato landscape (horizontal)
- 🔍 **Legibilidade**: Certifique-se que o texto está legível na imagem
- 📱 **Mobile**: Teste como fica em dispositivos móveis
- ⚡ **Performance**: Imagens muito grandes podem deixar o site lento
- 🎯 **Foco**: Recorte apenas a área do certificado, sem bordas desnecessárias

## 🚀 **Visualizar Resultado**

Após fazer o push, aguarde 2-3 minutos e acesse:
**https://thiagosg68.github.io/Portfolio/**

---

💬 **Precisa de ajuda?** Me envie a imagem e eu posso adicioná-la para você!