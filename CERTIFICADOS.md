# 📚 Como Atualizar os Certificados

## 🎯 Passos para Buscar seus Certificados no LinkedIn:

### 1. Acesse seu LinkedIn
- Vá para: https://linkedin.com/in/cleiton-dos-santos-gomes-259a882aa
- Faça login na sua conta

### 2. Encontre a seção "Licenças e certificações"
- Role para baixo no seu perfil
- Procure pela seção "Licenças e certificações"
- Ou clique em "Mais" se estiver oculta

### 3. Colete as informações de cada certificado:
Para cada certificado, anote:
- ✅ **Nome do certificado/curso**
- ✅ **Instituição ou organização emissora**
- ✅ **Data de emissão** (ano)
- ✅ **Descrição** (se houver)

## 🔧 Como Editar no Código:

### No arquivo `index.html`, procure por esta seção:
```html
<h2>📚 Certificados & Cursos</h2>
```

### Substitua cada certificado template:
```html
<div class="certificate-card">
    <div class="certificate-icon">🌐</div> <!-- Escolha emoji -->
    <h3>[SEU CERTIFICADO AQUI]</h3>
    <p class="certificate-institution">SUA INSTITUIÇÃO AQUI]</p>
    <p class="certificate-description">[SUA DESCRIÇÃO AQUI]</p>
    <div class="certificate-date">[ANO AQUI]</div>
</div>
```

## 🎨 Emojis Sugeridos por Área:

- **💻** - Programação Geral
- **🌐** - Desenvolvimento Web
- **📱** - Desenvolvimento Mobile
- **🎓** - Cursos Acadêmicos
- **⚛️** - React/Frontend
- **🔧** - Backend/APIs
- **🐍** - Python
- **☁️** - Cloud/DevOps
- **📊** - Dados/Analytics
- **🎨** - Design/UX
- **🔒** - Segurança
- **📜** - Certificações Técnicas

## 💡 Exemplo Real:
```html
<div class="certificate-card">
    <div class="certificate-icon">🌐</div>
    <h3>Desenvolvimento Web Completo</h3>
    <p class="certificate-institution">Udemy</p>
    <p class="certificate-description">Curso completo de desenvolvimento web com HTML, CSS, JavaScript, Node.js e React.</p>
    <div class="certificate-date">2024</div>
</div>
```

## 🚀 Depois de editar:
1. Salve o arquivo
2. Execute: `git add .`
3. Execute: `git commit -m "Atualiza certificados reais do LinkedIn"`
4. Execute: `git push`
5. Aguarde alguns minutos para o site atualizar

---

**💬 Dica:** Se preferir, me envie a lista dos seus certificados e eu atualizo o código para você!