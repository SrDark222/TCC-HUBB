import ScriptBox from '@/components/ScriptBox'
import StatusBox from '@/components/StatusBox'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Chaos Studio</h1>
      <p className="text-zinc-400 max-w-xl mb-8">
        Chaos Hub é um script feito por Chaos studio, interativo e fácil de usar. Sempre tendo ótimas funções para jogos famosos e jogos menores. Estaremos sempre dispostos a sugestões tanto para a criação de scripts para outros jogos ou ideias de funções novas.
      </p>
      <ScriptBox />
      <StatusBox />
    </div>
  )
    }
