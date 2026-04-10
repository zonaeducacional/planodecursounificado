import React, { useState, useEffect } from 'react';
import { 
  ClipboardCheck, 
  Copy, 
  Moon, 
  Sun, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  School,
  FileText,
  User,
  Calendar,
  Layout,
  Wrench,
  CheckSquare,
  Clock,
  Accessibility,
  Heart,
  Globe,
  Library,
  ListOrdered,
  Building2,
  Maximize2
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    teacherName: '',
    schoolYear: new Date().getFullYear().toString(),
    subject: '',
    grade: '',
    schoolName: '',
    totalHours: '80',
    methodologies: '',
    resources: '',
    evaluations: '',
    format: 'tabela'
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generatePrompt = () => {
    const { 
      teacherName, 
      schoolYear, 
      subject, 
      grade, 
      schoolName, 
      totalHours,
      methodologies, 
      resources, 
      evaluations, 
      format 
    } = formData;

    const lessonsPerUnit = Math.floor(parseInt(totalHours || 80) / 3);
    
    return `Aja como um Especialista Pedagógico Sênior. Crie um PLANO DE CURSO ANUAL extremamente detalhado, focado na UNIFICAÇÃO MUNICIPAL.

DADOS DE IDENTIFICAÇÃO:
- Docente: ${teacherName || '[Nome]'} | Ano: ${schoolYear}
- Instituição: ${schoolName || '[Escola]'}
- Componente: ${subject || '[Disciplina]'} | Série: ${grade || '[Série]'}
- Carga Horária: ${totalHours} aulas (divididas entre 3 Unidades Letivas: I, II e III).

REQUISITOS DE CONTEÚDO (ALTA DENSIDADE):
1. DESENVOLVIMENTO DETALHADO: Não liste apenas tópicos curtos. Desenvolva os conteúdos de forma profunda e descritiva para cada conjunto de aulas, explicando os conceitos fundamentais que serão abordados. Isso deve ajudar professores com dificuldade em desenvolver os assuntos.
2. CRONOGRAMA AULA POR AULA: Gere tabelas para as 3 Unidades. Colunas: Aula Nº, Assunto Detalhado/Habilidade BNCC, Metodologia, Recursos e Avaliação.
3. 4 AVALIAÇÕES POR UNIDADE: Garanta a presença de 4 momentos avaliativos obrigatórios por unidade.
4. INCLUSÃO E DIVERSIDADE: Seções automáticas robustas (Leis 10.639 e 11.645, BNCC, LDB).

ESTÉTICA E OTIMIZAÇÃO DE ESPAÇO (SAÍDA HTML):
- CSS DE ALTA COMPACTAÇÃO: Use margens laterais mínimas (1cm), reduza o espaçamento entre linhas (line-height: 1.2) e o padding das células das tabelas para que o plano seja CORRIDO e ocupe o mínimo de páginas possível (evite desperdício de papel no PDF).
- CABEÇALHOS AZUIS: Use Azul Marinho (#003366) para cabeçalhos e títulos.
- RODAPÉ: Inclua um botão centralizado "Gerar Documento (Imprimir)" que execute window.print(). Este botão deve ser ocultado na impressão (@media print).

PREFERÊNCIAS: Metodologias: ${methodologies} | Recursos: ${resources} | Avaliação: ${evaluations}`;
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-300 font-sans selection:bg-primary/20">
      {/* Lighter, Slimmer Bg */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <nav className="fixed top-0 w-full z-50 glass border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg shadow-lg">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight uppercase leading-none">Unificação Pedagógica</h1>
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">Salinas da Margarida</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl hover:bg-muted transition-all border border-border bg-background/50 flex items-center gap-2"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-10 rounded-3xl border border-border shadow-xl relative"
          >
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary leading-none">Alta Densidade de Conteúdo</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter italic">
                Planejamento <span className="text-primary italic">Detalhado & Unificado</span>
              </h2>
            </header>

            <div className="space-y-10">
              {/* Form Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Identification */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                    <User className="w-4 h-4 text-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Identificação</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Docente</label>
                      <input name="teacherName" value={formData.teacherName} onChange={handleInputChange} placeholder="Ex: Sérgio Araújo"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Ano Letivo</label>
                        <input name="schoolYear" value={formData.schoolYear} onChange={handleInputChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all text-center font-bold" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Aulas (Ano)</label>
                        <input name="totalHours" type="number" value={formData.totalHours} onChange={handleInputChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all text-center font-bold text-primary" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Escola</label>
                      <input name="schoolName" value={formData.schoolName} onChange={handleInputChange} placeholder="Unidade de Ensino"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Disciplina</label>
                        <input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Ex: História"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Série</label>
                        <input name="grade" value={formData.grade} onChange={handleInputChange} placeholder="Ex: 6º ano"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pedagogy */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                    <Library className="w-4 h-4 text-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Pedagógico</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Metodologias</label>
                      <textarea name="methodologies" value={formData.methodologies} onChange={handleInputChange} placeholder="Suas escolhas..."
                        className="w-full bg-background border border-border rounded-xl px-5 py-3 h-28 focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Recursos</label>
                      <textarea name="resources" value={formData.resources} onChange={handleInputChange} placeholder="O que utiliza..."
                        className="w-full bg-background border border-border rounded-xl px-5 py-3 h-28 focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Avaliações</label>
                      <textarea name="evaluations" value={formData.evaluations} onChange={handleInputChange} placeholder="Suas formas de avaliar..."
                        className="w-full bg-background border border-border rounded-xl px-5 py-3 h-28 focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy Action */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <Accessibility className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest">Otimização Inteligente</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed max-w-xs">
                        Conteúdos densos e CSS compacto para economizar papel e apoiar o desenvolvimento disciplinar.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="w-full md:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    {copied ? (
                      <>
                        <ClipboardCheck className="w-6 h-6" />
                        Prompt Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-6 h-6" />
                        Copiar Plano
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <footer className="mt-12 py-8 text-center space-y-3 opacity-60">
            <div className="flex justify-center gap-8 text-[9px] font-bold uppercase tracking-widest italic text-primary">
              <span>Alta Densidade</span>
              <span>Espaço Otimizado</span>
              <span>Educação Salinas</span>
            </div>
            <p className="text-[10px] font-bold tracking-widest leading-none">Secretaria Municipal de Educação · Bahia</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
