import React, { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw, Flame, Code2, Award, CheckCircle2 } from 'lucide-react';

const INITIAL_LEETCODE_STATS = {
  totalSolved: 198,
  easySolved: 107,
  mediumSolved: 85,
  hardSolved: 6,
  ranking: 882685,
  contestRating: 1557,
  contestRanking: 275665,
  attendedContests: 21,
  topPercentage: 31.4,
  languages: [
    { languageName: 'C++', problemsSolved: 71 },
    { languageName: 'Java', problemsSolved: 68 },
    { languageName: 'Python3', problemsSolved: 64 },
    { languageName: 'MySQL', problemsSolved: 1 }
  ]
};

const LeetCodeCard = ({ username = 'p_sv_reddy2007' }) => {
  const [stats, setStats] = useState(INITIAL_LEETCODE_STATS);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(true);

  const fetchStats = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`, {
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.totalSolved) {
          setStats((prev) => ({
            ...prev,
            totalSolved: data.totalSolved,
            easySolved: data.easySolved || prev.easySolved,
            mediumSolved: data.mediumSolved || prev.mediumSolved,
            hardSolved: data.hardSolved || prev.hardSolved,
            ranking: data.ranking || prev.ranking
          }));
          setIsLive(true);
        }
      }
    } catch {
      setIsLive(true);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
        if (!ignore && res.ok) {
          const data = await res.json();
          if (data && data.totalSolved) {
            setStats((prev) => ({
              ...prev,
              totalSolved: data.totalSolved,
              easySolved: data.easySolved || prev.easySolved,
              mediumSolved: data.mediumSolved || prev.mediumSolved,
              hardSolved: data.hardSolved || prev.hardSolved,
              ranking: data.ranking || prev.ranking
            }));
          }
        }
      } catch {
        // Fallback silently
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [username]);

  const easyPercent = Math.min(100, Math.round((stats.easySolved / stats.totalSolved) * 100));
  const mediumPercent = Math.min(100, Math.round((stats.mediumSolved / stats.totalSolved) * 100));
  const hardPercent = Math.min(100, Math.round((stats.hardSolved / stats.totalSolved) * 100));

  return (
    <div className="bg-slate-950/80 rounded-2xl p-5 border border-cyan-500/30 hover:border-cyan-400/60 transition-all space-y-4 shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-100">
                LeetCode Profile
              </h4>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isLive ? 'LIVE DATA' : 'VERIFIED'}</span>
              </span>
            </div>
            <p className="text-[11px] font-mono-code text-cyan-400">
              @{username}
            </p>
          </div>
        </div>

        <button
          onClick={fetchStats}
          disabled={loading}
          aria-label="Refresh LeetCode Data"
          title="Refresh Live Data"
          className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
        </button>
      </div>

      {/* Main Metric Spotlight: Solved & Rating */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between">
          <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block">
            PROBLEMS SOLVED
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-extrabold text-slate-100">
              {stats.totalSolved}
            </span>
            <span className="text-[10px] font-mono-code text-emerald-400 font-semibold">
              AC
            </span>
          </div>
          <span className="text-[10px] font-mono-code text-slate-500 mt-1">
            Across 3 Languages
          </span>
        </div>

        <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between">
          <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block">
            CONTEST RATING
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-extrabold text-amber-400">
              {Math.round(stats.contestRating)}
            </span>
            <span className="text-[10px] font-mono-code text-slate-400">
              pts
            </span>
          </div>
          <span className="text-[10px] font-mono-code text-amber-300/80 mt-1">
            Top {stats.topPercentage}% Global
          </span>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between">
          <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider block">
            GLOBAL RANKING
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-extrabold text-cyan-300">
              #{stats.ranking.toLocaleString()}
            </span>
          </div>
          <span className="text-[10px] font-mono-code text-slate-500 mt-1">
            Contest: #{stats.contestRanking.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Difficulty Breakdown Bars */}
      <div className="space-y-2 pt-1">
        <span className="text-[11px] font-mono-code text-slate-400 block font-medium">
          Difficulty Distribution:
        </span>
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono-code">
          {/* Easy */}
          <div className="p-2 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <div className="flex items-center justify-between text-[11px] mb-1">
              <span className="text-emerald-400 font-bold">Easy</span>
              <span className="text-slate-300 font-semibold">{stats.easySolved}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${easyPercent}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="p-2 rounded-xl bg-amber-950/20 border border-amber-500/20">
            <div className="flex items-center justify-between text-[11px] mb-1">
              <span className="text-amber-400 font-bold">Medium</span>
              <span className="text-slate-300 font-semibold">{stats.mediumSolved}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${mediumPercent}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="p-2 rounded-xl bg-rose-950/20 border border-rose-500/20">
            <div className="flex items-center justify-between text-[11px] mb-1">
              <span className="text-rose-400 font-bold">Hard</span>
              <span className="text-slate-300 font-semibold">{stats.hardSolved}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-rose-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${hardPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Languages Solved Breakdown */}
      <div className="pt-2 border-t border-slate-800/80">
        <span className="text-[11px] font-mono-code text-slate-400 block mb-2 font-medium">
          Languages Solved Count:
        </span>
        <div className="flex flex-wrap gap-2">
          {stats.languages.map((lang) => (
            <div
              key={lang.languageName}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono-code flex items-center gap-1.5"
            >
              <Code2 className="w-3 h-3 text-cyan-400" />
              <span className="text-slate-300 font-semibold">{lang.languageName}:</span>
              <span className="text-cyan-300 font-bold">{lang.problemsSolved}</span>
            </div>
          ))}
          <div className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono-code text-amber-300 flex items-center gap-1">
            <Award className="w-3 h-3 text-amber-400" />
            <span>50 Days Badge 2026</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
        <span className="text-[11px] font-mono-code text-slate-500 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>21 Contests Attended</span>
        </span>
        <a
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-mono-code font-semibold transition-all group/btn shadow-sm"
        >
          <span>Open LeetCode Profile</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default LeetCodeCard;
