export default function ScriptBox() {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2">ChaosHub</h2>
      <div className="bg-black text-white p-2 rounded text-sm break-all">
        <span className="text-blue-400">loadstring</span>(game:<span className="text-blue-400">HttpGet</span>("https://chaos-hub.vercel.app/script"))
      </div>
      <button
        className="mt-2 px-4 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-sm"
        onClick={() => {
          navigator.clipboard.writeText('loadstring(game:HttpGet("https://chaos-hub.vercel.app/script"))')
        }}
      >copy script</button>
    </div>
  )
          }
