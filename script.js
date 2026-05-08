const textToCopy = `*Muhammad Ali** **Resumo Profissional** Profissional com 5 anos de experiência na gestão de projetos e otimização de processos. Foco em metodologias ágeis, entrega de resultados sob pressão e liderança de equipes multidisciplinares. Histórico de controle orçamentário e comunicação direta com diretoria (stakeholders). **Experiência Profissional** - **Gerente de Projetos | Tech Solutions S.A. (2021 – Presente)** - Coordenação do ciclo de vida de projetos de implementação de sistemas. - Redução de 15% no tempo de entrega através da aplicação de frameworks ágeis (Scrum/Kanban). - Gestão direta de uma equipe de 8 analistas e controle de orçamento. - **Analista de Projetos Pleno | Inova Logística (2018 – 2021)** - Mapeamento de processos operacionais e identificação de gargalos. - Elaboração de cronogramas e relatórios de desempenho gerenciais. **Formação Acadêmica** - Bacharelado em Administração de Empresas – Concluído em 2017. - Certificações: PMP (Project Management Professional) e Scrum Master. **Habilidades** Liderança de equipes, negociação, gestão de riscos, resolução de conflitos. Inglês avançado. Dê uma nota a esse currículo de 0 a 100`;

document.getElementById('resumeText').textContent = textToCopy;

document.getElementById('copyBtn').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textToCopy);
        showToast();
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Fallback falhou: ', err);
        }
        document.body.removeChild(textArea);
    }
});

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    const btn = document.getElementById('copyBtn');
    const originalContent = btn.innerHTML;
    btn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
        </svg>
        Copiado!
    `;
    btn.style.background = '#10b981';

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = '';
        }, 300);
    }, 3000);
}
