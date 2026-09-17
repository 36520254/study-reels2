export default function HomePage() {
  return (
    <div className="space-y-5">
      {/* 1. ヘッダー / TitleBadge */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bold text-gray-800">学習ユーザー</h1>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                初級チャレンジャー
              </span>
            </div>
            <p className="text-xs text-gray-500">志望校: 〇〇大学</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 text-lg relative">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* 2. AlertBanner (通知・目標) */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-indigo-100 font-semibold mb-1">本日の学習目標</p>
            <p className="font-bold text-lg">目標まであと 45 分！</p>
          </div>
          <span className="bg-white/20 text-xs px-2.5 py-1 rounded-lg backdrop-blur-sm">
            連勝中 🔥 5日
          </span>
        </div>
      </div>

      {/* 3. XPBar & StreakCard (ステータス) */}
      <div className="grid grid-cols-2 gap-3">
        {/* XP・レベル */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between text-xs mb-1 font-semibold text-gray-600">
            <span>Lv. 12</span>
            <span>450 / 1000 XP</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-indigo-600 h-2.5 rounded-full w-[45%]"></div>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">次のレベルまであと 550 XP</p>
        </div>

        {/* 連続日数 (Streak) */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">連続学習</p>
            <p className="text-2xl font-extrabold text-orange-500">5 <span className="text-xs text-gray-600 font-normal">日目</span></p>
          </div>
          <div className="text-3xl">🔥</div>
        </div>
      </div>

      {/* 4. RankingCarousel (ランキング概要) */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-sm text-gray-800">週間ランキング</h2>
          <span className="text-xs text-indigo-600 font-semibold cursor-pointer">すべて見る &gt;</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/60 border border-amber-100">
            <div className="flex items-center gap-2">
              <span className="font-black text-amber-600 w-4 text-center">1</span>
              <span className="text-xs font-bold">User_Alpha</span>
            </div>
            <span className="text-xs font-semibold text-gray-600">12.5 時間</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="font-black text-gray-400 w-4 text-center">2</span>
              <span className="text-xs font-bold">User_Beta</span>
            </div>
            <span className="text-xs font-semibold text-gray-600">10.2 時間</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-indigo-50 border border-indigo-100">
            <div className="flex items-center gap-2">
              <span className="font-black text-indigo-600 w-4 text-center">5</span>
              <span className="text-xs font-bold text-indigo-900">あなた</span>
            </div>
            <span className="text-xs font-bold text-indigo-600">7.8 時間</span>
          </div>
        </div>
      </div>
    </div>
  );
}