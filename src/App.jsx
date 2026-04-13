import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Trophy, 
  Calendar, 
  UserPlus, 
  CheckCircle2, 
  ChevronRight, 
  Activity, 
  MapPin,
  Clock,
  Zap,
  ShieldCheck,
  Target,
  Info
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('landing'); // landing, signup, dashboard, ladder
  const [isRegistered, setIsRegistered] = useState(false);
  
  // Mock Data
  const [players, setPlayers] = useState([
    { id: 1, name: "Marcus Reed", rank: 1, points: 1250, winRate: "78%", status: "Active" },
    { id: 2, name: "Sarah Chen", rank: 2, points: 1180, winRate: "72%", status: "Active" },
    { id: 3, name: "David Miller", rank: 3, points: 1145, winRate: "65%", status: "Active" },
    { id: 4, name: "Elena Rossi", rank: 4, points: 1120, winRate: "61%", status: "Active" },
  ]);

  const [matches, setMatches] = useState([
    { id: 101, court: 1, player1: "Marcus", player2: "Sarah", time: "9:00 AM", status: "Upcoming" },
    { id: 102, court: 2, player1: "David", player2: "Elena", time: "9:00 AM", status: "Warm-up" },
  ]);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setView('dashboard');
  };

  // UI Components
  const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-[24px] p-6 shadow-sm border border-[#D2D2D7] ${className}`}>
      {children}
    </div>
  );

  const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const variants = {
      primary: "bg-[#0071E3] text-white hover:bg-[#0077ED]",
      secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
      dark: "bg-[#1D1D1F] text-white hover:bg-black",
      lime: "bg-[#C1FF07] text-black hover:bg-[#B1E606]"
    };
    return (
      <button 
        onClick={onClick}
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#0071E3]/20">
        <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="text-[#C1FF07] w-5 h-5" />
            </div>
            HAWTHORN SUNDAY
          </div>
          <Button onClick={() => setView('signup')} variant="dark">Apply to Play</Button>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            One Set.<br /><span className="text-[#0071E3]">Final Rank.</span>
          </h1>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto mb-10 leading-relaxed">
            High-intensity Sunday doubles in Hawthorn, NY. Automated ladder rankings, 
            performance tracking, and pure competitive tennis.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => setView('signup')} className="text-lg px-10 py-6">Apply for Match Day</Button>
            <Button onClick={() => setView('ladder')} variant="secondary" className="text-lg px-10 py-6">View Standings</Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Card>
              <Activity className="text-[#0071E3] mb-4" />
              <h3 className="font-bold text-lg mb-2">Live Ladder</h3>
              <p className="text-sm text-[#86868B]">Points update instantly. Every set determines your position for next Sunday.</p>
            </Card>
            <Card>
              <Target className="text-[#0071E3] mb-4" />
              <h3 className="font-bold text-lg mb-2">The Code</h3>
              <p className="text-sm text-[#86868B]">We play by the S-I-R-F-O framework. No statues at the net. Move or lose.</p>
            </Card>
            <Card>
              <Users className="text-[#0071E3] mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Level</h3>
              <p className="text-sm text-[#86868B]">Strict 3.5 - 4.5 spread ensures every Sunday hit is high quality.</p>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (view === 'signup') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <button onClick={() => setView('landing')} className="text-[#86868B] text-sm mb-8 flex items-center gap-1 hover:text-black transition-colors">
            ← Back
          </button>
          <h2 className="text-4xl font-bold tracking-tight mb-2">Apply to Play.</h2>
          <p className="text-[#86868B] mb-8">Matches are high-intensity. We'll review your NTRP and add you to the Sunday rotation.</p>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-[#86868B] mb-1">Full Name</label>
              <input type="text" required className="w-full p-4 bg-[#F5F5F7] rounded-xl border-none focus:ring-2 focus:ring-[#0071E3] transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#86868B] mb-1">NTRP Level</label>
              <select className="w-full p-4 bg-[#F5F5F7] rounded-xl border-none focus:ring-2 focus:ring-[#0071E3] transition-all">
                <option>3.5 (Intermediate)</option>
                <option>4.0 (Advanced)</option>
                <option>4.5 (Elite)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#86868B] mb-1">Mobile Number (For Match Alerts)</label>
              <input type="tel" required className="w-full p-4 bg-[#F5F5F7] rounded-xl border-none focus:ring-2 focus:ring-[#0071E3] transition-all" placeholder="914-000-0000" />
            </div>
            <Button className="w-full py-4 mt-4">Join Sunday Pool</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-white border-r border-[#D2D2D7] p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="font-bold tracking-tight text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#0071E3]" /> HAWTHORN
          </div>
          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: Calendar, label: 'Match Day' },
              { id: 'ladder', icon: Trophy, label: 'Ladder' },
              { id: 'strategy', icon: ShieldCheck, label: 'The Strategy' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => setView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  view === item.id ? 'bg-[#0071E3] text-white shadow-md' : 'text-[#86868B] hover:bg-[#F5F5F7] hover:text-black'
                }`}
              >
                <item.icon size={18} /> {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 bg-[#F5F5F7] rounded-2xl">
          <p className="text-[10px] font-bold text-[#86868B] uppercase mb-1">Court Status</p>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            IN PLAY: Courts 1-4
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {view === 'dashboard' ? 'Sunday Rotation' : view === 'ladder' ? 'Ladder Standings' : 'The Hawthorn Code'}
            </h2>
            <p className="text-[#86868B] text-sm">Season 1 • Sunday 9:00 AM</p>
          </div>
        </header>

        {view === 'dashboard' && (
          <div className="space-y-8">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#86868B] mb-4">Current Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matches.map(match => (
                  <Card key={match.id}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="px-3 py-1 bg-black text-[#C1FF07] text-[10px] font-black rounded-md uppercase tracking-tighter">
                        Court {match.court}
                      </div>
                      <span className="text-[11px] font-bold text-[#86868B] flex items-center gap-1">
                        <Clock size={12} /> {match.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 text-center">
                        <div className="w-12 h-12 bg-[#F5F5F7] rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-lg">M</div>
                        <p className="font-bold text-sm">{match.player1}</p>
                      </div>
                      <div className="text-[#D2D2D7] font-black text-xs italic">VS</div>
                      <div className="flex-1 text-center">
                        <div className="w-12 h-12 bg-[#F5F5F7] rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-lg">S</div>
                        <p className="font-bold text-sm">{match.player2}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="dark" className="w-full text-xs py-2">Submit Set Score</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
            
            <section className="bg-white rounded-[24px] p-6 border border-[#D2D2D7]">
               <h3 className="font-bold mb-4 flex items-center gap-2">
                 <Info size={18} className="text-[#0071E3]" /> Sunday Rules
               </h3>
               <ul className="space-y-3 text-sm text-[#86868B]">
                 <li className="flex gap-3">
                   <span className="font-bold text-black">1.</span>
                   One set only. No advantage scoring (Deuce = Receiver's choice).
                 </li>
                 <li className="flex gap-3">
                   <span className="font-bold text-black">2.</span>
                   Winners stay on court and split partners.
                 </li>
                 <li className="flex gap-3">
                   <span className="font-bold text-black">3.</span>
                   Fresh can for every new rotation.
                 </li>
               </ul>
            </section>
          </div>
        )}

        {view === 'ladder' && (
          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-[#F5F5F7] flex justify-between items-center">
              <h3 className="font-bold">Point Leaders</h3>
              <div className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Dynamic Rankings</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F5F5F7] text-[#86868B] text-[10px] font-black uppercase tracking-widest">
                    <th className="px-6 py-3">Rank</th>
                    <th className="px-6 py-3">Player</th>
                    <th className="px-6 py-3">ELO Points</th>
                    <th className="px-6 py-3">Win %</th>
                    <th className="px-6 py-3">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5F5F7]">
                  {players.map(p => (
                    <tr key={p.id} className="hover:bg-[#F5F5F7]/50 transition-colors">
                      <td className="px-6 py-4 font-black text-lg">#{p.rank}</td>
                      <td className="px-6 py-4 font-bold text-sm">{p.name}</td>
                      <td className="px-6 py-4 font-medium text-sm">{p.points}</td>
                      <td className="px-6 py-4 font-medium text-sm">{p.winRate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-emerald-500 font-bold text-xs italic">
                          ↑ {Math.floor(Math.random() * 10) + 1}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {view === 'strategy' && (
          <div className="max-w-3xl space-y-6">
            <Card className="bg-[#1D1D1F] text-white border-none">
              <h3 className="text-xl font-bold mb-4 text-[#C1FF07]">The S-I-R-F-O Protocol</h3>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                As the returner’s partner, your eyes go through this cycle for every point. 
                Do not watch your partner’s return. Focus on the net man.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {['Server', 'In', 'Returner', 'Fly', 'Offense'].map((step, i) => (
                  <div key={step} className="p-3 bg-white/5 rounded-xl text-center border border-white/10">
                    <div className="text-[10px] text-white/40 mb-1">Step {i+1}</div>
                    <div className="font-black text-xs uppercase tracking-tighter">{step}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h4 className="font-bold text-sm mb-3 uppercase tracking-wider text-[#0071E3]">One-Step Poach</h4>
                <p className="text-xs text-[#86868B] leading-loose">
                  Start 3 feet from the net and 2 feet from the alley. From here, you are one explosive step 
                  away from cutting off the middle. If you stand too centered, you leave the alley wide. 
                  If you stand too wide, you're a spectator.
                </p>
              </Card>
              <Card>
                <h4 className="font-bold text-sm mb-3 uppercase tracking-wider text-[#0071E3]">Both-Up Trigger</h4>
                <p className="text-xs text-[#86868B] leading-loose">
                  If the ball lands within 4 feet of the baseline, both players MUST charge. 
                  In doubles, 80% of points end at the net. If you hit deep, you earn the right 
                  to close the point.
                </p>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;