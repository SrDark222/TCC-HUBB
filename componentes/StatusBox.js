const gameStatus = [
  { name: 'Brookhaven RP', icon: '🏡', color: 'bg-green-500' },
  { name: 'Blue Lock: Rivals', icon: '', color: 'bg-green-500' },
  { name: 'Blox Fruits', icon: '', color: 'bg-green-500' },
  { name: 'Murder Mystery 2', icon: '', color: 'bg-red-500' },
  { name: 'Gym League', icon: '💪', color: 'bg-purple-500' }
]

const executorStatus = [
  { name: 'KRNL', color: 'bg-green-500' },
  { name: 'Delta', color: 'bg-green-500' },
  { name: 'Fluxus', color: 'bg-green-500' },
  { name: 'Codex', color: 'bg-green-500' }
]

export default function StatusBox() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Chaos hub script status</h2>
      <div className="bg-zinc-900 p-4 rounded-lg mb-6">
        {gameStatus.map((game, idx) => (
          <div key={idx} className="flex justify-between items-center border-b border-zinc-700 py-1">
            <span>{game.name} {game.icon}</span>
            <span className={`w-3 h-3 rounded-full ${game.color}`}></span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Chaos hub executor status</h2>
      <div className="bg-zinc-900 p-4 rounded-lg">
        {executorStatus.map((exec, idx) => (
          <div key={idx} className="flex justify-between items-center border-b border-zinc-700 py-1">
            <span>{exec.name}</span>
            <span className={`w-3 h-3 rounded-full ${exec.color}`}></span>
          </div>
        ))}
      </div>
    </div>
  )
  }
